import NavBar from './components/NavBar';
import Home from './pages/Home';
import Services from './pages/Services';
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route
} from "react-router-dom";
import './App.css';
import './Carousel.css';
import './NavBar.css';

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<NavBar />}>
        <Route index element={<Home />} />
        <Route path="services" element={<Services />} />
      </Route>
    )
  );
  
  return (

    <div data-bs-theme="light" className="App">

      <RouterProvider router={router} />

      <div className='container pb-3'>
                    <footer class="pt-3 mt-4 text-muted text-center border-top border-2"> © 2024 Studio Selah, Inc </footer>
                </div>

    </div>
  );
}

export default App;
