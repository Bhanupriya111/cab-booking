import React from "react";
import axios from 'axios';
import { createRoutesFromChildren, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import OptionBoxBlue from "../OptionBox/OptionBoxBlue/OptionBoxBlue";
import OptionBoxWhite from "../OptionBox/OptionBoxWhite/OptionBoxWhite";
import "./SignupLogin.css";
export default function AdminSignUpLogin({role}){
    // console.log(role);
    // let navigate=useNavigate()
    const [formData2,setFormData2]=React.useState({
        "username":"",
        "password":""
    })

    function handleChangeL(e){
        const newFormData2={...formData2}
        newFormData2[e.target.id]=e.target.value
        setFormData2(newFormData2)
        // console.log(newFormData2)
    }
    
    // if(role==="Driver"){
    //     try{
    //         data.prn = formData1.prn;
    //         const res = await axios
    //         .post(`http://localhost:5000/api/v1/studentsignup`,{
    //             data
                
    //         })
    //         // window.location.replace('/studentdashboard');
    //         navigate(`/studentdashboard/${role}`,{state:role});
    //         // res.data&&navigate("http://localhost:3000/studentdashboard");
    //     }catch(error){
    //         console.log(error);
    //     }
    // }
    // else if(role === "Rider"){
    //     try{
    //         const res = await axios
    //         .post(`http://localhost:5000/api/v1/faculty/signup`,{
    //           data
             
    //         })
    //         navigate(`/facultydashboard/${role}`,{state:role});
    //         // res.data && navigate("http://localhost:3000/facultydashboard")
    //     }catch(error){
    //         console.log(error);
    //     } 
    // }
    // else {
    //     try{
    //         const res = await axios
    //         .post(`http://localhost:5000/api/v1/faculty/signup`,{
    //           data
             
    //         })
    //         navigate(`/facultydashboard/${role}`,{state:role});
    //         // res.data && navigate("http://localhost:3000/facultydashboard")
    //     }catch(error){
    //         console.log(error);
    //     } 
    // } 

    // }

    //Login
    async function Login(e){
        e.preventDefault();
        const data2 = {
            
            username:formData2.password,
            password:formData2.password,
            
        }
        console.log(data2);
        // if(role==="Driver"){
        //     try{
                
        //         const res = await axios
        //         .post(`http://localhost:5000/api/v1/studentlogin`,{
        //             data2      
        //         })
        //         navigate(`/studentdashboard/${role}`,{state:role});
        //         // res.data&&navigate("http://localhost:3000/studentdashboard");
        //     }catch(error){
        //         console.log(error);
        //     }
        // }
        // else if(role === "Rider"){
        //     try{
        //         const res = await axios
        //         .post(`http://localhost:5000/api/v1/faculty/login`,{
        //         data2
                
        //         })
        //         navigate(`/facultydashboard/${role}`,{state:role});
        //         // res.data && navigate("http://localhost:3000/facultydashboard")
        //     }catch(error){
        //         console.log("There is a error please handle it"+error);
        //     } 
        // } 
        // else {
        //     try{
        //         const res = await axios
        //         .post(`http://localhost:5000/api/v1/faculty/signup`,{
        //           data2
                 
        //         })
        //         navigate(`/facultydashboard/${role}`,{state:role});
        //         // res.data && navigate("http://localhost:3000/facultydashboard")
        //     }catch(error){
        //         console.log(error);
        //     } 
        // }

    
    
}
    // function submitData() {
    //     // const article = { title: 'React POST Request Example' };
    //     axios.post('https://reqres.in/invalid-url', formData1)
    //         .then(response => console.log(response))
    //         .catch(error => {
    //             this.setState({ errorMessage: error.message });
    //             console.error('There was an error!', error);
    //         });
    // }
    const [choice,setChoice]=React.useState("Sign up")
    function toggleToLogin(){
        setChoice("Log in")
    }
    function toggleToSignup(){
        setChoice("Sign up")
    }
    
    return(
        <>
        <div className="component-box">
        <div className="options-box">
            <span>
                <div><OptionBoxBlue name="Log in"/></div>
            </span>
        </div>
        <form className="form">
        <input type="text" id="username" onChange={(e)=>handleChangeL(e)} placeholder="Username" className="login-input"></input>
        <input type="password" id="password" onChange={(e)=>handleChangeL(e)} placeholder="password" className="login-input"></input>
        {/* <Link to={role==="Driver"?"/facultydashboard":role === "Rider" ? "":""} state={{role:{role}}}><button className="signup-button" onClick={Login} type="submit">Log in</button></Link> */}
        <button className="signup-button" onClick={Login} type="submit">Log in</button>
        </form>
        <a href="" className="forgot-pasword">Forgot Password?</a>
    </div>
    </>
       )
    
}