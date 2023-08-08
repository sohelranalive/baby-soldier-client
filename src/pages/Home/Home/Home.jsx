import Banner from "../Banner/Banner";
import Faq from "../Faq/Faq";
import Gallery from "../Gallery/Gallery";
import Partner from "../Partner/Partner";
import Products from "../Products/Products";
import Upcoming from "../Upcoming/Upcoming";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <div className="container mx-auto">
                <Products></Products>
                <Gallery></Gallery>
                <Upcoming></Upcoming>
                <Partner></Partner>
                <Faq></Faq>
            </div>
        </div>
    );
};

export default Home;