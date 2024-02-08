import { Link } from 'react-router-dom';
import ListItem from './listItem';



export default function List(props) {
    
   
    return (<>       
        <div className='recipe-list'>{props.recipeList.map((recipe) => {
            return (<ListItem recipe={recipe} key={recipe.id} func={props.callBackDelete} />)
        })}
        </div>
    </>)
}
