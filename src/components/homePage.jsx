import Footer from './footer'
import Navbar from './navbar'
import Sidebar from './sidebar'
import List from './list';

function HomePage(){
    return(
    <>
    <Navbar />
    <Sidebar />    
    <List> </List>
    <Footer  className='footer'/>
   
    </>
    );
}

export default HomePage;