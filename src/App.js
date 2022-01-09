import './App.css';
import React from 'react';
import axios from 'axios';

function App() {
  const YOUR_APP_ID = '15302604';
  const YOUR_APP_KEY = 'a668c1ac2179cadc1b09acd7c6182b50';
  
  let url = `https://api.edamam.com/search?q=chicken&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&health=alcohol-free`;

  async function getRecipes(){
    let result = await axios.get(url);
    console.log(result.data);
  }

  return (
    <div className="App">
      <h1 onClick={getRecipes}>Search Your Food Recipe</h1>
    </div>
  );
}

export default App;
