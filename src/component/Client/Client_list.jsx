import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { useRef, useEffect, useState } from "react";
import {NavLink } from "react-router-dom";
import axios from "axios";

function Client_list(props) {
    const [result, setData] = useState(null);
    
    const getData  = () => {
        const selectedCategory = props.category
        const URL = "https://empathie-rest-server.empathiephoto.site/api/client/";
        axios
          .get(URL, { params: { category: selectedCategory } })
          .then((res) => {
            setData(res.data)
          })
          .catch((error) => {
            console.log(error);
            alert("Data Not Found!");
          });
    }

    const effectRun = useRef(false); 
      useEffect(() => {
          if (!effectRun.current && props.category) {
            getData();
          effectRun.current = true; 
          }
    }, [props.category]);    

    useEffect(() => {
        if (result) {
          console.log("✅ result telah diperbarui:", result);
        }
    }, [result]);

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

                    <h1 className="client-type">{props.category}</h1>
                    <div className="clients">
                        {result?.data?.map((item) => (
                            <NavLink key={item.id} className="client" rel="noopenner noreferrer" to={{pathname: "/portfolio/client/detail",}}>
                            <img src={"https://empathie-rest-server.empathiephoto.site/uploads/thumbnail/"+ item.thumbnail} alt="" />
                            <h3>{item.client}</h3>
                            </NavLink>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )

}
  
export default Client_list