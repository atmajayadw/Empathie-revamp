import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import {NavLink } from "react-router-dom";
import { useRef, useEffect, useState } from "react";
import { useLocation } from 'react-router-dom';
import axios from "axios";

function Client_detail(props) {

    const setLoaderOn = () => {
        const content = document.querySelector(".client-photos");
        document.body.style.overflow = "hidden";
        content.style.opacity = "0";
        setTimeout(() => {
            const loader = document.getElementById("loader");
            loader.style.display = "none";
            content.style.opacity = "1";
            content.classList.add("animate__animated", "animate__fadeIn");
            document.body.style.overflow = "auto";
          }, 1800);
      }  
  
    const loaderEffect  = useRef(false); 
        useEffect(() => {
            if (!loaderEffect .current) {
              setLoaderOn();
              loaderEffect .current = true; 
            }
        }, []);      

    const location = useLocation();
    const [selectedClient, setCategory] = useState(null);

    const getClient = () => {
        const client_id = location.state?.client_id;
        const client_name = location.state?.client_name;
        const category = location.state?.category;
        return { client_id, client_name, category };
    }

    const [result, setData] = useState(null);
    const getDetail  = () => {
        const URL = "https://empathie-rest-server.empathiephoto.site/api/portfolio/";
        axios
          .get(URL, { params: { client_id: selectedClient.client_id } })
          .then((res) => {
            setData(res.data)
          })
          .catch((error) => {
            console.log(error);
            alert("Data Not Found!");
          });
    }
    
    const clientLoaded  = useRef(false); 
      useEffect(() => {
          if (!clientLoaded .current) {
            const client = getClient();  
            setCategory(client);  
          clientLoaded .current = true; 
          }
      }, []); 

      const detailLoaded = useRef(false);
      useEffect(() => {
          if (!detailLoaded.current && selectedClient) {
            getDetail();
            console.log(selectedClient);
          detailLoaded.current = true; 
          }
    }, [selectedClient]);    

    const showModal = (e) => {
        const modal = document.getElementById("modal");
        const modal_img = document.getElementById("modal-img");

        document.body.style.overflow = "hidden";
        modal.style.display = "block";
        modal_img.src ="https://empathie-rest-server.empathiephoto.site/uploads/" + e.target.alt;
        modal_img.classList.add("animate__animated", "animate__fadeIn");
        if (e.target.naturalHeight > e.target.naturalWidth && window.innerWidth > 992) {
            modal_img.style.maxWidth = "500px";
        } else if(e.target.naturalHeight > e.target.naturalWidth ) {
            modal_img.style.maxWidth = "80%";
        }else if (window.innerWidth < 992){
            modal_img.style.maxWidth = "90%";
        } else {
            modal_img.style.maxWidth = "60%";
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

            <section id="client-detail">
                <div id="modal" className="modal">
                    <span id="close-modal" onClick={closeModal}>x</span>
                    <div className="modal-content">
                        <img id="modal-img" alt="" />
                    </div>
                    <div id="modal-caption"></div>
                </div>

                <div className="container">
                    <NavLink to={{pathname: "/portfolio/client",}} state={{ category: selectedClient?.category }}>
                        <div className="button-back">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fillRule="currentColor" className="arrow bi bi-arrow-left-circle" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5z"/>
                            </svg>
                            <h5>&nbsp;&nbsp;back to client</h5>
                        </div>
                    </NavLink>

                    <h1 className="client-name">{selectedClient?.category + " " + selectedClient?.client_name}</h1>

                    <div className="client-photos">
                        {result?.data?.map((item) => (
                        <div className="photo" key={item.id} onClick={showModal}>
                                <img src={"https://empathie-rest-server.empathiephoto.site/uploads/" + item.photo} alt={item.photo} />
                        </div>
                        ))}
                    </div>
                </div>

            </section>
        </>
    )

}
  
export default Client_detail