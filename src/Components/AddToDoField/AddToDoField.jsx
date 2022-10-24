import "./AddToDoField.scss";

const AddToDoField = ({ value, updateText, onTaskAdded }) => {
  return (
    <div className="addfield">
      <input
        type="text"
        className="addfield__input"
        placeholder="Text"
        value={value}
        onChange={(e) => updateText(e.target.value)}
      />
      <button className="addfield__btn" onClick={onTaskAdded}>
        Add
      </button>
    </div>
  );
};
export default AddToDoField;
