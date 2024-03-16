import App from "../App"
import About from "./About"
import Body from "./Body";
import Help from "./Help";
import CustomError from "./CustomError";
import { createBrowserRouter } from "react-router-dom";
import Menu from "./Menu";


const approuter = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement:<CustomError/>,
        children: [
            {
                path: "",
                element: <Body />
            },
            {
                path: "about",
                element: <About />

            },
            {
                path: "support",
                element: <Help />
            },
            {
                path:"menu/:resId",
                element:<Menu/>

            }
        ],
    }
])

export default approuter;