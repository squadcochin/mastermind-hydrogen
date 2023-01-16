import {
  gql,
  useShopQuery,
  useRouteParams,
  useServerAnalytics,
  ShopifyAnalyticsConstants,
  Seo,
} from "@shopify/hydrogen";
import { Announcement } from "../../components/index";
import Menu from "../../components/Global/menu.client";
import { Layout } from "../../components/DynamicProduct/Layout.server";
import Filter from "../../components/DynamicProduct/Filter.client";

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
      <Menu />
    
    <Layout>
      
      <div className="grid w-full gap-8 p-4 py-8 md:p-8 lg:p-12 justify-items-start">
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
      products(first: 10) {
        nodes {
          id
          title
          publishedAt
          handle
          priceRange {
            minVariantPrice {
              amount
            }
          }
          variants(first: 1) {
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
    }
  }
`;
