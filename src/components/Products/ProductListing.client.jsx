import Productcard from "./Productcard.client";
import Age from "./Age.client";
import Price from "./Price.client";
import './plp-style.css';


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
                    <div className="menu-filter">
                        <div class="accordion" id="accordionExample">
                            <div class="accordion-item bg-white  divide-gray-200 divide-y">
                                <h2 class="accordion-header mb-0" id="headingOne">
                                <button class="
                                    accordion-button
                                    relative
                                    flex
                                    items-center
                                    w-full
                                    py-4
                                    px-5
                                    text-base text-gray-800 text-left
                                    bg-white
                                    border-0
                                    rounded-none
                                    transition
                                    focus:outline-none
                                " type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true"
                                    aria-controls="collapseOne">
                                    AGE
                                </button>
                                </h2>
                                <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne"
                                data-bs-parent="#accordionExample">
                                <div class="accordion-body py-4 px-5">
                                    <Age/>
                                </div>
                                </div>
                            </div>
                            <div class="accordion-item bg-white  divide-gray-200 divide-y">
                                <h2 class="accordion-header mb-0" id="headingTwo">
                                <button class="
                                    accordion-button
                                    collapsed
                                    relative
                                    flex
                                    items-center
                                    w-full
                                    py-4
                                    px-5
                                    text-base text-gray-800 text-left
                                    bg-white
                                    border-0
                                    rounded-none
                                    transition
                                    focus:outline-none
                                " type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false"
                                    aria-controls="collapseTwo">
                                    Price
                                </button>
                                </h2>
                                <div id="collapseTwo" class="accordion-collapse collapse show" aria-labelledby="headingTwo"
                                data-bs-parent="#accordionExample">
                                <div class="accordion-body py-4 px-5">
                                    <Price />
                                </div>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
                <div className="basis-9/12">
                    {products()}
                </div>
            </div>  
         </div>
    );
}
