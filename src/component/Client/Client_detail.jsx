import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import {BG2} from "../../assets/img/img.js";
import {NavLink } from "react-router-dom";



function Client_detail() {
    const showModal = () => {
        const modal = document.getElementById("modal");
        const thumbs = document.querySelectorAll(".photo");
        const modal_img = document.getElementById("modal-img");

        document.body.style.overflow = "hidden";
        modal.style.display = "block";
        modal_img.src =BG2;
        if (modal_img.offsetHeight > 1000) {
            modal_img.style.maxWidth = "400px";
        }
        
    };

    const closeModal = () => {
        const modal = document.getElementById("modal");
        modal.style.display = "none";
        document.body.style.overflow = "auto";
        modal.classList.remove("wow", "animate__animated", "animate__fadeIn");
    };

    
    return (
        <>
            <section id="client-detail">

                <div id="modal" className="modal">
                    <span id="close-modal" onClick={closeModal}>x</span>
                    <img className="modal-content" id="modal-img" alt="" />
                    <div id="modal-caption"></div>
                </div>

                <div className="container">
                <NavLink to={{pathname: "/portfolio/client",}}>
                    <div className="button-back">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fillRule="currentColor" className="arrow bi bi-arrow-left-circle" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5z"/>
                        </svg>
                        <h5>&nbsp;&nbsp;back to client</h5>
                    </div>
                </NavLink>

                <h1 className="client-name">Engagement George & Carmen</h1>

                <div className="client-photos">
                        <div className="photo" onClick={showModal}>
                            <img src={BG2} alt="" />
                        </div>

                        <div className="photo">
                            <img src={BG2} alt="" />
                        </div>

                        <div className="photo">
                            <img src={BG2} alt="" />
                        </div>

                        <div className="photo">
                            <img src={BG2} alt="" />
                        </div>

                        <div className="photo">
                            <img src={BG2} alt="" />
                        </div>

                        <div className="photo">
                            <img src={BG2} alt="" />
                        </div>
                    </div>
                </div>

            </section>
        </>
    )

}
  
export default Client_detail