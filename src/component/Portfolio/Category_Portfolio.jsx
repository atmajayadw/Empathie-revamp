import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";

function Category_Portfolio() {
  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
  const APP_BASE_URL = import.meta.env.VITE_APP_BASE_URL;

  const [result, setData] = useState(null);

  const getData = () => {
    const URL = `${API_BASE_URL}/category`;
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
    if (!effectRun.current) {
      getData();
      effectRun.current = true;
    }
  }, []);

  return (
    <>
      <section id="category-portfolio">
        <div className="container">
          <div className="row">
            <h1>PORTFOLIO</h1>

            <div className="categories">
              {result?.data?.map((item) => (
                <div className="category" key={item.id}>
                  <img
                    src={`${APP_BASE_URL}/storage/` + item.thumbnail}
                    alt="{item.category_name}"
                  />
                  <NavLink
                    className="btn btn-category"
                    rel="noopenner noreferrer"
                    to={{ pathname: "/portfolio/client" }}
                    state={{ category: item.category_name }}
                  >
                    <span>{item.category_name}</span>
                  </NavLink>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Category_Portfolio;
