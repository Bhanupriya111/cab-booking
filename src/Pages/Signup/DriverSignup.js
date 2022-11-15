import React from "react";
import "./Signup.css";
import { useLocation } from "react-router-dom";
import DriverSignUpLogin from "../../Components/SignupLogin/DriverSignupLogin";
function DriverSignup(props){
    
    // const {role} = useLocation().state
    const role = "Rider"
    return(
        <div className="signup-page">
            {/* <Navbar/> */}
            <div className="img-div">
               <DriverSignUpLogin/>
            </div>
        </div>
    )
}
export default DriverSignup;