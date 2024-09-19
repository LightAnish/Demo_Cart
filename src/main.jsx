import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ContextProvider } from "./components/context/ProductContext.jsx";
import { FilterProvider } from "./components/context/Filter.jsx";
import { AddtoCardProvider } from "./components/context/CardContext.jsx";

createRoot(document.getElementById("root")).render(
  <ContextProvider>
    <FilterProvider>
      <AddtoCardProvider>
        <App />
      </AddtoCardProvider>
    </FilterProvider>
  </ContextProvider>
);
