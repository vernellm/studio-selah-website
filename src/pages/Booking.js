import ServicesAccor from "../components/ServicesAccor";
import ServicesJumbotron from "../components/ServicesJumbotron";

export default function Booking() {
    return (
        <div className="container border rounded">

            <ServicesJumbotron />

            <hr />

            <ServicesAccor />

            <footer class="pt-3 mt-4 text-muted border-top"> © Studio Selah 2024 </footer>

        </div>
    );
}