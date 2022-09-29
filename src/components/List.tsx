import React from "react";
import { Todo } from "../types";

type TodoListProps = {
  todos: Todo[];
  handleChange: (editedTodo: Todo) => void;
  handleDelete: (i: number) => void;
};
const List = ({ todos, handleChange, handleDelete }: TodoListProps) => {
  const handleToggle = (item: Todo) => {
    item.done = !item.done;
    handleChange(item)
  }
  const deleteItem = (item: Todo) => {
    handleDelete(item.id)
  }
  return (
    <ul className="todoList">
      {todos.map((item) => (
        <li key={item.id}>
          <span /* data-testid={`todo${i}`} */>{item.text}</span>
          <label htmlFor="Done">
            Done
            <input
              /* value={item.done.toString()} */
              type="checkbox"
              name="Done"
              defaultChecked= {false}
              id=""
              onChange={() => handleToggle(item)}
            />
          </label>
          <button onClick={() => deleteItem(item)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default List;
