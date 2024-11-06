import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../components/MainLayout/MainLayout";
import Home from "../Pages/Home/Home";
import Statistics from "../Pages/Statistics/Statistics";
import Dashboard from "../Pages/Dashboard/Dashboard";
import Products from './../Pages/Products/Products';
import ProductDetails from "../components/ProductDetails/ProductDetails";
import Support from "../components/FooterLink/Support";
import Oreder from "../components/FooterLink/Oreder";
import Delivery from "../components/FooterLink/Delivery";
import Returns from "../components/FooterLink/Returns";
import AboutUs from './../components/FooterLink/AboutUs';
import Carreers from "../components/FooterLink/Carreers";
import Contact from "../components/FooterLink/Contact";
import Policy from './../components/FooterLink/Policy';
import Privacy from "../components/FooterLink/Privacy";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import Service from "../components/Service/Service";


const router = createBrowserRouter([
    {
        path:'/',
        element:<MainLayout/>,
        errorElement:<ErrorPage/>,
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
                element:<Statistics/>,
                loader: ()=> fetch('../products.json')
            },
            {
                path:'/dashboard',
                element:<Dashboard/>,
            },
            
            {
                path:'product/:productId',
                element:<ProductDetails/>,
                loader: ()=> fetch('../products.json')
            },
            {
                path:'/support',
                element:<Support/>
            },
            {
                path:'/order',
                element:<Oreder/>
            },
            {
                path:'/delivery',
                element:<Delivery/>
            },
            {
                path:'/return',
                element:<Returns/>
            },
            {
                path:'/aboutus',
                element:<AboutUs/>
            },
            {
                path:'/careers',
                element:<Carreers/>
            },
            {
                path:'/contact',
                element:<Contact/>
            },
            {
                path:'/service',
                element:<Service/>
            },
            {
                path:'/privacy',
                element:<Privacy/>
            },
            {
                path:'/policy',
                element:<Policy/>
            }
            
        ]
    }
])

export default router;