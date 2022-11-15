import "./Home.css";
import React from "react";
import HomeScreen from '../../Components/HomeScreen/HomeScreen';
function Home() {
    return (
        <div className='mainHom'>
            
            {/* <Navbar/> */}
            <div className="back-img">
            <div className="homImg"  >
            {/* <img id="wceimg" src={require('../Images/walchand-college-of-engineering-sangli-walchand-college-002.jpg')} alt="logo" className="wce-img"/> */}
            </div>
            <div className="hom">
            <HomeScreen/>
            </div>
            </div>
        </div >
    )
}
export default Home;