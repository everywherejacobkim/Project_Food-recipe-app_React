import './App.css';
import React, { useState } from 'react';
import axios from 'axios';
import RecipeGallery from './component/recipeGallery';
function App() {

  const [query, queryEdit] = useState("")
  const [recipes, recipesEdit] = useState([])

  const YOUR_APP_ID = '15302604';
  const YOUR_APP_KEY = 'a668c1ac2179cadc1b09acd7c6182b50';
  
  let url = `https://api.edamam.com/search?q=${query}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&health=alcohol-free`;

  async function getRecipes(){
    let result = await axios.get(url);
    recipesEdit(result.data.hits);

  }

  const onSubmit = (e) => {
    e.preventDefault();
    getRecipes();
  }

  return (
    <div className="App">
      <div className='header'>
        <h1>Search Your Food Recipe</h1>
          <form className='searchForm' onSubmit={onSubmit}>
            <input 
              type='text' 
              placeholder='Enter Ingredient' 
              value={query} 
              onChange={(e)=>queryEdit(e.target.value)}>
            </input>
            <button>Search</button>

          </form>
      </div>

      <div className='appRecipes'>
        {recipes.map((recipe) => {
          return <RecipeGallery recipe={recipe}></RecipeGallery>;
        })}
      </div>



    </div>




  );
}

export default App;
