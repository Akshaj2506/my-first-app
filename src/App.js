import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
function App() {
  return (
      <>
      {/* <Navbar myName="Akshaj's Web" aboutText="About Us"/> */}
      <Navbar />
      <TextForm heading="Analyse text below"/>
      </>
    );
}

export default App;
