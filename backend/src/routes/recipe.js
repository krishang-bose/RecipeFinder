import { Router } from "express";
const router = Router();

import recipeController from "../controller/recipe.js";

// Route: /api/recipes/search?query=chicken
router.get("/search", recipeController.searchRecipes);

export default router;
