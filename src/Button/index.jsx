import React from "react";

import "./style.css";

export default function Button(props) {
  const { onClick, classNames, text } = props;

  return (
    <button
      onClick={onClick}
      className={`Button${classNames ? ` ${classNames}` : ""}`}
    >
      <span>{text}</span>
    </button>
  );
}
