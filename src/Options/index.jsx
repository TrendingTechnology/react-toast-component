import React, { useState } from "react";
import { connect } from "react-redux";
import toastActions from "../toastActions";
import ToastContainer from "../ToastContainer";
import Toast from "../Toast";

import "./style.css";

const TOAST_NO_REDUX_DURATION = 5000;

function Options(props) {
  const { dispatch } = props;
  const [isOpen, setToast] = useState(false);

  return (
    <header className="App-header">
      <Toast
        isOpen={isOpen}
        title="App Notification 🍞"
        description="Dunc the Lunk, thick as a castle wall. Your action has been completed."
        autoDismiss={false}
        duration={TOAST_NO_REDUX_DURATION}
        closeCallback={() => setToast(false)}
        classNames={["warning"]}
      />
      <ToastContainer />
      <button onClick={() => setToast(true)}>Toast</button>
      <button
        onClick={() =>
          dispatch(
            toastActions.addToast({
              title: "Added",
              description: "Your item was added.",
              duration: "5000"
            })
          )
        }
      >
        ToastContainer
      </button>
    </header>
  );
}

export default connect()(Options);
