import main1 from '../mainPic1.jpeg';
import MainCarousel from '../components/MainCarousel';
import '../Carousel.css';
import '../App.css';

export default function Home(props) {
    return (
        <div data-bs-theme="light" className="App">

            {/* MainCarousel / Jumbotron */}
            <MainCarousel />

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
                        <img src={main1} class="d-block w-100 mx-auto pt-5" alt="..."/>
                    </div>

                </div>

                <hr class="featurette-divider"></hr>

                <div className="row">

                    <div className="col-lg-4">
                        <svg class="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="var(--bs-secondary-color)"></rect></svg>
                        <h2 className="fw-normal text-color">Heading</h2>
                        <p className='text-lighter fw-semibold'>Information about whatever heading here!</p>
                        <p><button type='button' class="btn btn-secondary tri-btn">View details »</button></p>
                    </div>

                    <div className="col-lg-4">
                        <svg class="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="var(--bs-secondary-color)"></rect></svg>
                        <h2 className="fw-normal text-color">Heading</h2>
                        <p className='text-lighter fw-semibold'>Information about whatever heading here!</p>
                        <p><button type='button' class="btn btn-secondary tri-btn">View details »</button></p>
                    </div>

                    <div className="col-lg-4">
                        <svg class="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="var(--bs-secondary-color)"></rect></svg>
                        <h2 className="fw-normal text-color">Heading</h2>
                        <p className='text-lighter fw-semibold'>Information about whatever heading here!</p>
                        <p><button type='button' class="btn btn-secondary tri-btn">View details »</button></p>
                    </div>

                </div>

                <hr class="featurette-divider"></hr>

                <footer class="pt-3 mt-4 text-muted border-top"> © Studio Selah 2024 </footer>

            </div>

        </div>
    );
}