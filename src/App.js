import { useState } from 'react';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  const [darkMode, setDarkMode] = useState('light');
  const [uiButtonText, setUiButtonText] = useState('Enable Dark Mode');

  const handleUiToggle = () => {
    if (darkMode === "dark") {
      setDarkMode("light");
      setUiButtonText("Enable Dark Mode");
      document.body.style.backgroundColor = "white";
    } else {
      setDarkMode("dark");
      setUiButtonText("Enable Light Mode");
      document.body.style.backgroundColor = "#222";
    }
  }

  return (
    <>
      <Navbar mode={darkMode} toggleUi={handleUiToggle}/>
      <TextForm heading="Analyse text below" mode={darkMode} />
      {/* <About /> */}
      <div className="container">
        <button onClick={handleUiToggle} className='btn btn-primary'>{uiButtonText}</button>
      </div>
    </>
  );
}

export default App;
