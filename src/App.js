import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">

      {/* NavBar Header */}
      <nav class="navbar navbar-light bg-light">
        <span class="navbar-brand mb-0 h1">Studio Selah</span>

        <ul class="navbar-nav flex-row ml-auto">
          <li class="nav-item active px-2">
            <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
          </li>
          <li class="nav-item px-2">
            <a class="nav-link" href="#">About</a>
          </li>
          <li class="nav-item px-2">
            <a class="nav-link" href="#">Booking</a>
          </li>
          <li class="nav-item px-2">
            <a class="nav-link" href="#">Education</a>
          </li>
        </ul>
      </nav>


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
