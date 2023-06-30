import logo from './logo.svg';
import './App.css';

let name = "Akshaj"
function App() {
  return (
      <>
      <nav>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </nav>
      <div className="container">
        <h1>Hello {name}</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit suscipit omnis fugiat libero, totam cupiditate quae, ratione consequatur culpa aliquam, placeat perspiciatis nobis? Iure aspernatur vitae voluptas commodi, autem et delectus sit natus tempora, atque eaque. Dolorem corporis iusto, tempore rem error expedita explicabo, repellat suscipit sit molestiae excepturi! Aliquid?</p>
      </div>
      </>
    );
}

export default App;
