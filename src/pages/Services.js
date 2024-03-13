import ServicesAccor from "../components/ServicesAccor";
import ServicesJumbotron from "../components/ServicesJumbotron";

export default function Services() {
    return (
        <div className="container py-5">

            <ServicesJumbotron />

            <hr />

            <ServicesAccor />

        </div>
    );
}