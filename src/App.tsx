import React, { useState } from "react";
import "./App.css";
import List from "./components/List";
import "./styles.scss";
import { Todo } from "./types";

function App() {
  const [todos, setTodos] = useState<Todo[]>([
    /* { text: "Buy milk", done: true },
    { text: "Buy bread", done: false }, */
  ]);

  const [todo, setTodo] = useState("");

  const handleChange = (editedTodo: Todo) => {
    let allTodos = [...todos];
     
    allTodos[allTodos.findIndex(todo => todo.id === editedTodo.id)] = editedTodo;
    setTodos(allTodos);
  };
  
  const handleDelete = (i: number) => {
    let allTodos = [...todos];
    allTodos.splice(allTodos.map(item => item.id).indexOf(i), 1);
    let rev = allTodos.reverse();
    rev.map((item, index) => item.id = index+1);
    rev.reverse()
    setTodos(rev)
  } 

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (todo.length > 0) {
      const changeTodo = {
        id: todos.length + 1,
        text: todo,
        done: false,
      };

      setTodos((todos) => [changeTodo, ...todos]);
      setTodo("");
    } else alert("Please enter ToDo to save it");
  };

  return (
    <div className="todoListApp">
      <div className="forsta-logo" />
      <form onSubmit={handleSubmit}>
        <input
          onChange={(e) => setTodo(e.target.value)}
          value={todo}
          type="text"
          placeholder="Enter your Todo"
        />
        <button onClick={handleSubmit}>Add Todo</button>
      </form>

      <List handleDelete={handleDelete} handleChange={handleChange} todos={todos}></List>
    </div>
  );
}

export default App;
