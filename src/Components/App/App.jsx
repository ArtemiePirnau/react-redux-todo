import Header from "../Header/Header.jsx";
import ToDo from "../ToDo/ToDo.jsx";
import AddToDoField from "../AddToDoField/AddToDoField.jsx";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { addTodo } from "../../store/toDoSlice.js";
import "./App.scss";

const App = () => {
  const dispatch = useDispatch();
  const [term, setTerm] = useState("");

  const onTaskAdded = () => {
    if (term.trim().length) {
      dispatch(addTodo({ term }));
      setTerm("");
    }
  };

  return (
    <div className="app">
      <div className="container">
        <Header />
        <AddToDoField
          onTaskAdded={onTaskAdded}
          value={term}
          updateText={setTerm}
        />
        <ToDo />
      </div>
    </div>
  );
};
export default App;
