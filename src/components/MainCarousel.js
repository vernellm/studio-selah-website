import studioselah from '../assets/studio_selah.png';

export default function MainCarousel() {
    return (
        <div id="mainCarousel" class="carousel slide py-0">

            <div class="carousel-inner">

                <div class="carousel-item active">
                    <img src={studioselah} class="d-block mx-auto img-fluid selah" style={{width: 675}} alt="..."/>
                </div>

            </div>

            <button class="carousel-control-prev visually-hidden" type="button" data-bs-target="#mainCarousel" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>

            <button class="carousel-control-next visually-hidden" type="button" data-bs-target="#mainCarousel" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>

        </div>
    );
}