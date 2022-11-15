import React from "react";
import './AdminNavigationItems.css';
import NavigationItem from "../NavigationItem/NavigationItem";

const adminnavigationItems = (props) => (
        <ul className="NavigationItems">
            <NavigationItem link="./" active="true" text="Profile"> </NavigationItem>
            <NavigationItem link="./" text="Driver Profile"></NavigationItem>
            <NavigationItem link="./" text="Rider Profile"></NavigationItem>
        </ul>
)

export default adminnavigationItems;