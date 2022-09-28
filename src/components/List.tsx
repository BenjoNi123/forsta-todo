import React from "react";
import { Todo } from "../types";

type TodoListProps = {
  todos: Todo[];
  handleChange: (editedTodo: Todo, id: number) => void;
  handleDelete: (i: number) => void;
};
const List = ({ todos, handleChange, handleDelete }: TodoListProps) => {
  const handleToggle = (item: Todo, i: number) => {
    item.done = !item.done;
    handleChange(item, i)
  }
  const deleteItem = (i: number) => {
    handleDelete(i)
  }
  return (
    <ul className="todoList">
      {todos.map((item, i) => (
        <li key={i}>
          <span data-testid={`todo${i}`}>{item.text}</span>
          <label htmlFor="Done">
            Done
            <input
              value={item.done.toString()}
              type="checkbox"
              name="Done"
              defaultChecked={item.done}
              id=""
              onChange={() => handleToggle(item, i)}
            />
          </label>
          <button onClick={deleteItem(i)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default List;
