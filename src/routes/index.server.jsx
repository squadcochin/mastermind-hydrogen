//import Announcement from "../components/header/announcement/announcement.client";
//import Footer from "../components/Footer/Footer.client";
import GiftCards from "../components/Gift-cards/Giftcards.client";
import Trends from "../components/Trends/Trends.client";
import Shopcategory from "../components/Shop-category/Shopcategory.client";
import Bookbyage from "../components/Book_by_age/bookbyage.client";
 
import { Announcement, Footer } from "../components";

export default function Home() {
  return (
    <>
      <Announcement />
      <Shopcategory />
      <Bookbyage />
      <Trends />
      <GiftCards />
      <Footer />
    </>
    
  );
}
