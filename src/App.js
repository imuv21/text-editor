import "./App.css";
import AboutUs from "./components/AboutUs";
import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
//for = htmlFor, class = className, tabIndex
function App() {
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
  const [mode, setMode] = useState('light');
  const darkMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#050929';
      document.body.style.color = 'white';
      showAlert("Dark Mode has been enabled", "success");
      document.title = "Textyy - Dark Mode";
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
      showAlert("Light Mode has been enabled", "success");
      document.title = "Textyy - Light Mode";
    }
  }
  return (
    <>
    <Router>
    <Navbar title="Textyy" mode={mode} darkMode={darkMode} />
        <Alert alert={alert} />
        <div className="container my-4">
          <Routes>
            <Route exact path="/about" element={<AboutUs/>}/>
            <Route exact path="/home" element={ <TextForm headline="Enter the text to analyze" mode={mode} />}/>
          </Routes>
        </div>
    </Router>
    </>
  );
}
export default App;
