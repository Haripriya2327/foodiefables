import Footer from './footer'
import Navbar from './navbar'
import Sidebar from './sidebar'
import List from './list';
import CreateRecipe from './createRecipe';
import { useState } from 'react';

function HomePage(props) {
    
    const [showCreateRecipe, setCreateRecipe] = useState(false);
    const [createBtnName, setBtnName] = useState("Create Recipe");

    const toggleCreateRecipe = () => {
        setCreateRecipe(!showCreateRecipe);
        setBtnName(showCreateRecipe ?  "Create Recipe" : "Back");
    }

    return (
        <>
            <Navbar />
            <Sidebar />
            <div>
                <button className="create-recipe" onClick={toggleCreateRecipe} > {createBtnName} </button>
            </div>
            {showCreateRecipe && <CreateRecipe recipeList= {props.recipeList} addRecipe={props.callBackAdd} toggleCreateRecipe={toggleCreateRecipe} />}
            {!showCreateRecipe && <List callBackDelete={props.callBackDelete} recipeList= {props.recipeList} />}
            <Footer className='footer' />
        </>
    );
}

export default HomePage;