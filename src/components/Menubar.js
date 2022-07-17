import { useState } from "react";
import { Link } from "react-router-dom";

const Menubar = () =>{
  const [pname, setPname] = useState("");
  const [ptype, setPtype] = useState("");
  const [pquantity, setPquantity] = useState("");
  const [pprice, setPprice] = useState("");

    return(
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <a class="navbar-brand" href="#">Navbar</a>

  <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
    <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
      <li class="nav-item active">
        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="/profile">Profile</Link>
      </li>
      <li class="nav-item">
      {/* <a class="nav-link" to="/gallery">Gallery</a> */}
        <Link class="nav-link" to="/gallery">Gallery</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="/aboutus">About Us</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="/contact">Contact</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="/register">Register</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="/login">Login</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="/addproduct">Add Product</Link>
      </li>

      <li class="nav-item">
        <Link class="nav-link" to="/showproduct">My Product</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="/profileupdate">Profile update</Link>
      </li>
    </ul>
    {/* <form class="form-inline my-2 my-lg-0">
      <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form> */}
  </div>
</nav>
        
    )
}

export default Menubar;