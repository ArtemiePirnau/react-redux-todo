import { useSelector } from "react-redux";
import ToDoFilters from "../ToDoFilters/ToDoFilters.jsx";
import ToDoItem from "../ToDoItem/ToDoItem.jsx";

import "./ToDo.scss";

const ToDo = () => {
  const todos = useSelector((state) => state.todos.todos);
  const allItems = todos.length;
  const completedItems = todos.filter((item) => !item.completed).length;
  const importantItems = todos.filter((item) => item.important).length;

  return (
    <ul className="todo">
      {todos.map((todo) => (
        <ToDoItem key={todo.id} {...todo} />
      ))}
      <ToDoFilters
        allItems={allItems}
        importantItems={importantItems}
        completedItems={completedItems}
      />
    </ul>
  );
};

export default ToDo;
