import React from "react";
import Options from "./Options";
import { Provider } from "react-redux";
import { createStore, combineReducers } from "redux";
import ToastReducer from "./toastReducer";
import "./App.css";

const store = createStore(combineReducers({ ToastReducer }));

function App() {
  return (
    <Provider store={store}>
      <Options />
    </Provider>
  );
}

export default App;
