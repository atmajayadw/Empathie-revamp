import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { Logo } from "../../assets/img/img";

function Content_About() {
    return(
        <>
            <section id="content-about">
                <div className="container">
                    <h1>ABOUT US</h1>

                    <div className="row justify-content-center">
                        <div className="content image col-12 col-lg-6">
                            <img src={Logo} alt="logo" className="img-fluid" />
                        </div>
                        <div className="content desc col-12 col-lg-6">
                            <p>Empathie.photo is a team of professional photographers founded by Jay & Elfin. We offer photography services for weddings, pre-weddings, engagements, and more, mainly in the Jabodetabek area.</p>
                            <br/>
                            <p>As a team of passionate professionals, we're dedicated to capturing meaningful moments through our photography, believing that every picture tells its own story. With creativity, teamwork, and a sincere focus on customer satisfaction, we value every client relationship by giving our absolute best.</p>
                            <br/>
                            <p>We've seen that happiness on each photograph is boundless. It is keeping us encouraged that our job is to provide the best for our customers, wherever and whenever.</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )

}

export default Content_About