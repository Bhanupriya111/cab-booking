import React from "react";
import "./Signup.css";
// import SignupLogin from "../../Components/SignupLogin/SignupLogin";
import { useLocation } from "react-router-dom";
import AdminSignUpLogin from "../../Components/SignupLogin/AdminSignupLogin";
function AdminSignup(props){
    
    // const {role} = useLocation().state
    const role = "Rider"
    return(
        <div className="signup-page">
            {/* <Navbar/> */}
            <div className="img-div">
                <AdminSignUpLogin/>
            </div>
        </div>
    )
}
export default AdminSignup;