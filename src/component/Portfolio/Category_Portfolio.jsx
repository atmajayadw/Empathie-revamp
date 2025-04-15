import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { Thumbail1, Thumbail2, Thumbail3 } from "../../assets/img/img";
import {NavLink } from "react-router-dom";

function Category_Portfolio() {
    return (
        <>
            <section id="category-portfolio">
                <div className="container">
                    <div className="row">
                        <h1>PORTFOLIO</h1>

                        <div className="categories">
                            <div className="category">
                                <img src={Thumbail1} alt="engagement"/>
                                <NavLink className="btn btn-category" rel="noopenner noreferrer" to={{pathname: "/portfolio/client",}}>
                                    <span>Engagement</span>
                                </NavLink>
                            </div>

                            <div className="category">
                                <img src={Thumbail2} alt="pre-wedding"/>
                                <button className="btn btn-category" rel="noopenner noreferrer" to={{pathname: "/portfolio/client",}}>
                                    <span>PreWedding</span>
                                </button>
                            </div>

                            <div className="category">
                                <img src={Thumbail3} alt="wedding"/>
                                <button className="btn btn-category" rel="noopenner noreferrer" to={{pathname: "/portfolio/client",}}>
                                    <span>Wedding</span>
                                </button>
                            </div>
                        </div>

                        <hr/>

                    </div>
                </div>
            </section>
        </>
    )

}
  
export default Category_Portfolio