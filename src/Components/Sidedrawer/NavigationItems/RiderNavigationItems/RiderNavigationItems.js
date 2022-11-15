import React from "react";
import './RiderNavigationItems.css';
import NavigationItem from "../NavigationItem/NavigationItem";

const ridernavigationItems = (props) => (
        <ul className="NavigationItems">
            <NavigationItem link="./" active="true" text="Profile"> </NavigationItem>
            <NavigationItem link="./" text="Book a ride"></NavigationItem>
        </ul>
)

export default ridernavigationItems;