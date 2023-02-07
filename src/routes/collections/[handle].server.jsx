import {
  gql,
  useShopQuery,
  useRouteParams,
  useServerAnalytics,
  ShopifyAnalyticsConstants,
  Seo,
} from "@shopify/hydrogen";
import { Announcement } from "../../components/index";
import { Layout } from "../../components/DynamicProduct/Layout.server";
import Filter from "../../components/DynamicProduct/ProductFilter.client";
import Menudisplay from "../../components/Global/menudisplay.server";

export default function Collection() {

  const { handle } = useRouteParams();

  const {
    data: { collection },
  } = useShopQuery({
    query: QUERY,
    variables: {
      handle,
    },
  });
  useServerAnalytics({
    shopify: {
      pageType: ShopifyAnalyticsConstants.pageType.collection,
      resourceId: collection.id,
    },
    
  });
  return (
    <div>
      <Announcement />
      <Menudisplay />
    
    <Layout>
      
      <div className="grid w-full gap-8 p-4 py-8 md:p-8 justify-items-start">
        <h1 className="text-4xl whitespace-pre-wrap font-bold inline-block">
          {collection.title}
        </h1>
      </div>
      <div>
          <Filter name={collection.products.nodes}/>
      </div>
    </Layout>
    </div>
  );
}

const QUERY = gql`
  query CollectionDetails($handle: String!) {
    collection(handle: $handle) {
      id
      title
      description
      seo {
        description
        title
      }
      image {
        id
        url
        width
        height
        altText
      }
      products(first: 100) {
        nodes {
          id
          title
          totalInventory
          available:metafield(namespace:"custom",key:"availability"){
            value
            updatedAt
          }
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
              selectedOptions{
                name
                value
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
    }
  }
`;
