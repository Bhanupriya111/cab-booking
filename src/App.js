import RiderLayout from './Components/Layout/RiderLayout/RiderLayout';
import './App.css';
import './Components/Button/Button';
import Button from './Components/Button/Button';
import HomeScreen from './Components/HomeScreen/HomeScreen';
import Signup from './Pages/Signup/Signup';
import Home from './Pages/Home/Home';
import SignUpLogin from './Components/SignupLogin/SignupLogin';
function App() {
  return (
    <div className="App">
      {/* <RiderLayout/> */}
      {/* <Home/> */}
      <Signup/>
    </div>
  );
}

export default App;
