import '../NavBar.css';

export default function NavBar() {
    return (
        <nav class="navbar navbar-expand-md fixed-top pb-1 border border-bottom border-success-subtle" data-bs-theme="light">

            <div class="container-fluid mx-auto">

                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarContent" aria-controls="navbarContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon py-1"></span>
                </button>

                <div className='collapse navbar-collapse' id='navbarContent'>

                    <ul class="navbar-nav mx-auto">

                        <li class="nav-item active px-4">
                            <button type='button' class="nav-link fw-semibold fs-3">Home</button>
                        </li>

                        <li class="nav-item px-4">
                            <button type='button' class="nav-link fw-semibold fs-3">About</button>
                        </li>

                        <li class="nav-item px-4">
                            <button type='button' class="nav-link fw-semibold fs-3" href="#">Booking</button>
                        </li>

                        <li class="nav-item px-4">
                            <button type='button' class="nav-link fw-semibold fs-3" href="#">Education</button>
                        </li>

                    </ul> 

                </div>

            </div>
        </nav>
    );
}