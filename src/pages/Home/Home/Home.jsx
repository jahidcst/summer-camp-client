import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import Extra from "../Extra/Extra";
import PopularClasses from "../Classes/PopularClasses";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Yogastic | Home</title>
            </Helmet>
            <Banner></Banner>
            {/* popular class */}
            <PopularClasses></PopularClasses>
            {/* Extra section */}
            <Extra></Extra>

        </div>
    );
};

export default Home;