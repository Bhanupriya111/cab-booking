import React from "react";
import './DriverNavigationItems.css';
import NavigationItem from "../NavigationItem/NavigationItem";

const drivernavigationItems = (props) => (
        <ul className="NavigationItems">
            <NavigationItem link="./" active="true" text="Profile"> </NavigationItem>
            <NavigationItem link="./" text="Confirm ride"></NavigationItem>
        </ul>
)

export default drivernavigationItems;