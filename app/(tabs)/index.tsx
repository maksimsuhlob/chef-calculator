import React, { useState } from 'react';
import {
  View, Text, TouchableOpacity, StyleSheet, FlatList,
} from 'react-native';
import { ThemedView } from '@/components/ThemedView';
import { ThemedText } from '@/components/ThemedText';
import { Link } from 'expo-router';

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

const categories: Category[] = [
  {
    id: '1',
    name: 'Breakfast',
    recipes: [
      {
        id: '1',
        name: 'Pancakes',
        photo: 'https://cdn.apartmenttherapy.info/image/upload/f_auto,q_auto:eco,c_fill,g_auto,w_1500,ar_3:2/k%2FPhoto%2FRecipes%2F2024-06-seo-pancakes%2Fseo-pancakes-232',
        ingredients: ['2 cups flour', '1 cup milk', '2 eggs', '1 tbsp sugar'],
        steps: ['Mix all ingredients', 'Heat a pan', 'Pour batter', 'Cook until golden brown'],
        comments: ['Delicious!', 'Easy to make'],
      },
      {
        id: '2',
        name: 'Omelette',
        photo: 'https://www.simplyrecipes.com/thmb/LLhiA8KZ7JZ5ZI0g-1bF1eg-gGM=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2018__10__HT-Make-an-Omelet-LEAD-HORIZONTAL-17cd2e469c4a4ccbbd1273a7cae6425c.jpg',
        ingredients: ['3 eggs', '1/4 cup milk', 'Salt', 'Pepper'],
        steps: ['Beat eggs with milk', 'Heat a pan', 'Pour mixture', 'Cook until set'],
        comments: ['Perfect for breakfast!', 'Loved it.'],
      },
    ],
  },
  {
    id: '2',
    name: 'Lunch',
    recipes: [
      {
        id: '3',
        name: 'Grilled Cheese',
        photo: 'https://flavor-feed.com/wp-content/uploads/2024/02/Untitled-design-2024-02-26T102112.850.jpg',
        ingredients: ['2 slices of bread', '1 slice of cheese', 'Butter'],
        steps: ['Butter the bread', 'Place cheese between slices', 'Grill until golden brown'],
        comments: ['So cheesy!', 'Kids loved it.'],
      },
      {
        id: '4',
        name: 'Caesar Salad',
        photo: 'https://pamelasalzman.com/wp-content/uploads/2022/08/IMG_9717-scaled.jpg',
        ingredients: ['Romaine lettuce', 'Caesar dressing', 'Croutons', 'Parmesan cheese'],
        steps: ['Wash and chop lettuce', 'Add dressing', 'Toss with croutons and cheese'],
        comments: ['Fresh and tasty!', 'Great for a light lunch.'],
      },
    ],
  },
  {
    id: '3',
    name: 'Dinner',
    recipes: [
      {
        id: '5',
        name: 'Steak',
        photo: 'https://www.allrecipes.com/thmb/OJ28fIFte6Pyg93ML8IM-APbu1Y=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/AR-14554-sirloin-steak-with-garlic-butter-hero-4x3-d12fa79836754fcf850388e4677bbf55.jpg',
        ingredients: ['1 steak', 'Salt', 'Pepper', 'Olive oil'],
        steps: ['Season steak', 'Heat a pan', 'Cook steak to desired doneness'],
        comments: ['Perfectly cooked!', 'Juicy and flavorful.'],
      },
      {
        id: '6',
        name: 'Spaghetti',
        photo: 'https://img.wprost.pl/img/pyszne-spaghetti-z-kremowym-sosem-przepis-na-ekspresowe-danie-od-szefa-kuchni/8f/9a/34742424a89472d4c651a687110a.webp',
        ingredients: ['Spaghetti pasta', 'Tomato sauce', 'Ground beef', 'Parmesan cheese'],
        steps: ['Cook pasta', 'Prepare sauce', 'Mix pasta with sauce', 'Serve with cheese'],
        comments: ['Classic dish!', 'Everyone loved it.'],
      },
    ],
  },
];

export default function HomeScreen() {
  const [expandedCategoryId, setExpandedCategoryId] = useState<string | null>(null);

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
