import React from 'react';
import {
  View, Text, Image, StyleSheet, ScrollView, TouchableOpacity,
} from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 8,
    marginBottom: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    flex: 1,
    textAlign: 'center',
  },
  section: {
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#4CAF50',
  },
  text: {
    fontSize: 16,
    marginBottom: 4,
    color: '#333',
  },
  errorText: {
    fontSize: 18,
    color: 'red',
    textAlign: 'center',
    marginTop: 20,
  },
  backButton: {
    backgroundColor: 'grey',
    borderRadius: 50,
    padding: 10,
    marginBottom: 5,
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default function RecipeScreen() {
  const { recipe: recipeString } = useLocalSearchParams();
  const router = useRouter();

  if (!recipeString) {
    return (
      <View style={styles.container}>
        <Text style={styles.errorText}>No recipe data provided.</Text>
      </View>
    );
  }

  const recipe = JSON.parse(recipeString as string);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.headerContainer}>
        <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={24} color="white" />
        </TouchableOpacity>
        <Text style={styles.title}>{recipe.name}</Text>
      </View>
      <Image source={{ uri: recipe.photo }} style={styles.image} />

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Ingredients</Text>
        {recipe.ingredients.map((ingredient: string) => (
          <Text key={ingredient} style={styles.text}>
            •
            {' '}
            {ingredient}
          </Text>
        ))}
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>How to Cook</Text>
        {recipe.steps.map((step: string) => (
          <Text key={step} style={styles.text}>
            {step}
          </Text>
        ))}
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Comments</Text>
        {recipe.comments.map((comment: string) => (
          <Text key={comment} style={styles.text}>
            •
            {' '}
            {comment}
          </Text>
        ))}

      </View>
    </ScrollView>
  );
}
