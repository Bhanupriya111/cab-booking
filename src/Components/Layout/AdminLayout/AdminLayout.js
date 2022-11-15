import React, { Component } from "react";
import Auxx from '../../../hoc/Auxx';
import './AdminLayout.css';
import Adminsidedrawer from "../../Sidedrawer/AdminSidedrawer/AdminSidedrawer";
import Toolbar from "../../Toolbar/Toolbar";

class AdminLayout extends Component{

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
    <Adminsidedrawer close={this.SidedrawerCloseHandler} ShowBackdrawer={this.state.showSidedrawer}/>
    <main className="Content">
        {this.props.children}
    </main>
    </Auxx>
        )
    }
} 

export default AdminLayout;