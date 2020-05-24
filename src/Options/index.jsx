import React, { useState } from "react";
import { connect } from "react-redux";
import { FaGithub, FaNpm, FaCheck, FaRegCopy } from "react-icons/fa";
import Toast from "../Toast";
import Button from "../Button";

import OPTIONS from "./options";
import "./style.css";

const TOAST_NO_REDUX_DURATION = 5000;
let timeout = null;

function Options(props) {
  const defaultOptions = {
    isOpen: true,
    description:
      "There's some great info here. This will go away in a few seconds.",
    text: "Default",
    copied: false,
  };

  const [toastOptions, setToast] = useState(defaultOptions);

  const {
    isOpen,
    autoDismiss,
    hasCloseBtn,
    description,
    classNames,
    customChild,
    copied,
    text: txt,
  } = toastOptions;

  const closeOptions = {
    isOpen: false,
    description,
    text: txt,
    classNames,
  };

  const TITLE = `${txt ? `${txt}` : ""} Notification 🍞`;

  const addOptions = (options) => {
    if (timeout) clearTimeout(timeout);

    setToast(closeOptions);

    timeout = setTimeout(() => {
      setToast(options);
    }, 500);
  };

  return (
    <div className="Options">
      <a
        className="Options--header"
        href="https://www.npmjs.com/package/react-toast-component"
      >
        <h1>React Toast Pure Component</h1>
      </a>
      <p>
        <img
          src="https://img.shields.io/npm/dt/react-toast-component.svg"
          className="Options--badge"
          alt=""
        />
        <img
          src="https://img.shields.io/npm/dw/react-toast-component.svg"
          alt=""
        />
      </p>
      <Toast
        isOpen={isOpen}
        title={TITLE}
        description={description}
        hasAutoDismiss={autoDismiss}
        hasCloseBtn={hasCloseBtn}
        duration={TOAST_NO_REDUX_DURATION}
        closeCallback={() => setToast(closeOptions)}
        classNames={classNames}
      >
        {customChild ? (
          <p>
            To close, press x.{" "}
            <span role="img" aria-label="child">
              👶
            </span>
          </p>
        ) : null}
      </Toast>
      <div className="Options--buttons">
        {OPTIONS(defaultOptions).map((options) => {
          const { classNames } = options;
          const className = classNames && classNames[0];
          return (
            <Button
              classNames={className}
              onClick={() => addOptions(options)}
              key={className}
            />
          );
        })}
      </div>
      <img className="Options--img" src="toast.jpg" loading="lazy" alt="..." />
      <p className="Options--attr">
        credit: toaster &amp; friends by{" "}
        <a href="https://dribbble.com/shots/7667697-toaster-friends">
          KOIOS design
        </a>
      </p>
      <p className="Options--icons">
        <a href="https://github.com/tumfoodery/react-toast-component">
          <FaGithub />
        </a>
        <a href="https://www.npmjs.com/package/react-toast-component">
          <FaNpm />
        </a>
      </p>
      <code
        onClick={() => {
          document.querySelector(".Options--code").select();
          document.execCommand("copy");
          setToast({ ...toastOptions, copied: true });
        }}
      >
        <input className="Options--code" value="npm i react-toast-component" />
        {copied ? <FaCheck /> : <FaRegCopy />}
      </code>
    </div>
  );
}

export default connect()(Options);
