 import RiderLayout from './Components/Layout/RiderLayout/RiderLayout';
import './App.css';
import { useHistory } from 'react-router-dom';
// import './Components/Button/Button';
// import Button from './Components/Button/Button';
// import HomeScreen from './Components/HomeScreen/HomeScreen';
// import Signup from './Pages/Signup/Signup';
import Home from './Pages/Home/Home';
// import SignUpLogin from './Components/SignupLogin/SignupLogin';
import DriverSignup from './Pages/Signup/DriverSignup';
import AdminSignup from './Pages/Signup/AdminSignup';
import RiderSignup from './Pages/Signup/RiderSignup';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
function App() {
  return (
    <div className="App">
      {/* <RiderLayout/> */}
      <Router>
        <Routes>
          <Route exact path='/' element={<Home/>} />
          <Route exact path='/AdminSignup' element={<AdminSignup/>}/>
          <Route exact path='/RiderSignup' element={<RiderSignup/>}/>
          <Route exact path='/DriverSignup' element={<DriverSignup/>}/>
          <Route path='/RiderSignup/RiderDashboard' element={<RiderLayout/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
