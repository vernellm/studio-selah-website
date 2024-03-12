import main1 from '../assets/mainPic1.jpeg';
import instagram from '../assets/instagram.svg';
import gallery1 from '../assets/gallery1.png.jpeg';
import gallery2 from '../assets/gallery2.png.jpeg';
import gallery3 from '../assets/gallery3.png.jpeg';
import gallery4 from '../assets/gallery4.png.jpeg';
import gallery5 from '../assets/gallery5.png.jpeg';
import gallery6 from '../assets/gallery6.png.jpeg';
import gallery7 from '../assets/gallery7.png.jpeg';
import gallery8 from '../assets/galley8.png.jpeg';
import MainCarousel from '../components/MainCarousel';
import { Link } from "react-router-dom";
import '../css/Carousel.css';
import '../App.css';

  
export default function Home() {

    return (
        
        <div data-bs-theme="light">

            {/* MainCarousel / Jumbotron */}
            <MainCarousel />

            <div className="container marketing">

                <div class="row featurette">

                    <div class="col-md-7">
                        <h2 class="featurette-heading fw-normal lh-1 text-lighter">Welcome to <span class="text-color great-vibes-regular">Studio Selah NOLA!</span></h2>
                        <p class="lead text-color my-5">
                            Studio Selah NOLA is the Metro New Orleans region premiere Natural Hair Studio! Offering services in Cultural Hair Braiding,
                            Loc Maintenance & Repairs, Natural Hair Styling, Wicks, Sisterlocks, MicroLocs, and Human Hair Extensions. We have over 20 
                            years of natural hair experience. Mobile services include Weddings, Film & Print, and Private Sessions.
                        </p>
                        <p className='text-lighter fw-bold'> ** A non-refundable 
                            deposit is REQUIRED for all new client appointments and for any service over 3 hours.
                        </p>
                    </div>

                    <div class="col-md-5">
                        <img src={main1} class="d-block img-fluid mx-auto mt-5 rounded-4 shadow" alt="..."/>
                    </div>

                </div>

                <hr class="featurette-divider"></hr>

                <div className="row">

                    <div className="col-lg-4">
                        <svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" fill="currentColor" class="bi bi-geo-alt-fill mb-3 rounded-circle p-3 geo shadow" viewBox="0 0 16 16">
                            <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6"/>
                        </svg>
                        <h2 className="fw-normal text-color">Location</h2>
                        <p className='text-lighter fw-semibold'>1409 Oretha Castle Haley Boulevard, Ste D, New Orleans, LA 70113</p>
                        <p><button type='button' class="btn btn-secondary tri-btn shadow"><a href='https://www.google.com/maps/dir//1409+Oretha+Castle+Haley+Blvd+d,+New+Orleans,+LA+70113/@29.9417999,-90.1616777,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x8620a5da29d84165:0x3cf0b6ca31aaac56!2m2!1d-90.0792763!2d29.9418255?hl=en&entry=tt'>Directions »</a></button></p>
                    </div>

                    <div className="col-lg-4">
                        <svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" fill="currentColor" class="bi bi-car-front-fill mb-3 rounded-circle p-3 mobile shadow" viewBox="0 0 16 16">
                            <path d="M2.52 3.515A2.5 2.5 0 0 1 4.82 2h6.362c1 0 1.904.596 2.298 1.515l.792 1.848c.075.175.21.319.38.404.5.25.855.715.965 1.262l.335 1.679q.05.242.049.49v.413c0 .814-.39 1.543-1 1.997V13.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-1.338c-1.292.048-2.745.088-4 .088s-2.708-.04-4-.088V13.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-1.892c-.61-.454-1-1.183-1-1.997v-.413a2.5 2.5 0 0 1 .049-.49l.335-1.68c.11-.546.465-1.012.964-1.261a.8.8 0 0 0 .381-.404l.792-1.848ZM3 10a1 1 0 1 0 0-2 1 1 0 0 0 0 2m10 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2M6 8a1 1 0 0 0 0 2h4a1 1 0 1 0 0-2zM2.906 5.189a.51.51 0 0 0 .497.731c.91-.073 3.35-.17 4.597-.17s3.688.097 4.597.17a.51.51 0 0 0 .497-.731l-.956-1.913A.5.5 0 0 0 11.691 3H4.309a.5.5 0 0 0-.447.276L2.906 5.19Z"/>
                        </svg>
                        <h2 className="fw-normal text-color">We're Mobile!</h2>
                        <p className='text-lighter fw-semibold'>We are a Mobile Business servicing everywhere in the United States</p>
                        <p><button type='button' class="btn btn-secondary tri-btn shadow"><Link to="/services">View Services »</Link></button></p>
                    </div>

                    <div className="col-lg-4">
                        <svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" fill="currentColor" class="bi bi-shop rounded-circle mb-3 shop shadow" viewBox="0 -2 16 23">
                            <path d="M2.97 1.35A1 1 0 0 1 3.73 1h8.54a1 1 0 0 1 .76.35l2.609 3.044A1.5 1.5 0 0 1 16 5.37v.255a2.375 2.375 0 0 1-4.25 1.458A2.37 2.37 0 0 1 9.875 8 2.37 2.37 0 0 1 8 7.083 2.37 2.37 0 0 1 6.125 8a2.37 2.37 0 0 1-1.875-.917A2.375 2.375 0 0 1 0 5.625V5.37a1.5 1.5 0 0 1 .361-.976zm1.78 4.275a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 1 0 2.75 0V5.37a.5.5 0 0 0-.12-.325L12.27 2H3.73L1.12 5.045A.5.5 0 0 0 1 5.37v.255a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0M1.5 8.5A.5.5 0 0 1 2 9v6h1v-5a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v5h6V9a.5.5 0 0 1 1 0v6h.5a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1H1V9a.5.5 0 0 1 .5-.5M4 15h3v-5H4zm5-5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1zm3 0h-2v3h2z"/>
                        </svg>
                        <h2 className="fw-normal text-color">Products</h2>
                        <p className='text-lighter fw-semibold'>
                            Check out our Handcrafted Hair Oil created with all natural essential & nourishing oils!
                        </p>
                        <p><button type='button' class="btn btn-secondary tri-btn shadow"><a href='https://www.vagaro.com/studioselahnola/products'>Shop »</a></button></p>
                    </div>

                </div>

                <hr class="featurette-divider"></hr>

                <div className='row featurette'>
                    <h1 className='text-center text-color display-4'>Gallery</h1>
                    <p className='text-center fs-3'>Follow us on IG for more images!</p>
                    <a href='https://www.instagram.com/locdbyladycoco/'><p className='text-center text-color fs-4'>@locdbyladycoco <img src={instagram} width='25' height='25' alt='...' /></p></a>


                    <div className='row mx-auto'>

                        <div className='col-md-6'>
                            <img src={gallery1} class="d-block img-fluid mx-auto my-4 rounded-4 shadow" style={{width: 600}} alt="..."/>

                        </div>

                        <div className='col-md-6'>
                            <img src={gallery2} class="d-block img-fluid mx-auto my-4 rounded-4 shadow" style={{width: 600}} alt="..."/>

                        </div>

                    </div>

                    <div className='row mx-auto'>
                        
                        <div className='col-md-6'>
                            <img src={gallery3} class="d-block img-fluid mx-auto my-4 rounded-4 shadow" style={{width: 600}} alt="..."/>

                        </div>

                        <div className='col-md-6'>
                            <img src={gallery4} class="d-block img-fluid mx-auto my-4 rounded-4 shadow" style={{width: 600}} alt="..."/>

                        </div>

                    </div>

                    <div className='row mx-auto'>
                        
                        <div className='col-md-6'>
                            <img src={gallery5} class="d-block img-fluid mx-auto my-4 rounded-4 shadow" style={{width: 600}} alt="..."/>

                        </div>

                        <div className='col-md-6'>
                            <img src={gallery6} class="d-block img-fluid mx-auto my-4 rounded-4 shadow" style={{width: 600}} alt="..."/>

                        </div>

                    </div>

                    <div className='row mx-auto'>
                        
                        <div className='col-md-6'>
                            <img src={gallery7} class="d-block img-fluid mx-auto my-4 rounded-4 shadow" style={{width: 600}} alt="..."/>

                        </div>

                        <div className='col-md-6'>
                            <img src={gallery8} class="d-block img-fluid mx-auto my-4 rounded-4 shadow" style={{width: 600}} alt="..."/>

                        </div>

                    </div>

                </div>
                
            </div>

        </div>
    );
}