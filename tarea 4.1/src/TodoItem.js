import React from "react";
import './TodoItem.css'
import './basura.png';

function TodoItem (props){
    return (
      

        <div className="TodoItem">
        <li>
            <div className="items">
           <span className="item"></span>
            <p>{props.text}</p> 
       
            
      
           
            </div>
            
        </li >
        </div>
    );
}

export {TodoItem}