import React from "react";
import './TodoList.css'

//const TodoList = () => <ul>Bienvenido tienes 2 tareas por completar</h2>

function TodoList (props){
    return (
        
        <section>
            <ul>
                {props.children}  
            </ul>
        </section>
   
        
    )
}


//export default TodoCounter
export {TodoList }    