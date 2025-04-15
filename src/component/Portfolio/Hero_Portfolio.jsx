import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import {Img_Hero_Portfolio} from "../../assets/img/img.js";

function Hero_Portfolio() {
    return (
        <>
            <section id="hero-portfolio">
                <div className="container-fluid hero">
                    <div className="row">
                        <img src={Img_Hero_Portfolio} alt="" />
                    </div>
                </div>
            </section>
        </>
    )

}
  
export default Hero_Portfolio