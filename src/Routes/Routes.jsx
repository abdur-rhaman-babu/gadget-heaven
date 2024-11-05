import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../components/MainLayout/MainLayout";
import Home from "../Pages/Home/Home";
import Statistics from "../Pages/Statistics/Statistics";
import Dashboard from "../Pages/Dashboard/Dashboard";
import Products from './../Pages/Products/Products';
import ProductDetails from "../components/ProductDetails/ProductDetails";

const router = createBrowserRouter([
    {
        path:'/',
        element:<MainLayout/>,
        children:[
            {
                path:'/',
                element:<Home/>,
                loader: ()=> fetch('../categories.json'),
                children:[
                    {
                        path:'/',
                        element:<Products/>,
                        loader: ()=> fetch('../products.json')
                    },
                    {
                        path:'categories/:category',
                        element:<Products/>,
                        loader: ()=> fetch('../products.json')
                    }
                ]
            },
            {
                path:'/statistics',
                element:<Statistics/>
            },
            {
                path:'/dashboard',
                element:<Dashboard/>,
                loader: ()=> fetch('../products.json')
            },
            
            {
                path:'product/:productId',
                element:<ProductDetails/>,
                loader: ()=> fetch('../products.json')
            },
            
            
        ]
    }
])

export default router;