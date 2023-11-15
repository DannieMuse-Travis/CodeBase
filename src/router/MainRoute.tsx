import {createBrowserRouter} from "react-router-dom"
import LayOut from "../components/LayOut/LayOut"
import HomeScreen from "../pages/HomeScreen"

export const MainRoute = createBrowserRouter([
    {
        path:"/",
        element:<LayOut/>,
        children:[
            {
                index:true,
                element:<HomeScreen/>
            }
        ]
    }
])