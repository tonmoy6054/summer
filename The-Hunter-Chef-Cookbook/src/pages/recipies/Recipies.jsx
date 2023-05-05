/* eslint-disable no-unused-vars */
import React from 'react';
import { useEffect } from 'react';


import { useState } from 'react';
import RecipeCard from '../cards/recipecard/RecipeCard';


const Recipies = () => {
  const [recipes, setRecipes] = useState('');
  useEffect( () => {
    fetch('https://the-hunter-chef-cookbook-server-tonmoy6054.vercel.app/recipes')
    .then(res => res.json())
    .then(data => console.log(data))
    
    .catch(error => console.error(error))
  }, [])

    return (
        <div>
         <RecipeCard></RecipeCard>
        </div>
    );
};

export default Recipies;