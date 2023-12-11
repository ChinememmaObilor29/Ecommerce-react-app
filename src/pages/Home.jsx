// import React, { useEffect } from 'react';
import '../css/style.css';
import { Link } from 'react-router-dom';
import ArrivalBg from '../images/arrival-bg.png';
import Cards from '../components/Cards';
import P1 from '../images/p1.png';
import P2 from '../images/p2.png';
import P3 from '../images/p3.png';
import P4 from '../images/p4.png';
import P5 from '../images/p5.png';
import P6 from '../images/p6.png';
import P7 from '../images/p7.png';
import P8 from '../images/p8.png';
import P9 from '../images/p9.png';
import P10 from '../images/p10.png';
import P11 from '../images/p11.png';
import P12 from '../images/p12.png';
import Footer from '../components/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faTruck } from '@fortawesome/free-solid-svg-icons';
import {faShopify} from "@fortawesome/free-brands-svg-icons"
import {faMedal} from "@fortawesome/free-solid-svg-icons";
import Gallery from '../components/Gallery';


function Home() {
  return (
    <>
    <Gallery />
      <section className="why_section layout_padding">
         <div className="container">
            <div className="heading_container heading_center">
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
      {/* end why section  */}
      {/* end why section  */}
      
       {/* arrival section  */}
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
      {/* end arrival section  */}

      <section class="product_section layout_padding">
      <div class="container">
      <div class="heading_container heading_center">
               <h2>
                  Our <span>products</span>
               </h2>
            </div>
            <div class="row">
          <Cards 
          img={P1}
          sex="Men's Shirt"
          price="$75"
           />
          <Cards 
          img={P2}
          sex="Men's Shirt"
          price="$80" />

          <Cards 
          img={P3}
          sex="Women's Dress"
          price="$68" />

          <Cards 
          img={P4}
          sex="Women's Dress"
          price="$70" />

          <Cards 
          img={P5}
          sex="Women's Dress"
          price="$75" />

          <Cards 
          img={P6} 
          sex="Women's Dress"
          price="$58"/>

          <Cards 
          img={P7}
          sex="Women's Dress"
          price="$80" />

          <Cards 
          img={P8} 
          sex="Men's Shirt"
          price="$65"/>

          <Cards 
          img={P9} 
          sex="Men's Shirt"
          price="$65"/>
          <Cards 
          img={P10} 
          sex="Men's Shirt"
          price="$65"/>
          <Cards 
          img={P11}
          sex="Men's Shirt"
          price="$65" />
          <Cards 
          img={P12}
          sex="Women's Dress"
          price="$65" />

              </div>
              <div class="btn-box">
               <Link to="">
               View All products
               </Link>
            </div>
        </div>
        </section>
        {/* end product section  */}

        {/* subscribe section  */}
      <section class="subscribe_section">
         <div class="container-fluid">
            <div class="box">
               <div class="row">
                  <div class="col-md-6 offset-md-3 subscribe_details">
                     <div class="subscribe_form ">
                        <div class="heading_container heading_center">
                           <h3>Subscribe To Get Discount Offers</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
                        <form action="">
                           <input type="email" placeholder="Enter your email" />
                           <button>
                           subscribe
                           </button>
                        </form>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
       {/* end subscribe section  */}

       <Footer />
    </>
  );
}

export default Home;
