import { getRecipesData } from "../lib/csvParser.js";

// Search Recipes Controller
const searchRecipes = (req, res) => {
  const query = req.query.query ? req.query.query.toLowerCase() : "";

  if (!query) {
    return res.status(400).json({ message: "Please provide a search query." });
  }

  const recipes = getRecipesData();

  // Filtering of the recipes 
  const filteredRecipes = recipes.filter(recipe => {
    const nameMatch = recipe.name.toLowerCase().includes(query);
    const ingredientMatch = recipe.ingredients.toLowerCase().includes(query);
    return nameMatch || ingredientMatch;
  });

  if (filteredRecipes.length === 0) {
    return res.status(404).json({ message: "No recipes found." });
  }

  res.json(filteredRecipes);
};

export default {
  searchRecipes
};
