import './trends_style.css'

export default function trends(){

    return(
        <div>
            <div className="Trends logo-bar-section container"> 
	            <div className="section clearfix">
                    <div className="header-bg"> 
			            <h1 className="title-typ1 center">New & Trending</h1>
		            </div>
                    <div className='logo-bar'> 
                        <div className="logo-bar__item feature-section"> 
                            <a href="https://www.instagram.com/mastermindtoys" className="logo-bar__link">
                                <div className="image-element__wrap" > 
                                    <img alt="Digital Gift Card - Building Bricks" src="https://cdn.shopify.com/s/files/1/0356/3539/6741/files/113022-Trending-Toys-LegoLighthouse_69d7258b-cf12-4025-9618-cf6f1659a614_2000x.jpg" />
                                </div>
                            </a>	
                        </div>
                        <div className="logo-bar__item feature-section"> 
                            <a href="https://www.instagram.com/mastermindtoys" className="logo-bar__link">
                                <div className="image-element__wrap" > 
                                    <img alt="Digital Gift Card - Building Bricks" src="https://cdn.shopify.com/s/files/1/0356/3539/6741/files/111822-Play-To-Give-Hero_2000x.png" />
                                </div>
                            </a>	
                        </div>
                        <div className="logo-bar__item feature-section"> 
                            <a href="https://www.instagram.com/mastermindtoys" className="logo-bar__link">
                                <div className="image-element__wrap" > 
                                    <img alt="Digital Gift Card - Building Bricks" src="https://cdn.shopify.com/s/files/1/0356/3539/6741/files/112422-Pokemon-Web-Heroes-Tempest-Build-_-Battle-Stadium_2000x.jpg" />
                                </div>
                            </a>	
                        </div>
                        
                    </div>
	            </div>
            </div>
        </div>
    );
}