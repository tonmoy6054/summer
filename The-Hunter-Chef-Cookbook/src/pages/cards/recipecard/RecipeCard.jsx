/* eslint-disable no-unused-vars */
import React from 'react';
import { useState } from 'react';
import { Button, CardGroup } from 'react-bootstrap';
import Footer from '../../shared/footer/Footer';


const RecipeCard = () => {
    const handleAll = () => {
        console.log('tuqe maram');
    }


    const [recipes, setRecipes] = useState('');
    return (
        <div>
         {
            recipes.map(recipe => setRecipes(recipe))
         }
        </div>
    );
};

export default RecipeCard;