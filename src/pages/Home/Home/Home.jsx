import Banner from "../Banner/Banner";
import Gallery from "../Gallery/Gallery";
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
            </div>
        </div>
    );
};

export default Home;