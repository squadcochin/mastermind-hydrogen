import ProductCard from "./ProductCard.client";
import { useState } from "react";

export default function Filter(props) {
    const [sortOrder, setSortOrder] = useState("title");
    const sortedProducts = props.name;
    
  if (sortOrder === "title") {
    sortedProducts.sort((a, b) => {
      const nameA = a.title.toUpperCase();
      const nameB = b.title.toUpperCase();
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      return 0;
    });
  }

  console.log("test");
  console.log(sortedProducts);
  if (sortOrder === "price") {
    sortedProducts.sort((a, b) => {
      const priceA = parseFloat(a.priceRange.minVariantPrice.amount);
      const priceB = parseFloat(b.priceRange.minVariantPrice.amount);
      if (priceA < priceB) {
        return -1;
      }
      if (priceA > priceB) {
        return 1;
      }
      return 0;
    });
  }
    return (
        <div>
            <div className="flex mb-5">
                <Sort sortOrder={sortOrder} setSortOrder={setSortOrder} />
            </div>
            <section className="w-full gap-4 md:gap-8 grid p-6 md:p-8 lg:p-12">
                <div className="grid-flow-row grid gap-2 gap-y-6 md:gap-4 lg:gap-6 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {sortedProducts
                    .map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>

                
            </section>
      </div>
    );
}

function Sort({ sortOrder, setSortOrder }) {
    const options = [
      { label: "Title", value: "title" },
      { label: "Price", value: "price" },
    ];
    return (
      <div className="mr-5">
        Sort:{" "}
        <select onChange={(e) => setSortOrder(e.target.value)}>
          {options.map((option) => {
            return <option value={option.value}>{option.label}</option>;
          })}
        </select>
      </div>
    );
  }