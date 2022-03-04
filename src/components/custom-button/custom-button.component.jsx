import "./custom-button.component.scss";
import React from "react";

const CustomButton = ({ children, ...otherProps }) => {
  return <button {...otherProps}>{children}</button>;
};

export default CustomButton;
