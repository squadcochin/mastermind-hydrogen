import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Productcard from "../Products/Productcard.client";

export function Productslider() {
    var settings = {
        dots: false,
        infinite: true,
        speed: 5000,
        autoplay:false,
        slidesToShow: 3,
        slidesToScroll: 1
      };
      return (
      
        <div className="container product-slider mx-auto">
          <Slider {...settings}>
            <Productcard /> 
            <Productcard />
            <Productcard />
            <Productcard />           
          </Slider>
        </div>
  
      );
  
    }