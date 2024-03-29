import '../css/ServJumbo.css';

export default function ServicesJumbotron() {
    return (
        <div className="p-5 my-5 rounded-3 mainjumbo shadow">
            <div className="container py-5">
                <h1 className="display-5 fw-bold">Services</h1>
                <p className="col-md-8 fs-4 jumbo-text-lighter fw-semibold">
                    Here at Studio Selah, we offer many different services and options
                    to ensure that you leave with the utmost confidence in your crown!
                </p>
                <a href='https://www.vagaro.com/studioselahnola'><button className="btn btn-primary btn-lg jumbo-btn shadow" type="button">Book Now</button></a>
            </div>
        </div>
    );
}