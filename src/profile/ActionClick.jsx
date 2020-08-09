import React from "react";
import propTypes from "prop-types"
function Button({ children, onClick }) {
  return <button onClick={onClick}>{children}</button>;
}

export default Button;
