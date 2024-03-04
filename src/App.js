import logo from './logo.svg';
import studioselah from './studio_selah_logo.png';
import './App.css';
import './Carousel.css';
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

      <div className="container border rounded marketing">

        <div className="row">

          <div className="col-lg-4">
            <svg class="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="var(--bs-secondary-color)"></rect></svg>
            <h2 className="fw-normal">Heading</h2>
            <p>Information about whatever heading here!</p>
            <p><a class="btn btn-secondary" href="#">View details »</a></p>
          </div>

          <div className="col-lg-4">
            <svg class="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="var(--bs-secondary-color)"></rect></svg>
            <h2 className="fw-normal">Heading</h2>
            <p>Information about whatever heading here!</p>
            <p><a class="btn btn-secondary" href="#">View details »</a></p>
          </div>

          <div className="col-lg-4">
            <svg class="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="var(--bs-secondary-color)"></rect></svg>
            <h2 className="fw-normal">Heading</h2>
            <p>Information about whatever heading here!</p>
            <p><a class="btn btn-secondary" href="#">View details »</a></p>
          </div>

        </div>

        <hr class="featurette-divider text-light"></hr>

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
