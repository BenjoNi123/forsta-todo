import React, { useState } from "react";
import "./App.css";
import List from "./components/List";
import "./styles.scss";

function App() {
  interface Todo {
    text: string;
    done: boolean;
  }
  const [todos, setTodos] = useState<Todo[]>([
    { text: "Buy milk", done: true },
    { text: "Buy bread", done: false },
  ]);

  const [todo, setTodo] = useState("");

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (todo.length > 0) {
      const changeTodo = {
        text: todo,
        done: false,
      };

      setTodos((todos) => [changeTodo, ...todos]);
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

      <List todos={todos}></List>
    </div>
  );
}

export default App;
