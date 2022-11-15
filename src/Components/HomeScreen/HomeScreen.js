import React from "react";
import Button from "../Button/Button";
import { Link } from "react-router-dom";
import "./HomeScreen.css";
export default function HomeScreen() {
    const [role, setRole] = React.useState("");
    function roleToFaculty() {
        setRole("Admin")
    }
    function roleToStudent() {
        setRole("Driver")
    }
    function roleToStudent() {
        setRole("Rider")
    }
    return (
        <div className="homes">
            <div className="home-1-button">
                {/* <Link to="/signup" state={{ role: "Admin" }}> */}
                    <div onClick={roleToFaculty}>
                        <Button title="Admin Login" />
                    </div>
                {/* </Link> */}
            </div>
            <div className="home-1-button">
                {/* <Link to="/signup" state={{ role: "Driver" }}> */}
                    <div onClick={roleToStudent}>
                        <Button title="Driver Login" />
                    </div>
                {/* </Link> */}
            </div>
            <div className="home-1-button">
                {/* <Link to="/signup" state={{ role: "Rider" }}> */}
                    <div onClick={roleToStudent}>
                        <Button title="Rider Login" />
                    </div>
                {/* </Link> */}
            </div>
        </div>

    )
}