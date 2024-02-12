import recipes from '../data/recipe.json'
import { useParams } from 'react-router-dom'
import { Link} from 'react-router-dom';
import './itemDetails.css'

function ItemDetails() {

let recipeList = recipes;
let {recipeId} = useParams();
let recipeSelected = recipeList  .filter((recipe)=>{
    console.log( recipe.id == recipeId)
    return recipe.id == recipeId;
})
let recipeObj = recipeSelected[0];
    return( <div className="recipe-card">
    <img className="recipe-image" src={recipeObj.image} alt={recipeObj.name} />
    <div className="recipe-details">
       <h2>{recipeObj.name}</h2>
       <div><ul>
        {recipeObj.directions.map((step,index)=>{
           return <li id={index}>{step}</li>
        })}</ul></div>
       <p>Calories: {recipeObj.calories}</p>
       <p>Servings: {recipeObj.servings}</p>
       {recipeObj.calories < 300 ? <p>Healthier</p> : <p>High Caloric food</p>}
    </div>
    <Link to="/">
    <button className="backBtn" > Back </button>
    </Link>
 </div>)
}

export default ItemDetails

