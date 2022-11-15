import React, { Component } from "react";
import Auxx from '../../../hoc/Auxx';
import './RiderLayout.css';
import Ridersidedrawer from "../../Sidedrawer/RiderSidedrawer/RiderSidedrawer";
import Toolbar from "../../Toolbar/Toolbar";
  import Riderprofile from "../../../Pages/Riderprofile/Riderprofile";
import Button from "../../Button/Button";
class RiderLayout extends Component{

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
    <Ridersidedrawer close={this.SidedrawerCloseHandler} ShowBackdrawer={this.state.showSidedrawer}/>
    <main className="Content">
        {/* {this.props.children} */}
            <Riderprofile/>
            {/* <Button/> */}
            
    </main>
    </Auxx>
        )
    }
} 

export default RiderLayout;