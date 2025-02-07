import { Outlet, Link, NavLink } from "react-router-dom";
import { Logo } from "../assets/icons/icons.js";

const Navbar = () => {
  return (
    <>
      <section id="navbar">
        <div className="container">
          <div className="row navbar">
            <div className="logo">
                <Link to={"/"}>
                  <img src={Logo} alt="logo"></img>
                </Link>
            </div>

            <div className="links">
              <ul>
                <li>
                  <NavLink
                      className="link home" rel="noopenner noreferrer"
                      to={{pathname: "/"}}
                  >
                      {" "}
                      <span>Home</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                        className="link portfolio" rel="noopenner noreferrer"
                        to={{pathname: "/portfolio"}}
                    >
                        {" "}
                        <span>Portfolio</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                        className="link about" rel="noopenner noreferrer"
                        to={{pathname: "/about-us"}}
                    >
                        {" "}
                        <span>About</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                        className="link contact" rel="noopenner noreferrer"
                        to={{pathname: "/contact"}}
                    >
                        {" "}
                        <span>Contact</span>
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Outlet />
    </>
  )
};

export default Navbar;