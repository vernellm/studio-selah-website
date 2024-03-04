import logo from './logo.svg';
import studioselah from './studio_selah_logo.png';
import './App.css';
import NavBar from './components/NavBar';
import MainCarousel from './components/MainCarousel';

function App() {
  return (
    <div data-bs-theme="dark" className="App">

      {/* NavBar Header */}
      <NavBar />

      {/* MainCarousel / Jumbotron */}
      <MainCarousel />

      {/*<div class="card text-bg-dark text-center">
        <img src={studioselah} class="card-img w-75 mx-auto" alt='...' />
        <div class="card-img-overlay">
          <h1 class="card-title">Welcome to Studio Selah Nola</h1>

        </div>

      </div>*/}

      {/*<div class="p-5 mb-4 text-light riunded-3">
        <div class="container-fluid py-5">
          <h1 class="display-5 fw-bold">Studio Selah NOLA</h1>
          <p class="col-md-8 fs-4"> Welcome to Studio Selah NOLA!</p>
        </div>
      </div>*/}

      <div className="container border rounded">
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
        <footer class="pt-3 mt-4 text-muted border-top"> © Studio Selah 2024 </footer>
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
