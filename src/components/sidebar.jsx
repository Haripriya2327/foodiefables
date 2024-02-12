import { Link } from "react-router-dom";


function Sidebar(){
    return(<div  className='sideBanner'>
    <Link to='/' className="homeLink"> Home </Link>
    <Link to='/about' className="aboutLink">About</Link>
    <img src="src/assets/images/bake.png" />
    </div>)

}

export default Sidebar;