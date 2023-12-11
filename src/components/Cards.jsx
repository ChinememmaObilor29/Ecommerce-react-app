import React from 'react';
import '../css/style.css';
import { Link } from 'react-router-dom';


function Cards(props) {
  return (
    <>
  {/* product section  */}
  <div class="col-sm-6 col-md-4 col-lg-4">
                  <div class="box">
                     <div class="option_container">
                        <div class="options">
                           <Link to="" class="option1">
                           Add To Cart
                           </Link>
                           <Link to="" class="option2">
                           Buy Now
                           </Link>
                        </div>
                     </div>
                     <div class="img-box">
                        <img src={props.img} />
                     </div>
                     <div class="detail-box">
                        <h5>
                          {props.sex}
                        </h5>
                        <h6>
                         {props.price}
                        </h6>
                     </div>
                  </div>
               </div>
    </>
  )
}

export default Cards;