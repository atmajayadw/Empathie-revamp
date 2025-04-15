import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { BG1, BG2, BG3, BG4, BG5 } from "../../assets/img/img.js";
import {NavLink } from "react-router-dom";

function Hero_Home() {
    
    return (
      <>
        <section id="hero-home">
          <div id="carousel" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
              <button type="button" data-bs-target="#carousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#carousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
              <button type="button" data-bs-target="#carousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
              <button type="button" data-bs-target="#carousel" data-bs-slide-to="3" aria-label="Slide 4"></button>
              <button type="button" data-bs-target="#carousel" data-bs-slide-to="4" aria-label="Slide 5"></button>
            </div>

            <div className="carousel-inner">
              <div className="carousel-item active" data-bs-interval="2500">
                <img src={BG1} className="carousel-img" alt="..."/>
              </div>
              <div className="carousel-item" data-bs-interval="2500">
                <img src={BG2} className="carousel-img" alt="..."/>
              </div>
              <div className="carousel-item" data-bs-interval="2500">
              <img src={BG3} className="carousel-img" alt="..."/>
              </div>
              <div className="carousel-item" data-bs-interval="2500">
              <img src={BG4} className="carousel-img" alt="..."/>
              </div>
              <div className="carousel-item" data-bs-interval="2500">
              <img src={BG5} className="carousel-img" alt="..."/>
              </div>
            </div>
          </div>

          <div className="mobile-banner">
            
          </div>

          <div className="container-buttons">
            <div className="buttons">
                  <NavLink className="btn btn-explore" rel="noopenner noreferrer" to={{pathname: "/portfolio",}}>
                    <span>More Portfolio</span>
                  </NavLink>

                  <NavLink className="btn btn-contact" rel="noopenner noreferrer" to="https://api.whatsapp.com/send?phone=628561669961&text=Halo,%20Empathie.photo!%20Boleh%20minta%20pricelistnya?" target="_blank">
                    <span>Contact Us</span>
                  </NavLink>
            </div>
          </div>

        </section>
      </>
    )
  }
  
  export default Hero_Home
  