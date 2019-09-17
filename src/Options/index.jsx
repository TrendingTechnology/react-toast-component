import React, { useState } from "react";
import { connect } from "react-redux";
// import toastActions from "../toastActions";
// import ToastContainer from "../ToastContainer";
import Toast from "../Toast";
import Button from "../Button";

import "./style.css";

const TOAST_NO_REDUX_DURATION = 5000;
let timeout = null;

function Options(props) {
  // const { dispatch } = props;
  const defaultOptions = {
    isOpen: true,
    description:
      "There's some great info here. This will go away in a few seconds.",
    text: "Default"
  };

  const [toastOptions, setToast] = useState(defaultOptions);

  const {
    isOpen,
    autoDismiss,
    hasCloseBtn,
    description,
    classNames,
    text: txt
  } = toastOptions;

  const closeOptions = {
    isOpen: false,
    description,
    text: txt,
    classNames
  };

  const addOptions = options => {
    if (timeout) clearTimeout(timeout);

    setToast(closeOptions);

    timeout = setTimeout(() => {
      setToast(options);
    }, 500);
  };

  const data = [
    defaultOptions,
    {
      isOpen: true,
      autoDismiss: false,
      description: "To close this toast, press x.",
      hasCloseBtn: true,
      text: "No Dimiss"
    },
    {
      isOpen: true,
      description:
        "Your action has been completed. This will go away in a few seconds.",
      autoDismiss: true,
      classNames: ["success"],
      text: "Success"
    },
    {
      isOpen: true,
      description:
        "Uh oh. There's something wrong. To close this toast, press x.",
      classNames: ["error"],
      hasCloseBtn: true,
      autoDismiss: false,
      text: "Error"
    },
    {
      isOpen: true,
      description:
        "Some really great info is in here. This will go away in a few seconds.",
      autoDismiss: true,
      classNames: ["info"],
      text: "Info"
    },
    {
      isOpen: true,
      description:
        "Uh oh. There might be something wrong. This will go away in a few seconds.",
      autoDismiss: true,
      classNames: ["warning"],
      text: "Warning"
    }
  ];

  return (
    <header className="App-header">
      <h1>React Toast Pure Component</h1>
      <Toast
        isOpen={isOpen}
        title={`${txt ? ` ${txt}` : ""} Notification 🍞`}
        description={description}
        autoDismiss={autoDismiss}
        hasCloseBtn={hasCloseBtn}
        duration={TOAST_NO_REDUX_DURATION}
        closeCallback={() => setToast(closeOptions)}
        classNames={classNames}
      />
      <div className="Options--buttons">
        {data.map(options => {
          const { text } = options;
          return (
            <>
              <Button
                classNames="btn striped-shadow dark"
                onClick={() => addOptions(options)}
                text={text}
              />
            </>
          );
        })}
      </div>
      {/* <ToastContainer /> */}
      {/* <button
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
      </button> */}
      <p>
        <b>Github:</b>{" "}
        <a href="https://github.com/tumfoodery/react-toast-component">
          https://github.com/tumfoodery/react-toast-component
        </a>
      </p>
      <p>
        <b>NPM:</b>{" "}
        <a href="https://www.npmjs.com/package/react-toast-component">
          https://www.npmjs.com/package/react-toast-component
        </a>
      </p>
    </header>
  );
}

export default connect()(Options);
