import Banner from "../Banner/Banner";
import Explore from "../Explore/Explore";
import Products from "../Products/Products";
import Upcoming from "../Upcoming/Upcoming";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <div className="container mx-auto">
                <Products></Products>
                <Explore></Explore>
                <Upcoming></Upcoming>
            </div>
        </div>
    );
};

export default Home;