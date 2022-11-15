import React from "react";
import "./NavigationItem.css"
import { Link } from "react-router-dom";

const navigationItem = (props) => (
    <li className="NavigationItem">
        {/* <Link>

        </Link> */}
        <a 
            href={props.link} 
            className={props.active ? "active" : null}>
                {props.text}
        </a> 
    </li>
)

export default navigationItem;