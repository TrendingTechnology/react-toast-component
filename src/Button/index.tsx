import React from "react";

import "./style.css";

export default function Button(props) {
  const { onClick, classNames } = props;

  return (
    <button
      onClick={onClick}
      className={`Button${classNames ? ` ${classNames}` : ""}`}
    >
      <span role="img" aria-label="click">+</span>
    </button>
  );
}
