import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { Thumbail1, Thumbail2, Thumbail3 } from "../../assets/img/img";
import {Link, NavLink } from "react-router-dom";

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
                                <NavLink className="btn btn-category" rel="noopenner noreferrer" to={{pathname: "/portfolio/client"}} state={{ category: 'Engagement' }} >
                                    <span>Engagement</span>
                                </NavLink>
                            </div>

                            <div className="category">
                                <img src={Thumbail2} alt="pre-wedding"/>
                                <NavLink className="btn btn-category" rel="noopenner noreferrer" to={{pathname: "/portfolio/client"}} state={{ category: 'PreWedding' }} >
                                    <span>PreWedding</span>
                                </NavLink>
                            </div>

                            <div className="category">
                                <img src={Thumbail3} alt="wedding"/>
                                <NavLink className="btn btn-category" rel="noopenner noreferrer" to={{pathname: "/portfolio/client"}} state={{ category: 'Wedding' }} >
                                    <span>Wedding</span>
                                </NavLink>
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