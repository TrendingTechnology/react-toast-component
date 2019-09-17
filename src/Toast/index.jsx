import React, { useState, useEffect, useCallback } from "react";
import cx from "classnames";

import "./style.css";

let timeout = null;

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
    setOpen(false);
    if (closeCallback) closeCallback();
  }, [closeCallback, setOpen]);

  useEffect(() => {
    if (timeout) clearTimeout(timeout);
    setOpen(isOpen);
    if (isOpen && autoDismiss) {
      timeout = setTimeout(onClose, duration);
    }
  }, [isOpen, duration, autoDismiss, onClose]);

  return (
    <div className={cx(["ReactToast", { isOpen: isOpenState }, ...classNames])}>
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
  );
}
