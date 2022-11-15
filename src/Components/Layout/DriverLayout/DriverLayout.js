import React, { Component } from "react";
import Auxx from '../../../hoc/Auxx';
import './DriverLayout.css';
import Driversidedrawer from "../../Sidedrawer/DriverSidedrawer/DriverSidedrawer";
import Toolbar from "../../Toolbar/Toolbar";

class DriverLayout extends Component{

    state={
        showSidedrawer:true
    }

    SidedrawerCloseHandler = () =>{
        this.setState({
            showSidedrawer:false
        })
    }

    SidedrawerHandler = () =>{
        this.setState({
            showSidedrawer:!(this.state.showSidedrawer)
        })
    }

    render(){
        return(
            <Auxx>
                <Toolbar clicked={this.SidedrawerHandler}/>
    <Driversidedrawer close={this.SidedrawerCloseHandler} ShowBackdrawer={this.state.showSidedrawer}/>
    <main className="Content">
        {this.props.children}
    </main>
    </Auxx>
        )
    }
} 

export default DriverLayout;