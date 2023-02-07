import {
    gql,
    useShopQuery,
    useServerAnalytics,
    useRouteParams,
    ShopifyAnalyticsConstants,
    Seo,
  } from "@shopify/hydrogen";
import { Announcement } from "../../components/index";
import Menudisplay from "../../components/Global/menudisplay.server";
import { Layout } from "../../components/DynamicProduct/Layout.server";
import { Footer } from "../../components/index";
import ProductDetails from "../../components/DynamicProduct/ProductDetails.client";
import RelatedProduct from "../../components/DynamicProduct/Relatedproducts.server";
  
  export default function Product({ params }) {
    const { handle } = useRouteParams();
  
    const {
      data: { product },
    } = useShopQuery({
      query: PRODUCT_QUERY,
      variables: {
        handle,
      },
    });

    const pid = product.id;

    useServerAnalytics({
      shopify: {
        pageType: ShopifyAnalyticsConstants.pageType.product,
        resourceId: product.id,
      },
    });
  
    return (
      <Layout>
        <Announcement />
        <Menudisplay/>
        <ProductDetails product={product} />
        <RelatedProduct productId={pid}/>
        <Footer />
      </Layout>
    );
  }
  const PRODUCT_QUERY = gql`
    fragment MediaFields on Media {
      mediaContentType
      alt
      previewImage {
        url
      }
      ... on MediaImage {
        id
        image {
          url
          width
          height
        }
      }
      ... on Video {
        id
        sources {
          mimeType
          url
        }
      }
      ... on Model3d {
        id
        sources {
          mimeType
          url
        }
      }
      ... on ExternalVideo {
        id
        embedUrl
        host
      }
    }
    query Product($handle: String!) {
      product(handle: $handle) {
        id
        title
        vendor
        options{
            name
            values
            }
        descriptionHtml
        media(first: 7) {
          nodes {
            ...MediaFields
          }
        }
        variants(first: 100) {
          nodes {
            id
            availableForSale
            compareAtPriceV2 {
              amount
              currencyCode
            }
            selectedOptions {
              name
              value
            }
            image {
              id
              url
              altText
              width
              height
            }
            priceV2 {
              amount
              currencyCode
            }
            sku
            title            
            unitPrice {
              amount
              currencyCode
            }
          }
        }
        seo {
          description
          title
        }
      }
    }
  `;
   