import { useState } from "react";
import Header from "./Header/Header"
import Input from "./Input/Input";
import List from "./List/List";
import "./css/app.css";

function App() {
  
  const [todos, setTodos] =useState([])
  
  function addItem(item) {
    setTodos([...todos,item]);
  }
  function removeItem(index) {
    setTodos([
      ...todos.slice(0, index),
      ...todos.slice(index +1)
    ]);
    
  }
  
  return (
    <div className="App">
      <Header/>
      <Input  onSubmit={addItem}/>
      <List arrayTodos={todos} onDelete={removeItem}/>
    </div>
  );
}

export default App;
