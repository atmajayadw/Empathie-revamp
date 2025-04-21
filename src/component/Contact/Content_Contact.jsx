import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import {NavLink } from "react-router-dom";
import { Call, Mail, Location, Instagram } from "../../assets/icons/icons";

function Content_Contact() {
    return(
        <>
            <section id="content-contact">
                <div className="container">
                    <h1>CONTACT US</h1>

                    <div className="row contacts">
                        <NavLink className="contact" rel="noopenner noreferrer" to="https://api.whatsapp.com/send?phone=628561669961&text=Halo,%20Empathie.photo!%20Boleh%20minta%20pricelistnya?" target="_blank">
                            <img src={Call} alt="" className="img-fluid" />
                            <h4>+628561669961</h4>
                        </NavLink>

                        <NavLink className="contact" rel="noopenner noreferrer" to="mailto:empathiephoto@gmail.com" target="_blank">
                            <img src={Mail} alt="" className="img-fluid" />
                            <h4>empathiephoto@gmail.com</h4>
                        </NavLink>

                        <div className="contact">
                            <img src={Location} alt="" className="img-fluid" />
                            <h4>Depok, Jawa Barat</h4>
                        </div>

                        <NavLink className="contact" rel="noopenner noreferrer" to="https://www.instagram.com/empathie.photo/" target="_blank">
                            <img src={Instagram} alt="" className="img-fluid" />
                            <h4>@empathie.photo</h4>
                        </NavLink>
                    </div>
                </div>
            </section>
        </>
    )

}

export default Content_Contact