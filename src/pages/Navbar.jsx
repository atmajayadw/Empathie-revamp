import { Outlet, Link, NavLink } from "react-router-dom";
import { Logo } from "../assets/icons/icons.js";
import { useEffect, useRef } from "react";

const Navbar = () => {


  const hamburger = () => {
    // Untuk membuka/menutup Sidebar menambah class Active
    const sidebar = document.querySelector(".sidebar");
    sidebar.classList.toggle("active");
    if (sidebar.classList.contains("active")) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    // Untuk Transisi Burger Menu
  const span = document.querySelectorAll(".hamburger span");
  span[0].classList.toggle("show1");
  span[1].classList.toggle("show2");
  span[2].classList.toggle("show3");

  };

  // PENGGANTI COMPONENTDIDMOUNT!!!
  // const effectRun = useRef(false); // Ref untuk melacak apakah efek sudah berjalan
  // useEffect(() => {
  //   if (!effectRun.current) {
  //     hamburger();
  //     effectRun.current = true; // Set ke true setelah pertama kali dijalankan
  //   }
  // }, []); // Dependency array kosong agar hanya dijalankan sekali

  return (
    <>
      <section id="navbar">
        <div className="container">
          <div className="row">

            {/* Navbar Desktop */}
            <div className="nav-desktop">
              <ul>
                <li>
                  <NavLink className={({ isActive }) =>isActive ? "active" : ""} rel="noopenner noreferrer" to={{pathname: "/"}}>
                      <span>Home</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                        rel="noopenner noreferrer"
                        to={{pathname: "/portfolio"}}
                    >
                        {" "}
                        <span>Portfolio</span>
                  </NavLink>
                </li>
                <li>
                  <div className="logo">
                  <Link to={"/"}>
                    <img src={Logo} alt="logo"></img>
                  </Link>
                  </div>
                </li>
                <li>
                  <NavLink
                        rel="noopenner noreferrer"
                        to={{pathname: "/about-us"}}
                    >
                        {" "}
                        <span>About</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                        rel="noopenner noreferrer"
                        to={{pathname: "/contact"}}
                    >
                        {" "}
                        <span>Contact</span>
                  </NavLink>
                </li>
              </ul>
            </div>



            {/* Sidebar Mobile */}
            <div className="nav-mobile">

            <div className="logo">
              <Link to={"/"}>
                <img src={Logo} alt=""></img>
              </Link>
            </div>
            
              {/* Burger Menu */}
              <div className="hamburger" onClick={hamburger}>
                  <span className="line1"></span>
                  <span className="line2"></span>
                  <span className="line3"></span>
              </div>

              <div className="sidebar">
                <ul>
                  <li>
                    <NavLink
                      className={({ isActive }) =>isActive ? "active" : ""}
                      rel="noopenner noreferrer"
                      to={{pathname: "/"}} >
                      {" "}
                      <span>Home</span>
                    </NavLink>
                  </li>

                  <li>
                    <NavLink
                      rel="noopenner noreferrer"
                      to={{pathname: "/portfolio"}}>                          
                      {" "}
                      <span>Portfolio</span>
                    </NavLink>
                  </li>

                  <li>
                    <NavLink
                      rel="noopenner noreferrer"
                      to={{pathname: "/about-us"}}>
                      {" "}
                      <span>About</span>
                    </NavLink>
                  </li>

                  <li>
                    <NavLink
                      rel="noopenner noreferrer"
                      to={{pathname: "/contact"}}>
                      {" "}
                      <span>Contact</span>
                    </NavLink>
                  </li>
                </ul>  
              </div>
  
            </div>



          </div>
        </div>
      </section>

      <Outlet />
    </>
  )
};

export default Navbar;