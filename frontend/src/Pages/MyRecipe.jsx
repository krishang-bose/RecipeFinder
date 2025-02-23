import { BrowserRouter as Router, Routes, Route, Link, useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import { ChevronLeft, PlusCircle, Heart, ChevronRight } from "lucide-react";

const recipesData = [
  {
    "id": 1,
    "title": "Pasta Carbonara",
    "image": "https://i.pinimg.com/736x/31/bd/88/31bd88cc2c87124bc29a9009609be881.jpg",
    "description": "Classic Italian pasta dish.",
    "instructions": [
      "Boil the Pasta: Bring a large pot of salted water to a boil. Cook the spaghetti until al dente. Reserve about ½ cup of pasta water before draining.",
      "Prepare the Sauce: In a bowl, whisk together the eggs, grated cheese, and a generous amount of black pepper. Set aside.",
      "Cook the Pancetta: In a large pan over medium heat, cook the diced pancetta (or guanciale) until crispy. Optionally, add crushed garlic for extra flavor, then remove it before adding pasta.",
      "Combine Pasta & Pancetta: Add the drained pasta to the pan with pancetta. Toss well to coat with the rendered fat. Remove the pan from heat.",
      "Create the Creamy Sauce: Slowly pour in the egg mixture while tossing the pasta continuously. If needed, add reserved pasta water (a little at a time) to achieve a silky sauce.",
      "Final Touch: Season with extra black pepper and more grated cheese. Serve immediately and enjoy!"
    ]
  },
  
  { id: 2, title: "Chocolate Cake", image: "https://i.pinimg.com/736x/fd/49/15/fd49150a45f56427ddc5da1da08861f4.jpg", description: "Delicious and moist chocolate cake.", instructions: "lorem ipsum"},
  { id: 3, title: "Caesar Salad", image: "https://i.pinimg.com/736x/2b/76/21/2b7621769b5076421937b37856188ed3.jpg", description: "Healthy and tasty salad.", instructions: "lorem ipsum"},
  { id: 4, title: "Chicken Tikka Masala", image: "https://i.pinimg.com/474x/18/e2/3e/18e23ebd4e6150549880665c52b8d80a.jpg", description: "Indian Chicken Gravy Dish.", instructions: "lorem ipsum"},
  { id: 5, title: "Sushi Rolls", image: "https://i.pinimg.com/474x/d6/5a/9c/d65a9c6f70a8a1a6aa1c09827a9e3ce2.jpg", description: "Japanese rice rolls", instructions: "lorem ipsum"},
  { id: 6, title: "Margarita Pizza", image: "https://i.pinimg.com/736x/62/a0/50/62a050cfa783c0f897bcf25325be5fac.jpg", description: "A classic Italian pizza" , instructions: "lorem ipsum"}
];

export default function MyRecipeDiary() {
  return (
    <div className="min-h-screen bg-[#FAFAF9]">
      <div className="container mx-auto px-4 py-12">
        <div className="flex items-center justify-between mb-12">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900">My Recipes</h1>
          <Link 
            to="/CreateRecipe" 
            className="group flex items-center gap-2 px-5 py-2.5 bg-black text-white rounded-full transition-all duration-300 hover:bg-gray-800"
          >
            <PlusCircle size={20} className="transition-transform group-hover:rotate-90" />
            <span>Add Recipe</span>
          </Link>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {recipesData.map((recipe) => (
            <Link 
              to={`/recipe/${recipe.id}`} 
              key={recipe.id} 
              className="group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div className="absolute top-4 right-4 z-10">
                <button className="p-2 bg-white/80 backdrop-blur rounded-full hover:bg-white transition-colors">
                  <Heart size={20} className="text-gray-600" />
                </button>
              </div>
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src={recipe.image} 
                  alt={recipe.title} 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-2">{recipe.title}</h2>
                <p className="text-gray-600 line-clamp-2">{recipe.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export function RecipeDetail() {
  const navigate = useNavigate();
  const { id } = useParams();
  const recipe = recipesData.find((r) => r.id === parseInt(id));

  if (!recipe) return <div className="text-center text-2xl">Recipe Not Found</div>;

  return (
    <div className="min-h-screen bg-[#FAFAF9]">
      <div className="container mx-auto px-4 py-12">
        <button 
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors mb-8"
        >
          <ChevronLeft size={20} />
          <span>Back to recipes</span>
        </button>
        
        <div className="bg-white rounded-2xl overflow-hidden shadow-sm">
          <div className="aspect-[16/9] overflow-hidden">
            <img 
              src={recipe.image} 
              alt={recipe.title} 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">{recipe.title}</h1>
            <p className="text-lg text-gray-600 mb-6">{recipe.description}</p>
            <div className="prose max-w-none">
              <h2 className="text-2xl font-semibold mb-4">Instructions</h2>
              <p className="text-gray-600">{recipe.instructions}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function CreateRecipe() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("New Recipe: ", { title, description });
    navigate("/MyRecipeDiary");
  };

  return (
    <div className="min-h-screen bg-[#FAFAF9]">
      <div className="container mx-auto px-4 py-12">
        <button 
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors mb-8"
        >
          <ChevronLeft size={20} />
          <span>Back to recipes</span>
        </button>

        <div className="max-w-2xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Create a Recipe</h1>
          <div className="bg-white rounded-2xl shadow-sm p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-2">
                  Recipe Title
                </label>
                <input 
                  id="title"
                  type="text" 
                  placeholder="Enter recipe title" 
                  value={title} 
                  onChange={(e) => setTitle(e.target.value)} 
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-black focus:border-transparent transition-all outline-none"
                  required 
                />
              </div>
              
              <div>
                <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-2">
                  Description
                </label>
                <textarea 
                  id="description"
                  placeholder="Enter recipe description" 
                  value={description} 
                  onChange={(e) => setDescription(e.target.value)} 
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-black focus:border-transparent transition-all outline-none min-h-[120px]"
                  required 
                />
              </div>

              <button 
                type="submit" 
                className="w-full px-6 py-3 bg-black text-white font-medium rounded-lg hover:bg-gray-800 transition-colors"
              >
                Create Recipe
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}