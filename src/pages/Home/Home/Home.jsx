import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import Extra from "../Extra/Extra";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Yogastic | Home</title>
            </Helmet>
            <Banner></Banner>
            {/* Extra section */}
            <Extra></Extra>
        </div>
    );
};

export default Home;