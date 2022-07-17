import { Route, Routes } from "react-router-dom";
import Gallery from "./Gallery";
import Aboutus from "./Aboutus";
import Contact from "./contact";
import Register from "./Register";
import Login from "./Login";
import Addproduct from "./Addproduct";
import DisplayProduct from "./DisplayProduct";
import Profile from "./Profile";
import Profileupdate from "./Profileupdate";

const Mid = () =>{
    return(
        <Routes>
            <Route path="/gallery" element={<Gallery/>}></Route>
            <Route path="/aboutus" element={<Aboutus/>}></Route>
            <Route path="/contact" element={<Contact/>}></Route>
            <Route path="/register" element={<Register/>}></Route>
            <Route path="/login" element={<Login/>}></Route>
            <Route path="/addproduct" element={<Addproduct/>}></Route>
            <Route path="/products" element={<DisplayProduct/>}></Route>
            <Route path="/showproducts" element={<Addproduct/>}></Route>
            <Route path="/profile" element={<Profile/>}></Route>
            <Route path="/profileupdate" element={<Profileupdate/>}></Route>


        </Routes>
    )

}

export default Mid;
