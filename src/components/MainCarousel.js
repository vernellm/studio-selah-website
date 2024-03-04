import studioselah from '../studio_selah_logo.png';

export default function MainCarousel() {
    return (
        <div id="mainCarousel" class="carousel slide mt-3 mb-5">

            <div class="carousel-inner">

                <div class="carousel-item active">
                    <img src={studioselah} class="d-block w-50 mx-auto" alt="..."/>
                    <div class="carousel-caption d-none d-md-block text-light">
                        <h1>Welcome to Studio Selah NOLA!</h1>
                    </div>
            </div>

            </div>

            <button class="carousel-control-prev" type="button" data-bs-target="#mainCarousel" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>

            <button class="carousel-control-next" type="button" data-bs-target="#mainCarousel" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>

        </div>
    );
}