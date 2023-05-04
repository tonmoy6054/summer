/* eslint-disable no-unused-vars */
import React from 'react';
import { Button, CardGroup} from 'react-bootstrap';

const Card = ({item}) => {
  console.log(item);
  return (
    <div>
     <CardGroup>
      
      <img src={item.chefPicture} width={200} height={200}></img>
      <h2>{item.chefName} ; </h2>
      <h3>Years of Experience: {item.yearsOfExperience} ; </h3>
      <h3>Number of recipes: {item.numRecipes} ; </h3>
      <h3>Likes : {item.likes} ; </h3>
      <Button>View Recipes</Button>
     </CardGroup>
    </div>
  );
};

export default Card;