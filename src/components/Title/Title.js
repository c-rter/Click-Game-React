import React from "react";
import "./Title.css";

const Title = props => <h2 className="title">Don't Click the Same Image Twice! Your Current Score: {props.children}</h2>;

export default Title;
