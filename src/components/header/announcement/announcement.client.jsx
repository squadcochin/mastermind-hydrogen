import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import './style.css';
import Menu from "../topnavigation/Menu.client";
import Bannerslider from "../../banner-slider/Bannerslider.client";

export default function Announcement() {

    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        autoplay:true,
        arrows:false,
        slidesToShow: 1,
        slidesToScroll: 1
      };

    return (
      <div className="container-2xl">
        <div className="announcement-bar-bg">
        <Slider {...settings}>
            <div className="mx-auto">
                <h3 className="text-center h-12 flex items-center justify-center text-white font-semibold">FREE SHIPPING* on  mjyuiy  orders over $35 (shipped within Canada, some exceptions apply)</h3>
            </div>
            <div  className="mx-auto">
                <h3 className="text-center h-12 flex items-center justify-center text-white font-semibold">CURBSIDE PICK-UP available in as little as one hour!</h3>
            </div>
            <div  className="mx-auto">
                <h3 className="text-center h-12 flex items-center justify-center text-white font-semibold">Get your gifts before the holidays!</h3>
            </div>

    </Slider>
    
        </div>   
        <Menu/> 
        <Bannerslider />   
      </div>

    );

  }