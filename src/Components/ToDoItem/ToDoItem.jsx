import { useDispatch } from "react-redux";
import {
  removeTodo,
  toggleComplete,
  toggleImportant,
} from "../../store/toDoSlice";
import "./ToDoItem.scss";
const ToDoItem = ({ term, id, completed, important }) => {
  let clazz = "todo__item";
  const dispatch = useDispatch();
  if (completed) {
    clazz += " completed";
  }

  if (important) {
    clazz += " important";
  }

  return (
    <li className="todo__item" key={id}>
      <span className={clazz}>{term}</span>
      <span
        className="todo__item-check"
        onClick={() => dispatch(toggleComplete({ id }))}
      >
        ✔
      </span>
      <span
        className="todo__item-important"
        onClick={() => dispatch(toggleImportant({ id }))}
      >
        <i className="fa fa-exclamation" />
      </span>
      <span
        className="todo__item-delete"
        onClick={() => dispatch(removeTodo({ id }))}
      >
        <i className="fa fa-trash-o" />
      </span>
    </li>
  );
};

export default ToDoItem;
