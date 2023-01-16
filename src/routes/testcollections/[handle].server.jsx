import { Announcement } from "../../components/index";
import ProductListing from "../../components/Products/ProductListing.client";
import Menu from "../../components/Global/menu.client";

export default function Collection() {
  return (
    <div>
    <Announcement />
    <Menu />
    <ProductListing />
    </div>
  );
}