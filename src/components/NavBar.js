import '../NavBar.css';

export default function NavBar(props) {
    return (
        <nav class="navbar navbar-expand-md" data-bs-theme="light">

            <div class="container-fluid mx-auto">

                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarContent" aria-controls="navbarContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div className='collapse navbar-collapse' id='navbarContent'>

                    <ul class="navbar-nav mx-auto">

                        <li class="nav-item active px-4">
                            <button type='button' class="nav-link fw-semibold fs-3 border-bottom border-success-subtle">Home</button>
                        </li>

                        <li class="nav-item px-4">
                            <button type='button' class="nav-link fw-semibold fs-3 border-bottom border-success-subtle">About</button>
                        </li>

                        <li class="nav-item px-4">
                            <button type='button' class="nav-link fw-semibold fs-3 border-bottom border-success-subtle" href="#">Booking</button>
                        </li>

                        <li class="nav-item px-4">
                            <button type='button' class="nav-link fw-semibold fs-3 border-bottom border-success-subtle" href="#">Education</button>
                        </li>

                    </ul> 

                </div>

            </div>
        </nav>
    );
}