import recipelist from "../data/recipe.json"
import '../App.css'
import { Link } from "react-router-dom";

// import List from "./list";
   function ListItem(props) {  

      return(
         <div className="recipe-card">
            <img className="recipe-image" src={props.recipe.image} alt={props.recipe.name} />
            <div className="recipe-details">
               <h2>{props.recipe.name}</h2>
               <p>Calories: {props.recipe.calories}</p>
               <p>Servings: {props.recipe.servings}</p>
               {props.recipe.calories < 300 ? <p>Healthier</p> : <p>High Caloric food</p>}
            </div>

            <button className="deleteBtn" onClick={() => {props.func(props.recipe.id)}}> Delete </button>
            <Link to={`/itemDetails/${props.recipe.id}`} className="recipeBtn" > Recipe </Link>
         </div>
      );


   }


export default ListItem;
