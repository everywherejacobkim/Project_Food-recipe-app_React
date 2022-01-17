import './App.css';
import React, { useState } from 'react';
import axios from 'axios';
import RecipeGallery from './component/recipeGallery';
function App() {

  const [query, queryEdit] = useState("");
  const [recipes, recipesEdit] = useState([]);
  const [healthLabel, healthLabelEdit] = useState("vegan");

  const YOUR_APP_ID = '15302604';
  const YOUR_APP_KEY = 'a668c1ac2179cadc1b09acd7c6182b50';
  
  let url = `https://api.edamam.com/search?q=${query}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&health=${healthLabel}`;

  async function getRecipes(){
    let result = await axios.get(url);
    recipesEdit(result.data.hits);
    console.log(result.data);
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
              list='autoOptions'
              placeholder='Enter Ingredient' 
              value={query} 
              onChange={(e)=>queryEdit(e.target.value)}>
            </input>
            <datalist id='autoOptions'>
                <option value='Egg'></option>
                <option value='Egg Plant'></option>
                <option value='Potato'></option>
                <option value='Sweet Potato'></option>
                <option value='Bean'></option>
                <option value='Beef'></option>
                <option value='Olive'></option>
                <option value='Pork'></option>
                <option value='Pork Belly'></option>
                <option value='Chicken'></option>
                <option value='Melon'></option>
                <option value='Banana'></option>
            </datalist>
            <button>Search</button>
            <select className='healthLabels'>
              <option onClick={()=> healthLabelEdit("vegan")}>Vegan</option>
              <option onClick={()=> healthLabelEdit("vegetarian")}>Vegetarian</option>
              <option onClick={()=> healthLabelEdit("paleo")}>Paleo</option>
              <option onClick={()=> healthLabelEdit("dairy-free")}>Dairy-free</option>
              <option onClick={()=> healthLabelEdit("gluten-free")}>Gluten-free</option>
              <option onClick={()=> healthLabelEdit("wheat-free")}>Wheat-free</option>
              <option onClick={()=> healthLabelEdit("fat-free")}>Fat-free</option>
              <option onClick={()=> healthLabelEdit("low-sugar")}>Low-sugar</option>
              <option onClick={()=> healthLabelEdit("egg-free")}>Egg-free</option>
              <option onClick={()=> healthLabelEdit("peanut-free")}>Peanut-free</option>
              <option onClick={()=> healthLabelEdit("tree-nut-free")}>Tree-nut-free</option>
              <option onClick={()=> healthLabelEdit("soy-free")}>Soy-free</option>
              <option onClick={()=> healthLabelEdit("fish-free")}>Fish-free</option>
              <option onClick={()=> healthLabelEdit("shellfish-free")}>Shellfish-free</option>
            
            </select>
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
