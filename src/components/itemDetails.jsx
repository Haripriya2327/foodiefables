
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom';
import './itemDetails.css'
import { useState } from 'react';

function ItemDetails(props) {
   const [update, setUpdate] = useState(false);
   let recipeList = props.recipeList;             
   let { recipeId } = useParams();

   let recipeSelected = recipeList.filter((recipe) => {
      return recipe.id == recipeId;
   })

   let recipeObj = recipeSelected[0];
  

   const [recipeDtn, setRecipeDtn] = useState(recipeObj.directions);
   const [updateIndex, setUpdateIndex] = useState(null);
   function handleSubmit(e) {
      e.preventDefault();
      props.callBackUpdate(recipeDtn, recipeId);
      setUpdate(false);

   }
   function addStep() {
      const newRecipeDtn = [...recipeDtn, ""]
      setRecipeDtn(newRecipeDtn);
   }

   return (<div className="recipe-details-card">

      <div className="recipe-details">
         <h2>{recipeObj.name}</h2>
         <div className='recipe-steps'>
            <img className="recipe-image" src={recipeObj.image} alt={recipeObj.name} />
            {update ? <form className='updateForm' onSubmit={handleSubmit}>
               {recipeDtn.map((step, index) => {
                  return <label>
                     Step{index+1}
                     <textarea type="text" key={index} name="step"
                        onChange={e => {
                           setRecipeDtn(
                              recipeDtn.map((step, i) => { if (index == i ) {if(e.target.value !== "") {return e.target.value }} else return step }));
                        }}
                        value={step}>
                     </textarea>
                  </label>
                  
               })}
               <button type='button' className='addStepsBtn' onClick={addStep} > Add steps </button>
               <button className='submitBtn' > Submit </button>
            </form> : <ul>{recipeDtn.map((step, index) => {
               return <li key={index}>{step}</li>
            })}</ul>
            }
         </div>
        
         <p>Calories: {recipeObj.calories}</p>
         <p>Servings: {recipeObj.servings}</p>
         {recipeObj.calories < 300 ? <p>Healthier</p> : <p>High Caloric food</p>}
      </div>
      <Link to="/">
         <button className="backBtn" > Back </button>
      </Link>
      <button className='updateBtn' onClick={() => { setUpdate(!update) }}> Update </button>
   </div>)
}

export default ItemDetails

