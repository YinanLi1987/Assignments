import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <>
     <nav class="navbar navbar-expand-lg bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <Link to='/' class="nav-link active" aria-current="page" >Home</Link>
        </li>
        <li class="nav-item">
          <Link to='/about' class="nav-link" href="#">About</Link>
        </li>
        <li class="nav-item">
          <Link to='/contact' class="nav-link" href="#">Contact</Link>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled">Disabled</a>
        </li>
      </ul>
    </div>
  </div>
</nav>

    </>
  );
}

export default NavBar;