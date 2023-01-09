import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import './style.css';


export function Announcement() {
  const content = [ "11 FREE SHIPPING* 123 on orders over $35 (shipped within Canada, some exceptions apply)","CURBSIDE PICK-UP available in as little as one hour!",
  "Get your gifts before the holidays!"];

    var settings = {
        dots: false,
        infinite: true,
        speed: 5000,
        autoplay:true,
        arrows:false,
        slidesToShow: 1,
        slidesToScroll: 1
      };

    return (
      
      <div className="container-2xl">
        <div className="announcement-bar-bg">
        <Slider {...settings}>
          {content.map(item => (  
            <div className="mx-auto">
              <h3 className="text-center h-12 flex items-center justify-center text-white font-semibold">
                {item}
              </h3>
            </div> 
          ))}  
      </Slider>
        </div>        

      </div>

    );

  }