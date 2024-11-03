
import { useEffect, useState } from "react";
import Card from "../Components/Card";
import Heading from "../Components/Heading";
import { getAllFavourite, handleRemove } from "../Utils";
// import { useLocation } from "react-router-dom";

const Dashboard = () => {

    const [coffees, setCoffees] = useState([])

    useEffect(() => {
        const allFavourite = getAllFavourite()
        setCoffees(allFavourite)
        // console.log(allFavourite);
    }, [])
    // console.log(coffees);
    const handleRemoves = (id) => {
        handleRemove(id)
        const allFavourite = getAllFavourite()
        setCoffees(allFavourite)
    }

    return (
        <>
            <Heading
                title='Welcome to Dashboard'
                subtitle='Manage coffees that you have previously added as favorite. You can view or remove them from here.'
            />

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-12'>
                {
                    coffees.map(card => <Card key={card.id} card={card} handleRemoves={handleRemoves}></Card>)
                }
            </div>
        </>
    );
};

export default Dashboard;