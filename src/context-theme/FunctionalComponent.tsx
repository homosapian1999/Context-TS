import { useTheme, useThemeUpdate } from "./ThemeComponent";

function FunctionalComponent() {
  const darkTheme = useTheme();
  const themeUpdate = useThemeUpdate();

  const themeStyles = {
    backgroundColor: darkTheme ? "#333" : "#fff",
    color: darkTheme ? "#fff" : "#333",
    padding: "2rem",
    margin: "2rem",
  };
  return (
    <div>
      <button onClick={themeUpdate}>Toggle</button>
      <div style={themeStyles}>Theme Function</div>
    </div>
  );
}

export default FunctionalComponent;
