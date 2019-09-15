import React, { useState } from "react";

import "./style.css";

export default function Toast(props) {
  const {
    children,
    isOpen,
    duration = 3000,
    title,
    description,
    hasCloseBtn = true
  } = props;

  const [isOpenState, setOpen] = useState(isOpen);

  const timeout = setTimeout(() => {
    setOpen(false);
    clearTimeout(timeout);
  }, duration);

  return (
    <div className={`ReactToast${isOpenState ? " isOpen" : ""}`}>
      {!!title && <h2 className="ReactToast--title">{title}</h2>}
      {!!description && (
        <div className="ReactToast--description">{description}</div>
      )}
      {children}
      {!!hasCloseBtn && <button className="ReactToast--close">x</button>}
    </div>
  );
}
