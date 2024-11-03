import { Outlet, useLoaderData } from "react-router-dom";
import Banner from "../Components/Banner";
import Categories from "../Components/Categories";
import Heading from "../Components/Heading";

const Home = () => {
    const categories = useLoaderData()
    return (
        <div>

            {/* banner */}
            <Banner></Banner>
            {/* heading */}
            <Heading title={'Browse Coffees by Category'} subtitle={'Choose your desired coffee category to browse through specific coffees that fit in your taste'}></Heading>
            {/* categories tab section */}
            <Categories categories={categories}></Categories>
            {/* Dynamic nested section */}
            <Outlet></Outlet>
        </div>
    );
};

export default Home;