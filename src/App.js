import logo from './logo.svg';
import main1 from './mainPic1.jpeg';
import './App.css';
import './Carousel.css';
import NavBar from './components/NavBar';
import MainCarousel from './components/MainCarousel';

function App() {
  return (
    <div data-bs-theme="light" className="App">

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

        <div class="row featurette">

          <div class="col-md-7">
            <h2 class="featurette-heading fw-normal lh-1 text-lighter">Welcome to <span class="text-color">Studio Selah NOLA!</span></h2>
            <p class="lead text-color pt-4">
              Studio Selah NOLA is the Metro New Orleans region premiere Natural Hair Studio! Offering services in Cultural Hair Braiding,
              Loc Maintenance & Repairs, Natural Hair Styling, Wicks, Sisterlocks, MicroLocs, and Human Hair Extensions. We have over 20 
              years of natural hair experience. Mobile services include Weddings, Film & Print, and Private Sessions.
            </p>
            <p className='text-lighter fw-bold'> ** A non-refundable 
              deposit is REQUIRED for all new client appointments and for any service over 3 hours.
              </p>
          </div>

          <div class="col-md-5">
            {/* <svg class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 500x500" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="var(--bs-secondary-bg)"></rect><text x="50%" y="50%" fill="var(--bs-secondary-color)" dy=".3em">500x500</text></svg>*/}
            <img src={main1} class="d-block w-100 mx-auto pt-5" alt="..."/>
          </div>

        </div>

        <hr class="featurette-divider"></hr>

        <div className="row">

          <div className="col-lg-4">
            <svg class="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="var(--bs-secondary-color)"></rect></svg>
            <h2 className="fw-normal text-body-secondary">Heading</h2>
            <p className='text-body-tertiary'>Information about whatever heading here!</p>
            <p><a class="btn btn-secondary" href="#">View details »</a></p>
          </div>

          <div className="col-lg-4">
            <svg class="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="var(--bs-secondary-color)"></rect></svg>
            <h2 className="fw-normal text-body-secondary">Heading</h2>
            <p className='text-body-tertiary'>Information about whatever heading here!</p>
            <p><a class="btn btn-secondary" href="#">View details »</a></p>
          </div>

          <div className="col-lg-4">
            <svg class="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="var(--bs-secondary-color)"></rect></svg>
            <h2 className="fw-normal text-body-secondary">Heading</h2>
            <p className='text-body-tertiary'>Information about whatever heading here!</p>
            <p><a class="btn btn-secondary" href="#">View details »</a></p>
          </div>

        </div>

        <hr class="featurette-divider"></hr>

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
    </div>
  );
}

export default App;
