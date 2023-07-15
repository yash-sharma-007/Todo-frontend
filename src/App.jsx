/* eslint-disable react-hooks/exhaustive-deps */
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./Components/Home";
import { Navbar } from "./Components/Navbar";
import { Register } from "./Components/Register";
import { Login } from "./Components/Login";
import { Profile } from "./Components/Profile";
import { Toaster } from "react-hot-toast";
import { About } from "./Components/About";
import Pagenotfound from "./Components/Pagenotfound";


function App() {
 
  return (

    <Router>
      <Navbar />
      <Routes>
             <Route path="/" element={<About/> } />
             <Route path='/login' element={<Login/>} />  
             <Route  path={'/Profile'} element={localStorage.getItem('token') ? <Profile/> : <Pagenotfound/> }  />
            <Route path="/home" element={ localStorage.getItem('token')? <Home /> : <Pagenotfound/>} />
            <Route path='/register' element={<Register/>} />
       
        
      </Routes>
      <Toaster/>
    </Router>
  );
}

export default App;
