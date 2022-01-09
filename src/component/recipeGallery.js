import React from 'react'
import './recipeGallery.css';

function RecipeGallery({recipe}) {
    return (
        <div className='recipeGallery'>
            <img className='recipeImage' src={recipe["recipe"]["image"]}></img>
            <p className='recipeName'>{recipe["recipe"]["label"]}</p>
        </div>
    )
}

export default RecipeGallery;
