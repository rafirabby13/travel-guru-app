import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main.js";
import Body from "../../Pages/Body/Body.js";
import RightSide from "../../Pages/RightSide/RightSide.js";
import Category from "../../Pages/Category/Category.js";
import Login from "../../Pages/Login/Login.js";
import Register from "../../Pages/Register/Register.js";
import BookingForm from "../../Pages/BookingForm/BookingForm.js";

export const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            
            {
                path:'/',
                element:<Body></Body>
            },
            {
                path:'/categories/:id',
                element: <Category></Category>,
                loader: ({params})=> fetch(`http://localhost:5000/categories/${params.id}`)
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/register',
                element:<Register></Register>
            },
            {
                path:'/booking',
                element:<BookingForm></BookingForm>
            },
           
        ]
    }

])