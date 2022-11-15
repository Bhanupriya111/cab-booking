import React from "react";
import Backdrop from '../../UI/Backdrop/Backdrop';
import DrivernavigationItems from "../NavigationItems/DriverNavigationItems/DriverNavigationItems";
import './DriverSidedrawer.css';

import Auxx from "../../../hoc/Auxx";


const driversidedrawer = (props) => {
    
    return(
        <Auxx>
            <Backdrop show={props.ShowBackdrawer} clicked={props.close}/>
        <div className={props.ShowBackdrawer ? "Sidedrawer Open" : "Sidedrawer Close"}>

            
            <nav>
                <DrivernavigationItems/>
            </nav>
        </div>
        </Auxx>
    );
}

export default driversidedrawer;