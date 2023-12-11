import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faTruck } from '@fortawesome/free-solid-svg-icons';
import {faShopify} from "@fortawesome/free-brands-svg-icons"
import {faMedal} from "@fortawesome/free-solid-svg-icons"
import ArrivalBg from '../images/arrival-bg.png';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
function About() {
  return (
    <>
   {/* inner page section  */}
      <section class="inner_page_head">
         <div class="container_fuild">
            <div class="row">
               <div class="col-md-12">
                  <div class="full">
                     <h3>About us</h3>
                  </div>
               </div>
            </div>
         </div>
      </section>
      {/* end inner page section  */}

      <section class="why_section layout_padding">
      <div class="container">
      <div class="heading_container heading_center">
               <h2>
                  Why Shop With Us
               </h2>
            </div>
            <div className="row">
               <div className="col-md-4">
                  <div className="box ">
                     <div className="img-box">
                     <FontAwesomeIcon icon={faTruck} bounce />
                     </div>
                     <div className="detail-box">
                        <h5>
                           Fast Delivery
                        </h5>
                        <p>
                           variations of passages of Lorem Ipsum available
                        </p>
                     </div>
                  </div>
               </div>
               <div className="col-md-4">
                  <div className="box ">
                     <div className="img-box">
                     <FontAwesomeIcon icon={faShopify} spinPulse />
                     </div>
                     <div className="detail-box">
                        <h5>
                           Free Shiping
                        </h5>
                        <p>
                           variations of passages of Lorem Ipsum available
                        </p>
                     </div>
                  </div>
               </div>
               <div className="col-md-4">
                  <div className="box ">
                     <div className="img-box">
                     <FontAwesomeIcon icon={faMedal} beatFade />
                     </div>
                     <div className="detail-box">
                        <h5>
                           Best Quality
                        </h5>
                        <p>
                           variations of passages of Lorem Ipsum available
                        </p>
                     </div>
                  </div>
               </div>
            </div>
      </div>
      </section>

      <section className="arrival_section">
         <div className="container">
            <div className="box">
               <div className="arrival_bg_box">
                  <img src={ArrivalBg} alt={"arrive"} />
               </div>
               <div className="row">
                  <div className="col-md-6 ml-auto">
                     <div className="heading_container remove_line_bt">
                        <h2>
                           #NewArrivals
                        </h2>
                     </div>
                     <p style={{ marginTop: "-23rem", marginBottom: "0.2rem", marginLeft: "39.5rem", position: "absolute", padding: "5rem"}}>
                        Vitae fugiat laboriosam officia perferendis provident aliquid voluptatibus dolorem, fugit ullam sit earum id eaque nisi hic? Tenetur commodi, nisi rem vel, ea eaque ab ipsa, autem similique ex unde!
                     </p>
                     <Link to="">
                     Shop Now
                     </Link>
                  </div>
               </div>
            </div>
         </div>
      </section>

      <Footer />
    </>
  )
}

export default About;