import React from "react";
import { Todo } from "../types";

type TodoListProps = {
  todos: Todo[];
  handleChange: any;
};
const List = ({ todos, handleChange }: TodoListProps) => {
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
              onChange={handleChange(item, i)}
            />
          </label>
        </li>
      ))}
    </ul>
  );
};

export default List;
