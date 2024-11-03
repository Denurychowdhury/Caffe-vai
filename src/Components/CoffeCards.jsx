import { useEffect, useState } from "react";
import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import Card from "./Card";


const CoffeCards = () => {
    const navigate = useNavigate()
    const data = useLoaderData()
    // console.log(data);
    const { category } = useParams()
    // console.log(category);
    const [coffees, setcoffies] = useState([])
    useEffect(() => {
        if (category) {
            const filteredByCategory = [...data].filter(coffees => coffees.category === category)
            console.log(filteredByCategory);
            setcoffies(filteredByCategory)
        }
        else {
            setcoffies(data.slice(0, 6))
        }
    }, [data, category])
    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-10">
                {
                    coffees.map(card => <Card key={card.id} card={card}></Card>)
                }
            </div>
            <button onClick={() => setcoffies(data)} className="btn btn-warning"
                disabled={coffees.length === data.length}
            >View All</button>
        </>
    );
};

export default CoffeCards;