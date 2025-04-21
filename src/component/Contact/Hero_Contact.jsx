import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import {Img_Hero_Contact} from "../../assets/img/img.js";

function Hero_Contact() {
    return (
        <>
            <section id="hero-contact">
                <div className="container-fluid hero">
                    <div className="row">
                        <img src={Img_Hero_Contact} alt="" />
                    </div>
                </div>
            </section>
        </>
    )

}
  
export default Hero_Contact