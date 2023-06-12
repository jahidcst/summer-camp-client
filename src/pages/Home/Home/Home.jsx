import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import Extra from "../Extra/Extra";
import PopularClasses from "../Classes/PopularClasses";
import Instructors from "../Instructors/Instructors";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Yogastic | Home</title>
            </Helmet>
            <Banner></Banner>
            {/* popular class */}
            <PopularClasses></PopularClasses>
            {/* Instructor section */}
            <Instructors></Instructors>
            {/* Extra section */}
            <Extra></Extra>

        </div>
    );
};

export default Home;