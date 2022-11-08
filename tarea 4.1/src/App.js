//import './App.css';
import {TodoCounter} from "./TodoCounter";
import {TodoSearch} from "./TodoSearch";
import { TodoList } from "./TodoList";
import { TodoItem } from "./TodoItem";
import { CreateTodoButton} from "./CreateTodoButton"

const todos = [
  {description:'Cortar Cebolla', completed: false},
  {description:'Tomar el curso de introduccion a React', completed: false},
  {description:'Llorar con la llorona', completed: false},
  {description:'Testing', completed: false},
]



function App() {
  return (
    <>
      <TodoCounter/>
        
     <TodoSearch/>
      
      <TodoList>
        {todos.map((todo) =>(
          <TodoItem key={todo.description} text={todo.description}/>
        ))}
        
      </TodoList>
      <CreateTodoButton/>
   </>
  );
}

export default App;
