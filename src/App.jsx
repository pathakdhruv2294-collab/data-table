import React, { useReducer } from "react";

const initialState = { theme: "light" };

function themeReducer(state, action) {
  if (action.type === "TOGGLE_THEME") {
    return { theme: state.theme === "light" ? "dark" : "light" };
  }
  return state;
}

export default function App() {
  const [state, dispatch] = useReducer(themeReducer, initialState);

  return (
    <main className={state.theme}>
      <h1>Theme Toggle</h1>
      <p>Current theme: {state.theme}</p>
      <button onClick={() => dispatch({ type: "TOGGLE_THEME" })}>
        Toggle Theme
      </button>
    </main>
  );
}