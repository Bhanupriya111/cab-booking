import React from "react";
import Backdrop from '../../UI/Backdrop/Backdrop';
import AdminnavigationItems from "../NavigationItems/AdminNavigationItems/AdminNavigationItems";
import './AdminSidedrawer.css';

import Auxx from "../../../hoc/Auxx";


const adminsidedrawer = (props) => {
    
    return(
        <Auxx>
            <Backdrop show={props.ShowBackdrawer} clicked={props.close}/>
        <div className={props.ShowBackdrawer ? "Sidedrawer Open" : "Sidedrawer Close"}>

            
            <nav>
                <AdminnavigationItems/>
            </nav>
        </div>
        </Auxx>
    );
}

export default adminsidedrawer;