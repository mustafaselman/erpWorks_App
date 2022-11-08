import { BrowserRouter, Routes, Route } from "react-router-dom";
import CreateOrder from "../pages/CreateOrder";
import Home from "../pages/Home";
import Login from "../pages/Login";
import OrderList from "../pages/OrderList";
import PrivateRouter from "./PrivateRouter";
import UserContext from "../context/UserContext"

export default function AppRouter () {

return(
    
    
    <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="homelayout" element={<PrivateRouter/>}>
           <Route path="" element={<Home/>}/>
        </Route>
        <Route path="createorder" element={<CreateOrder/>}/>
        <Route path="orderlist" element={<OrderList/>}/>
 
    </Routes>
   
    
)



}