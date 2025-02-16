import mongoose from "mongoose";

const recipeSchema = new mongoose.Schema({
  email: { type: String, req},
  title: { type: String, required: true },
  image: { type: String },
  description: { type: String },
  ingredients: [{ type: String, required: true }], 
  instructions: [{ type: String, required: true }],
  cookTime: { type: String },
  servings: { type: Number, required: true },
  category: { type: String, required: true }
});

const Recipe = mongoose.model("Recipe", recipeSchema);

module.exports = Recipe;
