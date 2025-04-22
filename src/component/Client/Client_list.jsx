import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import {Img_Hero_Portfolio} from "../../assets/img/img.js";
import {NavLink } from "react-router-dom";
import { useLocation } from 'react-router-dom';
import { useRef, useEffect } from "react";

function Client_list() {

    // const location = useLocation();
  
    // const getCategory = () => {
    //   const engagement = location.state?.engagement; // Akses state yang dikirim
    //   console.log(engagement);  // Akan mencetak 'Engagement'
    // };



    //   // PENGGANTI COMPONENTDIDMOUNT!!!
    // const effectRun = useRef(false); // Ref untuk melacak apakah efek sudah berjalan
    // useEffect(() => {
    //     if (!effectRun.current) {
    //     getCategory();
    //     console.log(location.state);
    //     effectRun.current = true; 
    //     }
    // }, []); 

    return (
        <>
            <section id="client-list">
                <div className="container">
                <NavLink to={{pathname: "/portfolio",}}>
                    <div className="button-back">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fillRule="currentColor" className="arrow bi bi-arrow-left-circle" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5z"/>
                        </svg>
                        <h5>&nbsp;&nbsp;back to portfolio</h5>
                    </div>
                </NavLink>

                    <h1 className="client-type">Engagement</h1>

                    <div className="clients">
                        <NavLink className="client" rel="noopenner noreferrer" to={{pathname: "/portfolio/client/detail",}}>
                                <img src={Img_Hero_Portfolio} alt="" />
                                <h3>George & Carmen</h3>
                        </NavLink>

                        <div className="client">
                            <img src={Img_Hero_Portfolio} alt="" />
                            <h3>George & Carmen</h3>
                        </div>

                        <div className="client">
                            <img src={Img_Hero_Portfolio} alt="" />
                            <h3>George & Carmen</h3>
                        </div>

                        <div className="client">
                            <img src={Img_Hero_Portfolio} alt="" />
                            <h3>George & Carmen</h3>
                        </div>

                        <div className="client">
                            <img src={Img_Hero_Portfolio} alt="" />
                            <h3>George & Carmen</h3>
                        </div>

                        <div className="client">
                            <img src={Img_Hero_Portfolio} alt="" />
                            <h3>George & Carmen</h3>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )

}
  
export default Client_list