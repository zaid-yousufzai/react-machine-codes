import React, { useMemo, useState } from "react";
import recipesData from "./recipesData";
import "./recipe_style.css";

const RecipeFilterApp = () => {
  const [rating, setRating] = useState(4.0);
  const [cart, setCart] = useState(0);

  const handleRating = (e) => {
    setRating(Number(e.target.value));
  };

  // Filter recipes
  const filteredRecipes = useMemo(() => {
    console.log("filtr");
    return recipesData.filter((recipe) => recipe.rating >= rating);
  }, [rating]);

  //    const filteredRecipes = recipesData.filter((recipe) => {
  //     console.log("filtr")
  // return recipe.rating >= rating;
  //    } );

  // Calculate average rating
  const averageRating = useMemo(() => {
    if (filteredRecipes.length === 0) return 0;

    const total = filteredRecipes.reduce(
      (sum, recipe) => sum + recipe.rating,
      0,
    );

    return total / filteredRecipes.length;
  }, [filteredRecipes]);

  return (
    <div>
      <h1>Recipe Filter App</h1>

      <div className="upper-item">
        <div>
          <label htmlFor="rating">Filter by Rating: </label>

          <select id="rating" value={rating} onChange={handleRating}>
            <option value={4.0}>4.0+</option>
            <option value={4.3}>4.3+</option>
            <option value={4.5}>4.5+</option>
            <option value={4.7}>4.7+</option>
            <option value={4.9}>4.9+</option>
          </select>
        </div>

        <h2>Cart Items: {cart}</h2>
      </div>

      <h2>Average Rating: {averageRating.toFixed(2)}</h2>

      <div className="container">
        {filteredRecipes.map((item) => (
          <div className="card" key={item.id}>
            <img src={item.image} alt={item.name} />

            <h2>{item.name}</h2>

            <h3>{item.cuisine}</h3>

            <div className="rating-container">
              <p>⭐ {item.rating}</p>
              <p>({item.reviewCount} reviews)</p>
            </div>

            <button onClick={() => setCart((prev) => prev + 1)}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecipeFilterApp;
