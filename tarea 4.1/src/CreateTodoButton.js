import React from "react";
import './CreateTodoButton.css'
const onClickButton = () => {
  console.log("Hola");
}


const CreateTodoButton = () =>(
<div className="buttonss">
<button className="button" type="Submit"
onClick={onClickButton}

>+</button>

</div>

)

export { CreateTodoButton }