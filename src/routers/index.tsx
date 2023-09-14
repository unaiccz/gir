import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Contact from "../pages/Contact";
import Loayaut from "../pages/Loayaut";

export const router = createBrowserRouter([
    {path: '/', element: <Loayaut />,
    children: [
        {path: '/', element: <Home />},
        {path: '/contact', element: <Contact />}
    ]
},

])