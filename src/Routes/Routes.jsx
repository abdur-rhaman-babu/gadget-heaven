import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../components/MainLayout/MainLayout";
import Home from "../Pages/Home/Home";
import Statistics from "../Pages/Statistics/Statistics";
import Dashboard from "../Pages/Dashboard/Dashboard";

const router = createBrowserRouter([
    {
        path:'/',
        element:<MainLayout/>,
        children:[
            {
                path:'/',
                element:<Home/>,
                loader: ()=> fetch('../products.json')
            },
            {
                path:'/statistics',
                element:<Statistics/>
            },
            {
                path:'/dashboard',
                element:<Dashboard/>
            }
        ]
    }
])

export default router;