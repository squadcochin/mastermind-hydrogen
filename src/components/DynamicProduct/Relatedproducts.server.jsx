import {
    gql,
    useShopQuery,
    useServerAnalytics,
    useRouteParams,
    ShopifyAnalyticsConstants,
    Seo,
  } from "@shopify/hydrogen";

import Relatedpro from "./Relatedproduct.client";

export default function RelatedProducts(props) {
    const {data} = useShopQuery({
        query: PRODUCT_QUERY,
        variables: {
            productId: props.productId,
        },
      });
      console.log("data.productRecommendations");
      console.log(data.productRecommendations);
    return (
        <section>
          <Relatedpro name={data.productRecommendations}/>
        </section>
      );
    }

const PRODUCT_QUERY = gql`
    query productRecommendations($productId: ID!) {
      productRecommendations(productId: $productId ) {
          id
          title
          totalInventory
          publishedAt
          vendor
          handle
          options{
            name
            values
          }
          priceRange {
            minVariantPrice {
              amount
            }
          }
          variants(first: 10) {
            nodes {
              id
              image {
                url
                altText
                width
                height
              }
              priceV2 {
                amount
                currencyCode
              }
              compareAtPriceV2 {
                amount
                currencyCode
              }
            }
        }
      }
    }
  `;