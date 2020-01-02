import React, { useState, useEffect, useCallback } from "react";
import Draggable from "react-draggable";

import "./style.css";

let timeout = null;
let openTimeout = null;

export default function Toast(props) {
  const {
    children,
    isOpen = false,
    duration = 2000,
    title,
    description,
    hasCloseBtn = false,
    autoDismiss = true,
    closeCallback = null,
    classNames = []
  } = props;

  const [isOpenState, setOpen] = useState(false);
  const [isReset, setDraggable] = useState(false);
  const onClose = useCallback(() => {
    const toastElement = document.querySelectorAll(".ReactToast");
    if (closeCallback) closeCallback();
    setOpen(false);
    setTimeout(() => {
      if (toastElement) {
        toastElement[0].style = "";
        setDraggable('close');
      }
    }, duration);
  }, [closeCallback, setOpen, duration, setDraggable]);

  const onDragStop = (e, d) => {
    if (d && (d.x > 10 || d.x < -10)) onClose();
  };

  useEffect(() => {
    if (timeout) clearTimeout(timeout);
    if (openTimeout) clearTimeout(openTimeout);
    if (isOpen && (isOpen !== isOpenState)) {
      setDraggable('open');
      openTimeout = setTimeout(() => setOpen(true), 50);
    } else if (!isOpen) {
      setOpen(false);
    }
    if (isOpen && autoDismiss) {
      timeout = setTimeout(onClose, duration);
    }
  }, [isOpen, duration, setOpen, autoDismiss, onClose, isOpenState]);

  return (
    <Draggable axis="x" onStop={onDragStop} key={isReset}>
      <div
        className={`ReactToast${
          isOpenState ? ' isOpen' : ''}${
            classNames.length ? classNames.join(' ').toString() : ''
          }`
        }
      >
        {title && <h2 className="ReactToast--title">{title}</h2>}
        {description && (
          <div className="ReactToast--description">{description}</div>
        )}
        {children}
        {hasCloseBtn && (
          <button className="ReactToast--close" onClick={onClose}>
            &times;
          </button>
        )}
      </div>
    </Draggable>
  );
}
