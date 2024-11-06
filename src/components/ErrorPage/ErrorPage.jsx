import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="flex items-center justify-center h-screen">
            <div className="text-center">
            <h1 className="font-bold text-2xl">Oops!</h1>
            <p className="font-semibold text-xl">Page not found 404</p>
            <Link to='/'><button className="py-2 px-5 border rounded-full font-bold">Go Home</button></Link>
            </div>
        </div>
    );
};

export default ErrorPage;