import Banner from "../Banner/Banner";
import Explore from "../Explore/Explore";
import Products from "../Products/Products";
import Upcoming from "../Upcoming/Upcoming";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <div className="container mx-auto">
                <Explore></Explore>
                <Products></Products>
                <Upcoming></Upcoming>
            </div>
        </div>
    );
};

export default Home;