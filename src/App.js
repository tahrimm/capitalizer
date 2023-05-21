import About from './About';
import Footer from './Footer';
import Alert from './Alart';
import Navbar from './Navbar';
import Textfrom from './Textfrom';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import React, {useState} from 'react';
function App() {
  const [mode, setMode] = useState('light');//if dark mode enable or not
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
        setAlert(null);
    }, 1500);
  }
  const toggleMode = () => {
    if(mode === 'dark')
    {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
    }
    else
    {
      setMode('dark');
      document.body.style.backgroundColor = '#1f2327';
      showAlert("Dark mode has been enabled", "success");
    }
    
  };
  return (
    <>
  <Navbar title="Capitalizer" about = "About Us" mode={mode} toggleMode = {toggleMode} />
  <Alert alert={alert}/>
  <div className="container mb-1">
    <Router>
      <Routes>
        <Route path='/' element={<Textfrom showAlert={showAlert} head = "Enter your text here" mode={mode} />} />
        <Route path = '/About' element={<About mode={mode} />} />
      </Routes>
    </Router>
  </div>
  <div className="container my-3">
  <Footer mode={mode} />
  </div>
  
    </>
  );
}
export default App;