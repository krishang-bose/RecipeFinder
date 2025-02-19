import csv from "csvtojson";
import path from "path";
import { fileURLToPath } from "url";

// Fix __dirname in ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

let recipesData = [];

// Function to load and parse CSV
const loadCSVData = async () => {
  try {
    const csvFilePath = path.join(__dirname, "../data/data_csv.csv");
    recipesData = await csv().fromFile(csvFilePath);
    console.log("CSV Data Loaded Successfully");
  } catch (err) {
    console.error("Error loading CSV:", err);
  }
};

// Call the function on server start
loadCSVData();

export const getRecipesData = () => recipesData;

