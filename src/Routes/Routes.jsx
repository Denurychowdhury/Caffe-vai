import { createBrowserRouter } from "react-router-dom"

import CoffeCards from "../Components/CoffeCards"
import MainLayout from "../Layouts/MainLayout"
import CoffeeDetails from "../Pages/CoffeeDetails"
import Coffees from "../Pages/Coffees"
import Dashboard from "../Pages/Dashboard"
import Home from "../Pages/Home"

const routes = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('../categories.json'),
                children: [
                    {
                        path: '/',
                        element: <CoffeCards></CoffeCards>,
                        loader: () => fetch('../coffees.json')
                    },
                    {
                        path: '/category/:category',
                        element: <CoffeCards></CoffeCards>,
                        loader: () => fetch('../coffees.json')
                    }
                ]
            }
            ,
            {
                path: '/coffees',
                element: <Coffees></Coffees>,
                loader: () => fetch('../coffees.json')
            },
            {
                path: '/coffee/:id',
                element: <CoffeeDetails></CoffeeDetails>,
                loader: () => fetch('../coffees.json')
            },
            {
                path: '/dashboard',
                element: <Dashboard></Dashboard>
            },
        ]
    },
])

export default routes