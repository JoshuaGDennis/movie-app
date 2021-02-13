import React from "react";
import styles from "./App.module.scss";
import moduleClasses from "./helpers/moduleClasses";

const classes = moduleClasses(styles);

function App() {
  return (
    <div style={{ textAlign: "center" }}>
      <header>
        <p className={classes("text")}>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
