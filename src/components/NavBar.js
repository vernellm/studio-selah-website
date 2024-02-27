export default function NavBar() {
    return (
        <nav class="navbar bg-dark border-bottom border-body" data-bs-theme="dark">

            <div class="container-fluid">

                <span class="navbar-brand mb-0 h1">Studio Selah</span>

                <ul class="navbar-nav flex-row ml-auto">
                    <li class="nav-item active px-2">
                        <a class="nav-link" href="#">Home</a>
                    </li>
                    <li class="nav-item px-2">
                        <a class="nav-link" href="#">About</a>
                    </li>
                    <li class="nav-item px-2">
                        <a class="nav-link" href="#">Booking</a>
                    </li>
                    <li class="nav-item px-2">
                        <a class="nav-link" href="#">Education</a>
                    </li>
                </ul>

            </div>
        </nav>
    );
}