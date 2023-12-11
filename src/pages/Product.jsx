import React from 'react';
import Cards from '../components/Cards';
import '../css/style.css';
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
function Product() {
  return (
    <>
  {/* inner page section */}
      <section class="inner_page_head">
         <div class="container_fluid">
            <div class="row">
               <div class="col-md-12">
                  <div class="full">
                     <h3>Product Grid</h3>
                  </div>
               </div>
            </div>
         </div>
      </section>
      {/* end inner page section  */}
      {/* product section  */}
      <section class="product_section layout_padding">
      <div class="container">
      <div class="heading_container heading_center">
               <h2>
                  Our <span>products</span>
               </h2>
            </div>
            <div className="row">
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
               <a href="">
               View All products
               </a>
            </div>
        </div>
        </section>

        <Footer />
    </>
  )
}

export default Product;