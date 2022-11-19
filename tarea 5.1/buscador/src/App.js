import './App.css';
import React, {useState} from 'react';
import {TodoCounter} from "./TodoCounter";
import {TodoSearch} from "./TodoSearch";
import { TodoList } from "./TodoList";
import { TodoItem } from "./TodoItem";
import { CreateTodoButton} from "./CreateTodoButton"

const todos = [
  {description:'Aprender React', completed: false},
  {description:'Aprender Angular', completed: false},
  {description:'Aprender Vue', completed: true},
  {description:'Aprender a Cocinar', completed: false},
]


function App() {
  const [search, setSearch] = useState('');  
  const totalTodos =todos.length
  const onCompletedTodos = todos.filter(todo => !!todo.completed).length;
  return (
    <>
  <div className="TodoApps1" >
  <br></br>
  <br></br>
    <TodoCounter total = {totalTodos} completed = {onCompletedTodos}/>  
    <TodoSearch search={search} setSearch={setSearch}/>
    <TodoList>
        {todos.map((todo) =>(
          <TodoItem key={todo.description} text={todo.description}/>
        ))}
        
      </TodoList>
      <CreateTodoButton/>
    
  </div>


  
    
    


   
   
   </>
  );
}

export default App;
