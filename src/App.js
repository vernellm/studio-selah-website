import logo from './logo.svg';
import studioselah from './studio_selah_logo.png';
import './App.css';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="App">

      {/* NavBar Header */}
      <NavBar />

      <div class="p-5 mb-4 bg-dark text-light riunded-3">
        <div class="container-fluid py-5">
          <h1 class="display-5 fw-bold">Studio Selah NOLA</h1>
          <p class="col-md-8 fs-4"> Welcome to Studio Selah NOLA!</p>
        </div>
      </div>

      <div class="container border rounded">
        <div class="row">
          <div class="col-sm-6 border rounded">
            <img src={studioselah} 
              class="rounded-5 float-left img-fluid"
              alt='logo'
            />
          </div>
          <div class="col-sm-6 border rounded">
            <p>Hello World</p>
          </div>
        </div>
        <div class="row">
          <div class="col-sm-4 border rounded">
            <p>Hello World</p>
          </div>
          <div class="col-sm-8 border rounded">
            <p>Hello World</p>
          </div>
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

      <footer class="pt-3 mt-4 text-muted border-top"> © 2024 </footer>
    </div>
  );
}

export default App;
