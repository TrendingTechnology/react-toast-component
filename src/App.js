import React from "react";
import Toast from "./Toast";
import ToastContainer from "./ToastContainer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Toast />
        <ToastContainer />
        <button onClick={() => {}}>Toast</button>
        <button onClick={() => {}}>ToastContainer</button>
      </header>
    </div>
  );
}

export default App;
