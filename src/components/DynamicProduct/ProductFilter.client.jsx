import ProductCard from "./ProductCard.client";
import { useState } from "react";

export default function ProductFilter(props) {
    const [sortOrder, setSortOrder] = useState("title");
    const [filters, setFilters] = useState({});


    const activeFilters = Object.keys(filters).filter((key) => filters[key]);    
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
  if (sortOrder === "stock") {
    sortedProducts.sort((a, b) => {
      const priceA = parseFloat(a.totalInventory);
      const priceB = parseFloat(b.totalInventory);
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
            <div className="w-full gap-4 md:gap-8 grid md:px-8">
                <Sort sortOrder={sortOrder} setSortOrder={setSortOrder} />
                {/* <Filter filters={filters} setFilters={setFilters} /> */}
            </div>
            <section className="w-full gap-4 md:gap-8 grid p-6 md:p-8">
                <div className="grid-flow-row grid gap-2 gap-y-6 md:gap-4 lg:gap-6 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {sortedProducts
                 .filter((product) => {
                  return activeFilters.every((filter) => product[filter]);
                })
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
      { label: "Title (A to Z)", value: "title" },
      { label: "Price (low to high)", value: "price" },
      { label: "Stock (low to high)", value: "stock" },
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

function Filter({ filters, setFilters }) {
  const handleFilterClick = (e) => {
    const newFilters = { ...filters };
    
    newFilters[e.target.value] = e.target.checked;
    setFilters(newFilters);
  };

  // See /collections/[handle].server.jsx for
  // madeInCanada field in query

  return (
    <p>
      Filter:{" "}
      <label className="mr-1 cursor-pointer">
        <input
          type="checkbox"
          value="available"
          onClick={handleFilterClick}
        />{" "}
        Available
      </label>
      <label className="mr-1 cursor-pointer">
        <input
          type="checkbox"
          value="sustainable"
          onClick={handleFilterClick}
        />{" "}
        Out Of Stock
      </label>
    </p>
  );
}
