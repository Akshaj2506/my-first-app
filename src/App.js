import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
function App() {
  const [darkMode, setDarkMode] = useState('light');
  const [uiButtonText, setUiButtonText] = useState('Enable Dark Mode');
  const [alert, setAlert] = useState(null);
  const [customBg, setCustomBg] = useState('');

  const displayAlert = (message, type) => {
    setAlert({
      alertMsg: message,
      alertType: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500)
  }

  const handleUiToggle = () => {
    if (darkMode === "dark") {
      setDarkMode("light");
      setUiButtonText("Enable Dark Mode");
      document.title = "TextUtils";
      document.body.style.backgroundColor = "white";
      document.documentElement.setAttribute('data-bs-theme', 'light');
      document.getElementById("flexSwitchCheckDefault1").checked = false;
      displayAlert("Light Mode Enabled", "success");
    } else {
      setDarkMode("dark");
      setUiButtonText("Enable Light Mode");
      document.title = "TextUtils- Dark Mode";
      document.body.style.backgroundColor = "#222";
      document.documentElement.setAttribute('data-bs-theme', 'dark');
      document.getElementById("flexSwitchCheckDefault1").checked = true;
      displayAlert("Dark Mode Enabled", "info");
    }
  }

  return (
    <>
      <Router>
        <Navbar mode={darkMode} toggleUi={handleUiToggle} customBg={customBg} setCustomBg={setCustomBg} handleUiToggle={handleUiToggle} />
        <Alert alert={alert} />
        <Routes>
          <Route exact path='/about' element={<About />}/>
          <Route exact path='/' element={<TextForm heading="Analyse text below" mode={darkMode} />}/>
        </Routes>
        <div className="container">
          <button onClick={handleUiToggle} className='btn btn-primary'>{uiButtonText}</button>
        </div>
      </Router>
    </>
  );
}

export default App;
