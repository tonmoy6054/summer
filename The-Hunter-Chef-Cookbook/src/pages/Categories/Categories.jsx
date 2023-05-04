/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

import { Button } from 'react-bootstrap';
import Card from '../cards/Card';



const Categories = () => {
   
    const [ categories, setCategories ] = useState([]);
    useEffect( () => {
        fetch('http://localhost:5000/categories')
        .then(res => res.json())
        .then(data => setCategories(data))
        
        .catch(error => console.error(error))
    }, [])
    return (
        <div>
         {
            categories.map(category => <Card key={category.id}
            item={category}
            
            ></Card>)
         }  

</div>
                        
    )}

export default Categories;