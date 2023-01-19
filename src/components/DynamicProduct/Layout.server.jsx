import { useShopQuery, CacheLong, gql, useUrl, Link } from "@shopify/hydrogen";

/**
 * A server component that defines a structure and organization of a page that can be used in different parts of the Hydrogen app
*/
export function Layout({ children }) {
  const { pathname } = useUrl();
  const isHome = pathname === "/";

  const {
    data: { shop },
  } = useShopQuery({
    query: SHOP_QUERY,
    cache: CacheLong(),
    preload: true,
  });

  return (
    <>
      <div className="flex flex-col min-h-screen antialiased">
        <main role="main" id="mainContent" className="flex-grow">
          {children}
        </main>
      </div>
    </>
  );
}

const SHOP_QUERY = gql`
  query ShopInfo {
    shop {
      name
      description
    }
  }
`;
