import './App.css'
import HomePage from './components/homePage'
import NotFound from './components/notFound'
import { Routes, Route } from 'react-router-dom'
import Footer from './components/footer'
import Navbar from './components/navbar'
import Sidebar from './components/sidebar'
import AboutPage from './components/aboutPage';
import ItemDetails from './components/itemDetails'
import recipes from './data/recipe.json'
import { useState } from 'react';


function App() {
  const [recipesToShow, updateRecipeList] = useState(recipes);

  function deleteRecipe(id) {
    const newRecipeList = recipesToShow.filter((recipeObj) => {
      return recipeObj.id !== id;
    });
    updateRecipeList(newRecipeList);

  }
  function addRecipe(newRecipeObj) {
    const newRecipeList = [newRecipeObj, ...recipesToShow]
    updateRecipeList(newRecipeList);
  }
  function updateRecipe(recipeDtn,id) {
const newRecipeList = recipesToShow.map((recipe)=>{
  if(recipe.id==id){
    recipe.directions = recipeDtn;
    return recipe;
  }
  else{
    return recipe;
  }
})
    updateRecipeList(newRecipeList);

  }
  return (<>
      <Navbar />
      <div className='main'>
       <Sidebar/>
      <Routes>
        <Route path="/" element={<HomePage callBackDelete={deleteRecipe} callBackAdd={addRecipe} recipeList={recipesToShow}  />}></Route>
        <Route path="/itemDetails/:recipeId" element={<ItemDetails callBackUpdate={updateRecipe} recipeList={recipesToShow} />}></Route>
        <Route path="/about" element={<AboutPage />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
      </div>
     
      <Footer className='footer' />
    </>
  )

}

export default App
