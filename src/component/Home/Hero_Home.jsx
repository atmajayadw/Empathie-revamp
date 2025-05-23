import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { BG1, BG2, BG3, BG4, BG5 } from "../../assets/img/img.js";

function Hero_Home() {
  const notify = () => {
    toast.dark(`Use desktop for the best experience.`, {
      position: "bottom-right",
    });
  };

  const setLoaderOn = () => {
    const hero = document.getElementById("hero-home");
    document.body.style.overflow = "hidden";
    hero.style.opacity = "0";
    setTimeout(() => {
      const loader = document.getElementById("loader");
      loader.style.display = "none";
      hero.style.opacity = "1";
      hero.classList.add("animate__animated", "animate__fadeIn");
      document.body.style.overflow = "auto";
      if (window.innerWidth < 481) {
        notify();
      }
    }, 500);
  };

  const loaderEffect = useRef(false);
  useEffect(() => {
    if (!loaderEffect.current) {
      setLoaderOn();
      loaderEffect.current = true;
    }
  }, []);

  return (
    <>
      <section className="container" id="loader">
        <div className="divLoader">
          <svg
            className="svgLoader"
            viewBox="0 0 100 100"
            width="10em"
            height="10em"
          >
            <path
              stroke="none"
              d="M10 50A40 40 0 0 0 90 50A40 42 0 0 1 10 50"
              fill="#7E8075"
              transform="rotate(179.719 50 51)"
            >
              <animateTransform
                attributeName="transform"
                type="rotate"
                calcMode="linear"
                values="0 50 51;360 50 51"
                keyTimes="0;1"
                dur="1s"
                begin="0s"
                repeatCount="indefinite"
              ></animateTransform>
            </path>
          </svg>
        </div>
        <p>
          <i>loading...</i>
        </p>
      </section>

      <section id="hero-home">
        <div id="carousel" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carousel"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carousel"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carousel"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
            <button
              type="button"
              data-bs-target="#carousel"
              data-bs-slide-to="3"
              aria-label="Slide 4"
            ></button>
            <button
              type="button"
              data-bs-target="#carousel"
              data-bs-slide-to="4"
              aria-label="Slide 5"
            ></button>
          </div>

          <div className="carousel-inner">
            <div className="carousel-item active" data-bs-interval="2500">
              <img src={BG1} className="carousel-img" alt="..." />
            </div>
            <div className="carousel-item" data-bs-interval="2500">
              <img src={BG2} className="carousel-img" alt="..." />
            </div>
            <div className="carousel-item" data-bs-interval="2500">
              <img src={BG3} className="carousel-img" alt="..." />
            </div>
            <div className="carousel-item" data-bs-interval="2500">
              <img src={BG4} className="carousel-img" alt="..." />
            </div>
            <div className="carousel-item" data-bs-interval="2500">
              <img src={BG5} className="carousel-img" alt="..." />
            </div>
          </div>
        </div>

        <div className="mobile-banner"></div>

        <div className="container-buttons">
          <div className="buttons">
            <NavLink
              className="btn btn-explore"
              rel="noopenner noreferrer"
              to={{ pathname: "/portfolio" }}
            >
              <span>More Portfolio</span>
            </NavLink>

            <NavLink
              className="btn btn-contact"
              rel="noopenner noreferrer"
              to="https://api.whatsapp.com/send?phone=628561669961&text=Halo,%20Empathie.photo!%20Boleh%20minta%20pricelistnya?"
              target="_blank"
            >
              <span>Contact Us</span>
            </NavLink>
          </div>
        </div>
        <ToastContainer />
      </section>
    </>
  );
}

export default Hero_Home;
