import { toast } from "react-toastify";


// get all coffees from local storage
const getAllFavourite = () => {
    const all = localStorage.getItem('favourite')
    if (all) {
        const favourites = JSON.parse(all)
        // console.log(favourites);
        return favourites;
    }
    else {
        console.log([]);
        return [];
    }
}

//  add a coffe to local storage
const addfavaourite = (coffe) => {
    // get all favourite coffee
    const favouriteCoffee = getAllFavourite()
    const isExist = favouriteCoffee.find(item => item.id == coffe.id)
    if (isExist) return toast.error('this is error bro');
    // console.log(favouriteCoffee);
    favouriteCoffee.push(coffe)
    localStorage.setItem('favourite', JSON.stringify(favouriteCoffee))
    toast.success('successfully addeded')
}
// remove coffe from local storage
const handleRemove = (id) => {
    const favourite = getAllFavourite()
    const remained = favourite.filter(coffe => coffe.id != id)
    localStorage.setItem('favourite', JSON.stringify(remained))
    toast.success('successfully removed')
    
}
export { addfavaourite, getAllFavourite, handleRemove };

