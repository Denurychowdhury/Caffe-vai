import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";



const MainLayout = () => {
    return (
        <div>
            {/* Navbar section */}
            <ToastContainer position="top-center" />
            <div className="h-16">
                <Navbar></Navbar>
            </div>
            {/* Dynamic Section */}
            <div className="min-h-[calc(100vh-232px)] py-12 md:w-11/12 w-full mx-auto">
                <Outlet></Outlet>
            </div>
            {/* Footer section  */}
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;