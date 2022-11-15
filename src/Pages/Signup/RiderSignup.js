import React from "react";
import "./Signup.css";
// import SignupLogin from "../../Components/SignupLogin/RiderSignupLogin";
// import { useLocation } from "react-router-dom";
import RiderSignUpLogin from "../../Components/SignupLogin/RiderSignupLogin";
function RiderSignup(props){
    
    // const {role} = useLocation().state
    // const role = "Rider"
    return(
        <div className="signup-page">
            {/* <Navbar/> */}
            <div className="img-div">
                <RiderSignUpLogin/>
            </div>
        </div>
    )
}
export default RiderSignup;