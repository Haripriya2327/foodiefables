
import './App.css'
import HomePage from './components/homePage'
import NotFound from './components/notFound'
import { Routes, Route} from 'react-router-dom'
import Footer from './components/footer'
import Navbar from './components/navbar'
import Sidebar from './components/sidebar'
import List from './components/list';
import ListItem from './components/listItem';
import AboutPage from './components/aboutPage';
import ItemDetails from './components/itemDetails'


function App() {
  

  return ( 
<>
  
  <Navbar />
    <Sidebar />  
<Routes>
    <Route path="/" element={<HomePage />}></Route>
    <Route path="/itemDetails/:recipeId" element={<ItemDetails />}></Route>
    <Route path="/about" element={<AboutPage />}></Route>
    <Route path="*" element={<NotFound />}></Route>
</Routes>
    <Footer  className='footer'/>
 
{/* <HomePage  /> */}
</>
  )

}

export default App
