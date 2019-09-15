import React, { useState } from "react";
import Toast from "./Toast";
import { Provider } from "react-redux";
import { createStore, combineReducers } from "redux";
import ToastReducer from "./toastReducer";
import ToastActions from "./toastActions";
import ToastContainer from "./ToastContainer";
import "./App.css";

const store = createStore(combineReducers({ ToastReducer }));

function App(props) {
  const { dispatch } = props;
  const [isOpen, setToast] = useState(false);

  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header">
          <Toast isOpen={isOpen} />
          <ToastContainer />
          <button onClick={() => setToast(true)}>Toast</button>
          <button onClick={() => dispatch(ToastActions.showToast())}>
            ToastContainer
          </button>
        </header>
      </div>
    </Provider>
  );
}

export default App;
