import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import AddReview from "../../pages/AddReview/AddReview";
import AllReviews from "../../pages/AllReviews/AllReviews";
import Home from "../../pages/Home/Home/Home";
import Packages from "../../pages/Packages/Packages";
import SinglePackageInfo from "../../pages/Packages/SinglePackageInfo";
import Login from "../../pages/shared/Longin/Login";
import Register from "../../pages/shared/Register/Register";
import PrivetRoutes from "../PriverRoutes/PrivetRoutes";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/packages',
                element: <Packages></Packages>,
                loader: ()=> fetch('https://rr-travels-server-rakib4485.vercel.app/packages')
            },
            {
                path: '/packages/:id',
                element: <SinglePackageInfo></SinglePackageInfo>,
                loader: ({params}) =>{
                    return fetch(`https://rr-travels-server-rakib4485.vercel.app/packages/${params.id}`)
                }
            },
            {
                path: 'reviews',
                element: <AllReviews></AllReviews>,
                loader: () => {
                    return fetch(`https://rr-travels-server-rakib4485.vercel.app/reviews`)
                }
            },
            {
                path: '/addReview',
                element: <PrivetRoutes><AddReview></AddReview></PrivetRoutes>,
                loader: ({params}) => {
                    return fetch(`https://rr-travels-server-rakib4485.vercel.app/reviews`)
                }
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            }
        ]
    }
])