import { Link, Image, Money, ProductOptionsProvider, useProductOptions, BuyNowButton, AddToCartButton } from "@shopify/hydrogen";

export default function ProductCard({ product }) {
  const { priceV2: price, compareAtPriceV2: compareAtPrice } =
    product.variants?.nodes[0] || {};

  const isDiscounted = compareAtPrice?.amount > price?.amount; 
  return (
    <section>
    <Link to={`/products/${product.handle}`}>
        <div className="grid m-2 gap-6 p-2 border border-stone-400">
          <div className="relative">
            {isDiscounted && (
              <label className="subpixel-antialiased absolute top-0 right-0 m-4 text-right text-notice text-red-600 text-xs">
                Sale
              </label>
            )}
            <Image
              className="aspect-[4/5]"
              data={product.variants.nodes[0].image}
              alt="Alt Tag"
            />
          </div>
          <div className="grid gap-1">
            <h3 className="max-w-prose text-copy w-full overflow-hidden whitespace-nowrap text-ellipsis ">
              {product.title}
            </h3>
              <div className="flex gap-4">
                <span className="max-w-prose whitespace-pre-wrap inherit text-copy flex gap-4">
                  <Money withoutTrailingZeros data={price} />
                  {isDiscounted && (
                    <Money
                      className="line-through opacity-50"
                      withoutTrailingZeros
                      data={compareAtPrice}
                    />
                  )}
                </span>
              </div>
              <div className="max-w-prose whitespace-pre-wrap inherit text-copy flex gap-4">
                {product.totalInventory} in Stock
              </div>
              <div className="grid gap-4">
                <div className="whitespace-pre-wrap max-w-pro se font-bold text-lead min-w-[4rem]">
                {(product.options).map((item) => (
                    item.values 
                ))}
                </div>
              </div>
          </div>  
        </div>
    </Link>
    
   
    </section>
  );
}

function ProductForm({ product }) {
  const { options, selectedVariant } = useProductOptions();

  return (
    <form className="grid gap-10">
      <div className="grid items-stretch gap-4">
        <PurchaseMarkup />
      </div>
    </form>
  );
}

function PurchaseMarkup() {
  const { selectedVariant } = useProductOptions();
  const isOutOfStock = !selectedVariant?.availableForSale || false;

  return (
    <>
      <AddToCartButton
        type="button"
        variantId={selectedVariant.id}
        quantity={1}
        accessibleAddingToCartLabel="Adding item to your cart"
        disabled={isOutOfStock}
      >
        <span className="bg-black text-white inline-block rounded-sm font-medium text-center py-3 px-6 max-w-xl leading-none w-full">
          {isOutOfStock ? "Sold out" : "Add to cart"}
        </span>
      </AddToCartButton>
      {isOutOfStock ? (
        <span className="text-black text-center py-3 px-6 border rounded-sm leading-none ">
          Available in 2-3 weeks
        </span>
      ) : (
        <BuyNowButton variantId={selectedVariant.id}>
          <span className="inline-block rounded-sm font-medium text-center py-3 px-6 max-w-xl leading-none border w-full">
            Buy it now
          </span>
        </BuyNowButton>
      )}
    </>
  );
}