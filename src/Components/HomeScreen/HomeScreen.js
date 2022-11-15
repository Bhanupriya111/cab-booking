import React from "react";
import Button from "../Button/Button";
import { Link } from "react-router-dom";
import "./HomeScreen.css";
export default function HomeScreen() {
    let [role, setRole] = React.useState();
    function roleToAdmin() {
        setRole("Admin")
    }
    function roleToDriver() {
        setRole("Driver")
    }
    function roleToRider() {
        setRole("Rider")
    }
    return (
        <div className="homes">
            <div className="home-1-button">
                <Link to="/AdminSignup" state={{ role: "Admin" }}>
                    <div onClick={roleToAdmin}>
                        <Button title="Admin Login" />
                    </div>
                </Link>
            </div>
            <div className="home-1-button">
                <Link to="/DriverSignup" state={{ role: "Driver" }}>
                    <div onClick={roleToDriver}>
                        <Button title="Driver Login" />
                    </div>
                </Link>
            </div>
            <div className="home-1-button">
                <Link to="/RiderSignup" state={{ role: "Rider" }}>
                    <div onClick={roleToRider}>
                        <Button title="Rider Login" />
                    </div>
                </Link>
            </div>
        </div>

    )
}