import { Announcement } from "../../components/index";
import Menu from "../../components/Global/Menu.client";
import ProductListing from "../../components/Products/ProductListing.client";

export default function collections() {
    return(
        <div>
            <Announcement />
            <Menu />
            <ProductListing />
        </div>
    );
}