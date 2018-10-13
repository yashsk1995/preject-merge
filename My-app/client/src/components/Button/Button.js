import React from "react";

import { Link } from "react-router-dom";

import "./button.css";

const Button = props => (
<div>
<button className="btn1"><Link to={props.link}><h6 className="btn1">{props.text}</h6></Link></button>

</div> 
);

  export default Button;