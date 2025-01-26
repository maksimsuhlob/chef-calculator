/* eslint-disable import/no-extraneous-dependencies */
import React, { useEffect, useState } from 'react';
import {
  View, Text, TouchableOpacity, StyleSheet, FlatList,
} from 'react-native';
import { ThemedView } from '@/components/ThemedView';
import { ThemedText } from '@/components/ThemedText';
import { Link } from 'expo-router';
import { FIRESTORE_DB } from '@/FirebaseConfig';
import { collection, onSnapshot } from 'firebase/firestore';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  categoryContainer: {
    marginBottom: 16,
  },
  categoryButton: {
    backgroundColor: '#4CAF50',
    padding: 16,
    borderRadius: 8,
  },
  categoryText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  recipesContainer: {
    marginTop: 8,
    paddingLeft: 16,
  },
  recipeLink: {
    marginVertical: 4,
    padding: 12,
    backgroundColor: '#E0E0E0',
    borderRadius: 8,
  },
  recipeText: {
    fontSize: 16,
    color: '#333',
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
});

interface Recipe {
  id: string;
  name: string;
  photo: string;
  ingredients: string[];
  steps: string[];
  comments: string[];
}

interface Category {
  id: string;
  name: string;
  recipes: Recipe[];
}

export default function HomeScreen() {
  const [expandedCategoryId, setExpandedCategoryId] = useState<string | null>(null);
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    const cookBookRecepi = collection(FIRESTORE_DB, 'cookBook');
    const categori: Category[] = [];

    onSnapshot(cookBookRecepi, {
      next: (snapshot) => {
        snapshot.docs.forEach((doc) => {
          categori.push({
            ...doc.data() as Category,
          });
        });
        setCategories(categori);
      },
    });
  }, []);

  const toggleCategory = (id: string) => {
    setExpandedCategoryId((prevId) => (prevId === id ? null : id));
  };

  return (
    <View style={styles.container}>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">cookbook</ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="default">groups and receipts</ThemedText>
      </ThemedView>

      <FlatList
        data={categories}
        keyExtractor={(item) => item.id}
        renderItem={({ item: category }) => (
          <View style={styles.categoryContainer}>
            <TouchableOpacity
              style={styles.categoryButton}
              onPress={() => toggleCategory(category.id)}
            >
              <Text style={styles.categoryText}>{category.name}</Text>
            </TouchableOpacity>
            {expandedCategoryId === category.id && (
              <View style={styles.recipesContainer}>
                {category.recipes.map((recipe) => (
                  <Link
                    key={recipe.id}
                    href={{
                      pathname: '/recipeDetails/recipe',
                      params: { recipe: JSON.stringify(recipe) },
                    }}
                    style={styles.recipeLink}
                  >
                    <Text style={styles.recipeText}>{recipe.name}</Text>
                  </Link>
                ))}
              </View>
            )}
          </View>
        )}
      />
    </View>
  );
}
