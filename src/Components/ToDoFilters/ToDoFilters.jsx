import "./ToDoFilters.scss";

const ToDoFilters = ({ allItems, completedItems, importantItems }) => {
  return (
    <div className="todo__filters">
      <p>Total todo's : {allItems}</p>
      <p>Todo's left : {completedItems}</p>
      <p>Todo's important : {importantItems}</p>
    </div>
  );
};
export default ToDoFilters;
