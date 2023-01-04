import Productcard from "./Productcard.client";
import Filter from "./Filter.client";
export default function ProductListing() {
    const products = () => {
        const rows = [];
        for (let i = 0; i < 10; i++) {
            rows.push(<Productcard/>)
        }
        return (
            <div className="flex flex-wrap">
                {rows}
            </div>
        );
      };
    return(
        <div className="container mx-auto">
            <div className="flex">
                <div className="basis-3/12">
                    <div className='product-title font-bold text-left text-xl pb-5'>
                        AGE
                    </div>
                    <Filter/>
                </div>
                <div className="basis-9/12">
                    {products()}
                </div>
            </div>  
         </div>
    );
}
