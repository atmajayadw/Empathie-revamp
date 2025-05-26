import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { useEffect, useRef, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

function Client_list(props) {
  const navigate = useNavigate();

  const hideFooter = () => {
    const footer = document.getElementById("footer");
    footer.style.opacity = "0";
  };

  const setLoaderOn = () => {
    const content = document.querySelector(".clients");
    const footer = document.getElementById("footer");
    document.body.style.overflow = "hidden";
    content.style.opacity = "0";
    setTimeout(() => {
      const loader = document.getElementById("loader");
      loader.style.display = "none";
      content.style.opacity = "1";
      content.classList.add("animate__animated", "animate__fadeIn");
      document.body.style.overflow = "auto";
      footer.style.opacity = "1";
    }, 800);
  };

  const loaderEffect = useRef(false);
  useEffect(() => {
    if (!loaderEffect.current) {
      hideFooter();
      setLoaderOn();
      loaderEffect.current = true;
    }
  }, []);

  const checkPage = () => {
    const h1 = document.querySelector("h1");
    setTimeout(() => {
      if (h1 && h1.textContent.trim() === "") {
        console.log("H1 kosong");
        navigate("/portfolio");
      }
    }, 3000);
  };

  const [result, setData] = useState(null);
  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
  const APP_BASE_URL = import.meta.env.VITE_APP_BASE_URL;

  const getData = () => {
    const selectedCategory = props.category;
    const URL = `${API_BASE_URL}/clients/${selectedCategory}`;
    axios
      .get(URL)
      .then((res) => {
        setData(res.data);
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
        alert("Data Not Found!");
      });
  };

  const effectRun = useRef(false);
  useEffect(() => {
    if (!effectRun.current && props.category) {
      getData();
      effectRun.current = true;
    } else {
      checkPage();
    }
  }, [props.category]);

  // Cek apakah result sudah siap dipakai mapping
  // useEffect(() => {
  //     if (result) {
  //       console.log("✅ result telah diperbarui:", result);
  //     }
  // }, [result]);

  return (
    <>
      <section className="container" id="loader">
        <div className="divLoader">
          <svg
            className="svgLoader"
            viewBox="0 0 100 100"
            width="10em"
            height="10em"
          >
            <path
              stroke="none"
              d="M10 50A40 40 0 0 0 90 50A40 42 0 0 1 10 50"
              fill="#7E8075"
              transform="rotate(179.719 50 51)"
            >
              <animateTransform
                attributeName="transform"
                type="rotate"
                calcMode="linear"
                values="0 50 51;360 50 51"
                keyTimes="0;1"
                dur="1s"
                begin="0s"
                repeatCount="indefinite"
              ></animateTransform>
            </path>
          </svg>
        </div>
        <p>
          <i>loading...</i>
        </p>
      </section>

      <section id="client-list">
        <div className="container">
          <NavLink to={{ pathname: "/portfolio" }}>
            <div className="button-back">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fillRule="currentColor"
                className="arrow bi bi-arrow-left-circle"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5z"
                />
              </svg>
              <h5>&nbsp;&nbsp;back to portfolio</h5>
            </div>
          </NavLink>

          <h1 className="client-type">{props.category}</h1>
          <div className="clients">
            {result?.data?.map((item) => (
              <NavLink
                key={item.id}
                className="client"
                rel="noopenner noreferrer"
                to={{ pathname: "/portfolio/client/detail" }}
                state={{
                  client_id: item.client_id,
                  client_name: item.name,
                  category: props.category,
                }}
              >
                <img src={`${APP_BASE_URL}/storage/` + item.thumbnail} alt="" />
                <h3>{item.name}</h3>
              </NavLink>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Client_list;
