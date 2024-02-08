import { Link } from 'react-router-dom';
import recipe from '../data/recipe.json'
import ListItem from './listItem';
import { useState } from 'react';


export default function List() {
    let [recipeToShow, updateRecipeList] = useState(recipe);
    function deleteRecipe(id) {
        const newRecipeList = recipeToShow.filter((recipeObj) => {
            return recipeObj.id !== id;
        });
        updateRecipeList(newRecipeList);

    }
    return (<div className='recipe-list'>{recipeToShow.map((recipe) => {
        return (
            <ListItem recipe={recipe} key={recipe.id} func={deleteRecipe} />
        )
    })}
    </div>)
}
