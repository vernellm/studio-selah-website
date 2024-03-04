export default function NavBar() {
    return (
        <nav class="navbar" data-bs-theme="dark">

            <div class="container-fluid mx-auto">

                <ul class="navbar-nav flex-row mx-auto">
                    <li class="nav-item active px-4">
                        <a class="nav-link fs-3" href="#">Home</a>
                    </li>
                    <li class="nav-item px-4">
                        <a class="nav-link fs-3" href="#">About</a>
                    </li>
                    <li class="nav-item px-4">
                        <a class="nav-link fs-3" href="#">Booking</a>
                    </li>
                    <li class="nav-item px-4">
                        <a class="nav-link fs-3" href="#">Education</a>
                    </li>
                </ul>

            </div>
        </nav>
    );
}