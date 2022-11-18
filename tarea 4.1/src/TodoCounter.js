import React from "react";
import './TodoCounter.css'

function TodoCounter({total,completed}) {
    return (   
        <div className="TodoSearch1">
             <h1 className='Couter'>Welcome TODO's APP</h1>
        <h1 className='Couter'>Has Completado {completed} de to {total} TODOs</h1>
        </div>
    );


}
//export default TodoCounter
export { TodoCounter }