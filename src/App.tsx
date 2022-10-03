import React, { useState } from "react";
import "./App.css";
import List from "./components/List";
import "./styles.scss";
import { Todo } from "./types";

let maxId = 2;

function App() {
  const [todos, setTodos] = useState<Todo[]>([
    { id: 0, text: "Buy milk", done: true },
    { id: 1, text: "Buy bread", done: false },
  ]);

  const [todo, setTodo] = useState("");

  const handleChange = (editedTodo: Todo) => {
    let allTodos = [...todos];
    allTodos[allTodos.findIndex(todo => todo.id === editedTodo.id)] = editedTodo;
    setTodos(allTodos);
  };
  
  const handleDelete = (id: number) => {
    let allTodos = [...todos];

    //Another way of deleting item from array.
    /* let final = allTodos.filter((item) => item.id !== i); */


    allTodos.splice(allTodos.findIndex((item)=> item.id === id), 1)
    setTodos(allTodos)
  } 

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (todo.length > 0) {
      const changeTodo = {
        id: maxId,
        text: todo,
        done: false,
      };

      setTodos((todos) => [changeTodo, ...todos]);
      setTodo("");
      maxId++;
    } else alert("Please enter ToDo to save it");
  };

  return (
    <div className="todoListApp">
      <div className="forsta-logo" />
      <div className="app-container">
      <form className="form-container" onSubmit={handleSubmit}>
        <input className="todo-input"
        data-testid="inputTodo"
          onChange={(e) => setTodo(e.target.value)}
          value={todo}
          type="text"
          placeholder="Enter your Todo"
        />
        <button className="todo-add-button" type="submit">Add Todo</button>
      </form>

      <List handleDelete={handleDelete} handleChange={handleChange} todos={todos}></List>
      </div>
    </div>
  );
}

export default App;
