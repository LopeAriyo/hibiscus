import React from "react";
import "./Backdrop.css";

const backdrop = props => (
    <div className="backdrop" onClick={props.handleClick} />
);

export default backdrop;
