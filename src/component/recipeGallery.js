import React from 'react'
import './recipeGallery.css';

function RecipeGallery({recipe}) {
    return (
        <div className='recipeGallery'>
             <p>{recipe["recipe"]["label"]}</p>
        </div>
    )
}

export default RecipeGallery;
