import React from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import { Link } from "react-router-dom";
import '../App.css'

// import List from "./list";
function ListItem(props) {

   return (
      <div className="recipe-card">
         <div className="recipe-details">
            <h2>{props.recipe.name}</h2>
            <p>Calories: {props.recipe.calories}<img className="cal-icon" src={props.recipe.calories < 300 ? "/src/assets/images/lowCalIcon.png" : "/src/assets/images/highCalIcon.png"} />
</p>
            <p>Servings: {props.recipe.servings}</p>
            <Link to={`/itemDetails/${props.recipe.id}`} update={props.funcUpd} > <button className="recipeBtn"> Recipe </button> </Link>
            <Popup trigger={<button className="deleteBtn"> Remove</button>} position="right center">
               <div><p >Do you want to remove this recipe?</p>
                  <button  onClick={() => { props.funcDel(props.recipe.id) }}>Yes</button></div>
            </Popup>            
         </div>
         <div className="recipe-image-div">
            <img className="recipe-image" src={props.recipe.image} alt={props.recipe.name} />
         </div>


      </div>
   );
}

export default ListItem;
