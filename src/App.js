import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  return (
    <>
      <Navbar />
      <TextForm heading="Analyse text below"/>
      {/* <About /> */}
    </>
  );
}

export default App;
