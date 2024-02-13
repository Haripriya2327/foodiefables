import { useState } from 'react';
import List from './list';
import CreateRecipe from './createRecipe';
import './homePage.css'


function HomePage(props) {
    
    const [showCreateRecipe, setCreateRecipe] = useState(false);
    const [createBtnName, setBtnName] = useState("Create Recipe");

    const toggleCreateRecipe = () => {
        setCreateRecipe(!showCreateRecipe);
        setBtnName(showCreateRecipe ?  "Create Recipe" : "Back");
    }

    return (
        <div>
            <div>
                <button className="createRecBtn" onClick={toggleCreateRecipe} ><img src='/src/assets/images/cooking.png' /><span>{createBtnName}</span>  </button>
            </div>
            {showCreateRecipe && <CreateRecipe recipeList= {props.recipeList} addRecipe={props.callBackAdd} toggleCreateRecipe={toggleCreateRecipe} />}
            {!showCreateRecipe && <List callBackDelete={props.callBackDelete} recipeList= {props.recipeList}  />}
        
        </div>
    );
}

export default HomePage;