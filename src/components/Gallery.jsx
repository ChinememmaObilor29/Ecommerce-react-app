import React from 'react';
import { MDBCarousel, MDBCarouselItem, MDBCarouselCaption } from 'mdb-react-ui-kit';
import SliderBg from '../images/slider-bg.jpg';
import { Link } from 'react-router-dom';
import { useState } from 'react';

function Gallery() {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const styles = {
    display: "inline-block",
    padding: "12px 45px",
    backgroundColor: isHovered ? "transparent" : "#f7444e",
    border: "1px solid #f7444e",
    color: isHovered ? "#f7444e" : "#ffffff",
    borderRadius: 0,
    WebkitTransition: "all 0.3s",
    transition: "all 0.3s",
    marginTop: "10px",
    fontWeight: 700,
  };

  return (
    <MDBCarousel showIndicators showControls fade>
      <MDBCarouselItem itemId={1}>
      <img src={SliderBg} alt={"slide"}  className='d-block w-100'/>
        <MDBCarouselCaption>
          <div className="carousel-text" style={{marginRight:"50rem", marginBottom: "30rem"}}>
          <h1 style={{ fontSize: "4.5rem", fontWeight: "bold", marginBottom: "15px", color: "#002c3e", LineHeight: "70px"}}>
            <span style={{ color: "#f7444e"}}>
                Sale 20% Off
               </span>
                <br />
               On Everything
               </h1>
          <p style={{ fontSize: "16px", marginTop: "20px", color: "#002c3e", marginBottom: "1.5rem"}}>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          <div className="btn-box">
          <Link
      to=""
      className="btn1"
      style={styles}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      Shop Now
    </Link>
          </div>
          </div>
          
        </MDBCarouselCaption>
      </MDBCarouselItem>

      <MDBCarouselItem itemId={2}>
      <img src={SliderBg} alt={"slide"}  className='d-block w-100'/>
        <MDBCarouselCaption>
        <div className="carousel-text" style={{marginRight:"50rem", marginBottom: "30rem"}}>
          <h1 style={{ fontSize: "4.5rem", fontWeight: "bold", marginBottom: "15px", color: "#002c3e", LineHeight: "70px"}}>
            <span style={{ color: "#f7444e"}}>
                Sale 20% Off
               </span>
                <br />
               On Everything
               </h1>
          <p style={{ fontSize: "16px", marginTop: "20px", color: "#002c3e", marginBottom: "1.5rem"}}>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          <div className="btn-box">
          <Link
      to=""
      className="btn1"
      style={styles}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      Shop Now
    </Link>
          </div>
          </div>
          
        </MDBCarouselCaption>
      </MDBCarouselItem>

      <MDBCarouselItem itemId={3}>
      <img src={SliderBg} alt={"slide"}  className='d-block w-100'/>
        <MDBCarouselCaption>
        <div className="carousel-text" style={{marginRight:"50rem", marginBottom: "30rem"}}>
          <h1 style={{ fontSize: "4.5rem", fontWeight: "bold", marginBottom: "15px", color: "#002c3e", LineHeight: "70px"}}>
            <span style={{ color: "#f7444e"}}>
                Sale 20% Off
               </span>
                <br />
               On Everything
               </h1>
          <p style={{ fontSize: "16px", marginTop: "20px", color: "#002c3e", marginBottom: "1.5rem"}}>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          <div className="btn-box">
          <Link
      to=""
      className="btn1"
      style={styles}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      Shop Now
    </Link>
          </div>
          </div>
        </MDBCarouselCaption>
      </MDBCarouselItem>
    </MDBCarousel>
  );
}

export default Gallery;