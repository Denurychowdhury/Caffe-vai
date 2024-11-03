/* eslint-disable react/prop-types */

import { FaTrashCan } from "react-icons/fa6";
import { Link, useLocation } from "react-router-dom";


const Card = ({ card, handleRemoves }) => {
    // console.log(card);
    const { pathname } = useLocation()
    const { name, image, category, origin, type, id, rating, popularity } = card;
    return (
        <div className="flex relative">
            <Link to={`/coffee/${id}`} className="transition hover:scale-105 shadow-xl rounded-xl overflow-hidden">
                <div className="card bg-base-100 w-96 shadow-xl">
                    <figure>
                        <img
                            className="h-56 w-full"
                            src={image}
                            alt="coffees" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">Name:{name}</h2>
                        <p>Category:{category}</p>
                        <p>Type:{type}</p>
                        <p>Origin:{origin}</p>
                        <p>Rating:{rating}</p>
                        <p>Popular:{popularity}</p>
                    </div>
                </div>
            </Link>
            {pathname === '/dashboard' &&
                <div onClick={() => handleRemoves(id)} className="absolute p-3 rounded-full bg-warning -top-5 -right-5 text-xl">
                    <FaTrashCan />
                </div>}
        </div>
    );
};

export default Card;