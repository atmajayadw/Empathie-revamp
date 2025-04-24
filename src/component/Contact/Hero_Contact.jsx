import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import {Img_Hero_Contact} from "../../assets/img/img.js";
import { useRef, useEffect } from "react";

function Hero_Contact() {

    const setLoaderOn = () => {
        const hero = document.getElementById("hero-contact");
        const content = document.getElementById("content-contact");
        document.body.style.overflow = "hidden";
        hero.style.opacity = "0";
        content.style.opacity = "0";
        setTimeout(() => {
            const loader = document.getElementById("loader");
            loader.style.display = "none";
            hero.style.opacity = "1";
            content.style.opacity = "1";
            hero.classList.add("animate__animated", "animate__fadeIn");
            content.classList.add("animate__animated", "animate__fadeIn", "animate__delay-1s");
            document.body.style.overflow = "auto";
          }, 500);
    }

    const loaderEffect  = useRef(false); 
      useEffect(() => {
          if (!loaderEffect .current) {
            setLoaderOn();
            loaderEffect .current = true; 
          }
      }, []);   

    return (
        <>
            <section className="container" id="loader">
                <div className="divLoader">
                    <svg className="svgLoader" viewBox="0 0 100 100" width="10em" height="10em">
                        <path stroke="none" d="M10 50A40 40 0 0 0 90 50A40 42 0 0 1 10 50" fill="#7E8075" transform="rotate(179.719 50 51)">
                            <animateTransform attributeName="transform" type="rotate" calcMode="linear" values="0 50 51;360 50 51"
                            keyTimes="0;1" dur="1s" begin="0s" repeatCount="indefinite" ></animateTransform>
                        </path>
                    </svg>
                </div>
                <p><i>loading...</i></p>
            </section>

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