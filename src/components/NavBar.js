import { Outlet, NavLink, ScrollRestoration } from "react-router-dom";
import '../css/NavBar.css';

export default function NavBar() {
    return (
        <>
            <nav class="navbar navbar-expand-md pt-1 shadow-sm ps-1 rounded" data-bs-theme="light">

                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarContent" aria-controls="navbarContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon py-1"></span>
                </button>

                <div className='collapse navbar-collapse pb-0' id='navbarContent'>

                    <ul class="navbar-nav mx-auto">

                        <li class="nav-item active px-4">
                            <button type='button' class="nav-link fw-semibold fs-4 py-1 link-text"><NavLink to="/" id="link-text" className={({ isActive }) => {return isActive ? ("border-bottom border-2 border-success-subtle pb-1") : ""}}>Home</NavLink></button>
                        </li>

                        <li class="nav-item px-4">
                            <button type='button' class="nav-link fw-semibold fs-4 py-1"><NavLink to="/services" id="link-text" className={({ isActive }) => {return isActive ? ("border-bottom border-2 border-success-subtle pb-1") : ""}}>Services</NavLink></button>
                        </li>

                        <li class="nav-item px-4">
                            <button type='button' class="nav-link fw-semibold fs-4 py-1" id="link-text">Education</button>
                        </li>

                    </ul> 

                </div>

            </nav>

            <Outlet />

            <ScrollRestoration />
        </>
    );
}