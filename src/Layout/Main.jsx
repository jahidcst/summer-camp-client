import { Outlet } from "react-router-dom";
import Footer from "../Shared/Footer";
import Navber from "../Shared/Navber";


const Main = () => {
    return (
        <div>
            <Navber></Navber>
            <div className="min-h-[100px]">
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Main;