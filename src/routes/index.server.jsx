//import Announcement from "../components/header/announcement/announcement.client";
//import Footer from "../components/Footer/Footer.client";
import GiftCards from "../components/Gift-cards/Giftcards.client";
import Trends from "../components/Trends/Trends.client";
import Shopcategory from "../components/Shop-category/Shopcategory.client";
import Bookbyage from "../components/Book_by_age/bookbyage.client";
import Bannerslider from "../components/banner-slider/Bannerslider.client";
import { Announcement, Footer } from "../components";
import { Productslider } from "../components/Global/Productslider.client";
import Menudisplay from "../components/Global/menudisplay.server";

export default function Home() {
  return (
    <>
      <Announcement />
      <Menudisplay/>
      <Bannerslider />
      <Shopcategory />
      <Productslider />
      <Bookbyage />
      <Trends />
      <GiftCards />
      <Footer />
    </>
    
  );
}
