import React from "react";
import './Toolbar.css';
import NavigationItems from "../Sidedrawer/NavigationItems/RiderNavigationItems/RiderNavigationItems";

const toolbar = (props) => (
    <header className="Toolbar">
        <div className="DrawerToggle" onClick={props.clicked}>
            <div ></div>
            <div></div>
            <div></div>
        </div>
        <div className="ToolbarLogo">
           <h3>
             Admin
           </h3>
        </div>
       
        <nav className="DeskTopOnly">
           {/* <NavigationItems/> */}
        </nav>
    </header>
)

export default toolbar;