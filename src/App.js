import './App.css';
import React, { useState } from 'react';
import axios from 'axios';

function App() {

  const [recipe, recipeEdit] = useState("")

  const YOUR_APP_ID = '15302604';
  const YOUR_APP_KEY = 'a668c1ac2179cadc1b09acd7c6182b50';
  
  let url = `https://api.edamam.com/search?q=${recipe}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&health=alcohol-free`;

  async function getRecipes(){
    let result = await axios.get(url);
    console.log(result.data);
  }

  const onSubmit = (e) => {
    e.preventDefault();
    getRecipes();
  }

  return (
    <div className="App">
      <h1>Search Your Food Recipe</h1>
      <form className='searchForm' onSubmit={onSubmit}>
        <input type='text' placeholder='Enter Ingredient' value={recipe} onChange={(e)=>recipeEdit(e.target.value)}></input>
        <button>Search</button>

      </form>



    </div>




  );
}

export default App;
