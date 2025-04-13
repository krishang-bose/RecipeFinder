import { Router } from "express";
const router = Router(); // ✅ Correct initialization

import recipeController from "../controller/recipe.js";

router.get("/search", recipeController.searchRecipes);

export default router;
