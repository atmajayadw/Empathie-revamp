import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { BG1, BG2, BG3, BG4, BG5 } from "../../assets/img/img.js";

function Hero_Section() {
    
    return (
      <>
        <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5"></button>

  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={BG1} className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={BG2} className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
    <img src={BG3} className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
    <img src={BG4} className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
    <img src={BG5} className="d-block w-100" alt="..."/>
    </div>
  </div>
</div>
      </>
    )
  }
  
  export default Hero_Section
  