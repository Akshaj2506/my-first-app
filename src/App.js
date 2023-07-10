import { useState } from 'react';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';

function App() {
  const [darkMode, setDarkMode] = useState('light');
  const [uiButtonText, setUiButtonText] = useState('Enable Dark Mode');
  const [alert, setAlert] = useState(null);

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
      document.body.style.backgroundColor = "white";
      document.documentElement.setAttribute('data-bs-theme', 'light');
      displayAlert("Light Mode Enabled", "success");
    } else {
      setDarkMode("dark");
      setUiButtonText("Enable Light Mode");
      document.body.style.backgroundColor = "#222";
      document.documentElement.setAttribute('data-bs-theme', 'dark');
      displayAlert("Dark Mode Enabled", "info");
    }
  }

  return (
    <>
      <Navbar mode={darkMode} toggleUi={handleUiToggle}/>
      <Alert alert={alert}/>
      <TextForm heading="Analyse text below" mode={darkMode}/>
      {/* <About /> */}
      <div className="container">
        <button onClick={handleUiToggle} className='btn btn-primary'>{uiButtonText}</button>
      </div>
    </>
  );
}

export default App;
