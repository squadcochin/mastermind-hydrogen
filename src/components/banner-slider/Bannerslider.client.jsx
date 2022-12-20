import './style.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export default function Bannerslider() {
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };

    return (
      <div className="container-2xl banner-container">
        <Slider {...settings}>
            <div className="mx-auto">
                <img src="src/assets/slider1.jpg" alt="" class="self-center" />
            </div>
            <div  className="mx-auto">
                <img src="src/assets/slider2.jpg" alt="" class="self-center" />
            </div>
        </Slider>  
      </div>

    );

  }