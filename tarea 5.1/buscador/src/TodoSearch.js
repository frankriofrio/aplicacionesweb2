import React from "react";
import './TodoSearch.css'



const TodoSearch = (props) =>{
    
    const [pepito,setvalor] = React.useState('0');
    const getValueInput2 =(event) => {
        console.log(event.target.value);
        let valor = event.target.value
        props.setSearch(valor);
        
    }
return (
<div className="TodoSearch1">
<input className = "TodoSearch"
type = "text"
placeholder = "Buscar"
onChange={getValueInput2}

></input>
 <p>{props.search}</p>
    </div>
)
}

//export default TodoCounter
export { TodoSearch } 