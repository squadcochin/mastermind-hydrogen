import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "style.css";

export default function Announcement() {
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };

    return (
      <div class="container-2xl">
        <div class="announcement-bar-bg">
        <Slider {...settings}>
            <div class="mx-auto">
                <h3 class="text-center">1</h3>
            </div>
            <div  class="mx-auto">
                <h3 class="text-center">2</h3>
            </div>
            <div  class="mx-auto">
                <h3 class="text-center">3</h3>
            </div>
    </Slider>
        </div>        
      </div>
    );
  }