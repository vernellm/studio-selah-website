import logo from './logo.svg';
import studioselah from './studio_selah_logo.png';
import './App.css';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="App">

      {/* NavBar Header */}
      <NavBar />

      <div class="container text-center border">
        <div class="row">
          <img src={studioselah} class="rounded" alt='logo'/>
          <p>Hello World</p>
        </div>
      </div>


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
