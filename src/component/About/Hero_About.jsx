import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import {Img_Hero_About} from "../../assets/img/img.js";

function Hero_About() {
    return (
        <>
            <section id="hero-about">
                <div className="container-fluid hero">
                    <div className="row">
                        <img src={Img_Hero_About} alt="" />
                    </div>
                </div>
            </section>
        </>
    )

}
  
export default Hero_About