import React from "react";
import Backdrop from '../../UI/Backdrop/Backdrop';
import RidernavigationItems from "../NavigationItems/RiderNavigationItems/RiderNavigationItems";
import './RiderSidedrawer.css';

import Auxx from "../../../hoc/Auxx";


const ridersidedrawer = (props) => {
    
    return(
        <Auxx>
            <Backdrop show={props.ShowBackdrawer} clicked={props.close}/>
        <div className={props.ShowBackdrawer ? "Sidedrawer Open" : "Sidedrawer Close"}>

            
            <nav>
                <RidernavigationItems/>
            </nav>
        </div>
        </Auxx>
    );
}

export default ridersidedrawer;