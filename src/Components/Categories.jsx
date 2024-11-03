/* eslint-disable react/prop-types */
import { NavLink, useParams } from "react-router-dom";


const Categories = ({ categories }) => {
    // console.log(categories);
    const obj = useParams()
    // console.log(obj)

    return (
        <div>
            <div role="tablist" className="tabs tabs-lifted">
                {/* category */}
                {
                    categories.map(category =>
                        <NavLink
                            to={`/category/${category.category}`}
                            key={category.id}
                            role="tab"
                            className={({ isActive }) => `tab text-xl  font-thin  ${isActive ? 'tab-active' : ''}`}>{category.category}
                        </NavLink>)
                }
            </div>
        </div>
    );
};

export default Categories;