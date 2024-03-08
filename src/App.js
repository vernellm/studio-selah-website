import logo from './logo.svg';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import Services from './pages/Services';
import './App.css';
import './Carousel.css';  

function App() {
  
  return (

    <div data-bs-theme="light" className="App">

      {/* NavBar Header */}
      <NavBar />

      <Home />

      <Services />

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
