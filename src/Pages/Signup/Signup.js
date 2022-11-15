import React from "react";
import "./Signup.css";
import SignupLogin from "../../Components/SignupLogin/SignupLogin";
import { useLocation } from "react-router-dom";

function Signup(props){
    
    // const {role} = useLocation().state
    const role = "Rider"
    return(
        <div className="signup-page">
            {/* <Navbar/> */}
            <div className="img-div">
                <SignupLogin role={role}/>
            </div>
        </div>
    )
}
export default Signup;