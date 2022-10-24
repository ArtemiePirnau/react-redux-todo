import { createSlice } from "@reduxjs/toolkit";

const toDoSlice = createSlice({
  name: "todos",
  initialState: {
    todos: [
      {
        id: 0,
        term: "Go for a walk",
        completed: false,
      },
    ],
  },
  reducers: {
    addTodo(state, action) {
      state.todos.push({
        id: new Date().toISOString(),
        term: action.payload.term,
        completed: false,
        important: false,
      });
    },
    toggleComplete(state, action) {
      const toggledTodo = state.todos.find(
        (todo) => todo.id === action.payload.id
      );
      toggledTodo.completed = !toggledTodo.completed;
    },
    toggleImportant(state, action) {
      const toggledTodo = state.todos.find(
        (todo) => todo.id === action.payload.id
      );
      toggledTodo.important = !toggledTodo.important;
    },
    removeTodo(state, action) {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload.id);
    },
  },
});

export const { addTodo, toggleComplete, toggleImportant, removeTodo } =
  toDoSlice.actions;
export default toDoSlice.reducer;
