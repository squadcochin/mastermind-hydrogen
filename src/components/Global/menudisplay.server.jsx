  import {
    gql,
    useShopQuery,
  } from "@shopify/hydrogen";

  import Menu from "./menu.client";
  import { parseMenu } from "../../libs/utils";

  export default function menudisplay() {
    
    
    return (
      <div>
        <HeaderWithMenu />
      </div>
    );
  }

  function HeaderWithMenu() {
    const {headerMenu} = useLayoutQuery();
    return <Menu menu={headerMenu} />;
  }
  function useLayoutQuery() {
    const {data} = useShopQuery({
      query: QUERY      
    });
  
    const customPrefixes = {BLOG: '', CATALOG: 'products'};
  
    const headerMenu = data?.headerMenu
      ? parseMenu(data.headerMenu, customPrefixes)
      : undefined;
    return {headerMenu};
  }

  const QUERY = gql`{ 
    headerMenu: menu(handle:"main-menu"){
      items{
        title
        type
        url
      }
    }
  
  }
`; 
