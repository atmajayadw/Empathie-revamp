import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import {Img_Hero_Portfolio} from "../../assets/img/img.js";

function Client_list() {
    return (
        <>
            <section id="client-list">
                <div className="container">
                    <h1 className="client-type">Engagement</h1>

                    <div className="clients">
                        <div className="client">
                            <img src={Img_Hero_Portfolio} alt="" />
                            <h3>Jennie & Lisa</h3>
                        </div>

                        <div className="client">
                            <img src={Img_Hero_Portfolio} alt="" />
                            <h3>Jennie & Lisa</h3>
                        </div>

                        <div className="client">
                            <img src={Img_Hero_Portfolio} alt="" />
                            <h3>Jennie & Lisa</h3>
                        </div>

                        <div className="client">
                            <img src={Img_Hero_Portfolio} alt="" />
                            <h3>Jennie & Lisa</h3>
                        </div>

                        <div className="client">
                            <img src={Img_Hero_Portfolio} alt="" />
                            <h3>Jennie & Lisa</h3>
                        </div>

                        <div className="client">
                            <img src={Img_Hero_Portfolio} alt="" />
                            <h3>Jennie & Lisa</h3>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )

}
  
export default Client_list