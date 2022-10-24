import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./store/index";
import App from "./Components/App/App.jsx";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
