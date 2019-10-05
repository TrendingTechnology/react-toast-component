import React, { useState, useEffect, useCallback } from "react";
import cx from "classnames";
import Draggable from "react-draggable";

import "./style.css";

let timeout = null;

// Swipe and drag gestures (swipe on desktop / drag on mobile).
// Multi-notifications - enable the ability to have multiple notifications pop-up at once!!!

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

  const onClose = useCallback(() => {
    const toastElement = document.querySelectorAll(".ReactToast");
    if (closeCallback) closeCallback();
    setOpen(false);
    setTimeout(() => {
      if (toastElement) {
        toastElement[0].style = "";
      }
    }, 1000);
  }, [closeCallback, setOpen]);

  const onDragStop = (e, d) => {
    if (d && d.x !== 0) onClose();
  };

  useEffect(() => {
    if (timeout) clearTimeout(timeout);
    setOpen(isOpen);
    if (isOpen && autoDismiss) {
      timeout = setTimeout(onClose, duration);
    }
  }, [isOpen, duration, autoDismiss, onClose]);

  return (
    <Draggable axis="x" onStop={onDragStop}>
      <div
        className={cx(["ReactToast", { isOpen: isOpenState }, ...classNames])}
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
