import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import Alert from './Alert';
import { useState } from 'react';
import Profile from './Profile';
import Home from './Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  const [darkmode, setDarkmode] = useState("light");
  const [alert, setAlert] = useState(null);

  const Showalert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 2500);
  }



  const ToggleMode = () => {
    if (darkmode === "dark") {
      setDarkmode("light")
      //document.body.style.backgroundColor = "light"
      Showalert("light Mode Enabled", "success");
    }
    else {
      setDarkmode("dark")
      //  document.body.style.backgroundColor = "dark"
      Showalert("Dark Mode enabled", "danger");
    }
  }

  return (
    <BrowserRouter>
      <div >
        <Navbar name="TextUtils" darkmode={darkmode} setDarkmode={ToggleMode} />
        <Alert alert={alert} setAlert={setAlert} />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/profile' element={<Profile />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
