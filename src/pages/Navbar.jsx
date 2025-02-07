import { Outlet, Link, NavLink } from "react-router-dom";
import { Logo } from "../assets/icons/icons.js";

const Navbar = () => {
  return (
    <>
      <section id="navbar">
        <div className="container">
          <div className="row">
            <div className="nav-desktop">
              <ul>
                <li>
                  <NavLink
                      className={({ isActive }) =>isActive ? "active" : ""}
                      rel="noopenner noreferrer"
                      to={{pathname: "/"}} 
                  >
                      {" "}
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
            
            <div className="nav-mobile">
              <h1>Ini Sidebar</h1>
            </div>
          </div>
        </div>
      </section>

      <Outlet />
    </>
  )
};

export default Navbar;