import ProductCard from "./ProductCard.client";

export default function RelatedProductArray(props) {
    const sortedProducts = props.name; 
    return (
        <div className="w-full overflow-x-hidden gap-4 md:gap-8 grid px-6 md:px-8 lg:px-12">
            <div className="grid gap-1">
                <h3 className="text-4xl font-bold leading-10 whitespace-normal">
                   Related Products
                </h3>
          </div>
            <section className="w-full grid">
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

