import React from "react";
import FunctionalComponent from "./context-theme/FunctionalComponent";
import { ThemeContextProvider } from "./context-theme/ThemeComponent";

function App() {
  return (
    <ThemeContextProvider>
      <FunctionalComponent />
    </ThemeContextProvider>
  );
}

export default App;
