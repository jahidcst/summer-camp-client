import { Helmet } from "react-helmet-async";
import AboutSection from "../AboutSection/AboutSection";
import TopInstructors from "../TopInstructors/TopInstructors";
import PopularClasses from "../PopularClasses/PopularClasses";
import Banner from "../Banner/Banner";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Language Center-Home</title>
      </Helmet>
     <Banner></Banner>
     <AboutSection/>
     <PopularClasses/>
     <TopInstructors/>
    </div>
  );
};

export default Home;
