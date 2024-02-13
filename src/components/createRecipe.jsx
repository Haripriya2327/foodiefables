import React, { useState } from 'react';


function CreateRecipe(props) {
    const recipes = props.recipeList;
    const [name, setName] = useState("");
    const [calories, setCalories] = useState(0);
    const [servings, setServings] = useState(0);
    const [recipe, setRecipe] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        function generateId() {
            return  Math.floor(Math.random() * 1000)
        }
        const newRecipeObj = {
            id: generateId(),
            name: name,
            calories: calories,
            image: "https://dummyimage.com/182x268/ffffff/000000",
            servings: servings,
            directions:[recipe]
        }
        //add new recipe 
        props.addRecipe(newRecipeObj);
        props.toggleCreateRecipe();
        //clear input fields
        setName("");
        setCalories(0);
        setServings(0);
        setImage("");
        setRecipe("");
    }

    return (<>
        <form className='recipe-form' onSubmit={handleSubmit}>
            <div className="input">
                <label>
                    Name:
                    <input type="text" name="name" onChange={(e) => setName(e.target.value)} value={name} placeholder="recipe name" required />
                </label>
            </div>
            <div className="input">
                <label>
                    Calories:
                    <input type="number" name="calories" onChange={(e) => setCalories(e.target.value)} value={calories} min={0} max={1500}
                    placeholder="recipe calories" required />
                </label>
            </div>
            <div className="input">
                <label>
                    Servings:
                    <input type="number" name="servings" min={0} max={100} onChange={(e) => setServings(e.target.value)} value={servings} placeholder="recipe servings" required />
                </label>
            </div>
            {/* <div className="input">
                <label>
                    Image:
                    <input type="image" name="name" onChange={(e) => setImage("https://dummyimage.com/182x268/ffffff/000000")}  required />
                </label>
            </div> */}
            <div className="input">
                <label>
                    Recipe
                    <input type="text" name="recipe" onChange={(e) => setRecipe(e.target.value)} value={recipe} placeholder="recipe" required />
                </label>
            </div>

            <div>
                <button className='submitBtn' >Submit</button>
            </div>
        </form>

    </>)
}
export default CreateRecipe

