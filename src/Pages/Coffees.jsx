import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Card from "../Components/Card";


const Coffees = () => {
    const data = useLoaderData()
    // console.log(data);
    const [coffees, setCoffees] = useState(data)
    const handleSort = (sortby) => {
        if (sortby === 'popularity') {
            const popularity = [...data].sort((a, b) => b.popularity - a.popularity)
            setCoffees(popularity)
        }
        else if (sortby == 'rating') {
            const rating = [...data].sort((a, b) => b.rating - a.rating)
            setCoffees(rating)
        }
    }
    return (
        <>
            <div className="flex justify-between items-center my-7">
                <div>
                    <h1 className="text-3xl font-thin">
                        Sort Coffee&apos;s by Popularity & Rating-&gt;
                    </h1>
                </div>
                <div className="flex items-center gap-5">
                    <button onClick={() => handleSort('popularity')} className='btn btn-warning'>Sort By Popularity (DSC)</button>
                    <button onClick={() => handleSort('rating')} className='btn btn-warning'> Sort By Rating (ASC)</button>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-10">
                {
                    coffees.map(card => <Card key={card.id} card={card}></Card>)
                }
            </div>
        </>
    );
};

export default Coffees;