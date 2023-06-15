import img1 from "../../../assets/about/aboutImg1.jpg";
import { FaGraduationCap } from "react-icons/fa";

const AboutSection = () => {
  return (
    <div className="my-36 ">
      <div className="lg:flex px-4 lg:px-0 space-y-4 lg:space-y-0 gap-8">
        <div className="lg:w-3/12">
          <img
            className="rounded-2xl ml-20 border-4 h-full border-[#FF7350]"
            src={img1}
            alt=""
          />
        </div>
        <div className="w-full ml-24">
          <p className="font-bold text-xl flex items-center gap-2 text-[#FF7350]">
           <FaGraduationCap className="text-2xl"/> About Our Language Center
          </p>
          <h3 className="text-3xl lg:text-5xl font-semibold my-4 ">
            A Few Words About the Language Center
          </h3>
          <p className="text-[#125875] text-xl font-semibold">
            The Language Lab is an innovative and comprehensive online platform
            designed to deliver exceptional foreign language courses. Our
            website is dedicated to providing a top-notch language learning
            experience for individuals seeking to enhance their linguistic
            skills.
          </p>
          <p className="my-4 text-md text-gray-600">
            We are proud to offer top ranige in employment services such and
            asser payroll and benefits administrato managemen and asistance with
            global business range ployment employer readings from religious
            texts or literature are also commonly inc compliance.
          </p>

          <button className="bg-[#125875] px-12 mt-8 rounded-md py-4 text-white font-bold hover:bg-[#FF7350]">See More</button>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
