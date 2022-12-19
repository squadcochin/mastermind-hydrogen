import './style.css';

export default function Footer (){

  return(
     <div>
        <footer className="footer"> 
    <div className="container-footer footer-menu-wrap clearfix"> 
        <div className="common-row clearfix"> 
	        <div className="one-fifth column medium-down--one-whole  logo-grid" > 
	            <div className="text-align--center mobile-center"> 
				    <img  src="../../../assets/Logo.PNG" alt="Mastermind Toys" className="footer-logo lazyload appear"/>
				</div> 
				<div className="footer-social-icons text-align--center"> 
				    <ul className="social_icons">
						<li><a href="https://www.instagram.com/mastermindtoys" title="Mastermind Toys on Instagram" rel="me" target="_blank" className="icon-instagram"></a></li>
						<li><a href="https://www.tiktok.com/@mastermindtoys" title="Mastermind Toys on TikTok" rel="me" target="_blank" className="icon-tiktok"> </a></li> 
						<li><a href="https://www.facebook.com/MastermindToys" title="Mastermind Toys on Facebook" rel="me" target="_blank" className="icon-facebook"></a></li> 
						<li><a href="https://www.youtube.com/user/mastermindtoys" title="Mastermind Toys on YouTube" rel="me" target="_blank" className="icon-youtube"></a></li>
  
					</ul>
				</div>
			</div> 
		   
			<div className="one-fifth column medium-down--one-whole " > 
				<div className="footer_menu dynamic-js-menu"> 
					<div className="h6"><a href="/pages/help">Help</a> 
						<span className="right icon-down-arrow"></span>
					</div> 
					<div className="toggle_content">
						<ul> 
							<li className=""><a href="/apps/store/find-a-store">Store Locations</a></li> 
							<li className=""><a href="/pages/pick-up-in-store">Pick Up In-Store</a></li> 
							<li className=""><a href="https://www.mastermindtoys.com/pages/shipping-and-returns">Shipping and Returns</a></li> 
							<li className=""><a href="/pages/educators">Educators</a></li> 
							<li className=""><a href="https://www.mastermindtoys.com/pages/corporate-order-program">Corporate Orders</a></li> 
							<li className=""><a href="/pages/help">FAQs</a></li>
							<li className=""><a href="/pages/help#contact_us">Contact Us</a></li> 
							<li className=""><a href="/pages/toysubmissions">Toy Submissions</a></li> 
							<li className=""><a href="/pages/product-recalls">Product Recalls</a></li>
						</ul>
					</div>
				</div>
			</div> 
			<div className="one-fifth column medium-down--one-whole " > 
				<div className="footer_menu dynamic-js-menu">
					<div className="h6"><a href="/pages/about-us">About Us</a> 
						<span className="right icon-down-arrow"></span>
					</div> 
					<div className="toggle_content"> 
						<ul>
							<li className=""><a href="/pages/about-us#our_history">Our History</a></li> 
							<li className=""><a href="/pages/about-us#leadership_team">Leadership Team</a></li> 
							<li className=""><a href="/pages/about-us#media__media_inquiries">Media and Media Inquiries</a></li> 
							<li className=""><a href="/pages/about-us#careers">Careers</a></li> 
							<li className=""><a href="https://www.mastermindtoys.com/pages/store-events-2022">Store Events</a></li>
						</ul>
					</div>
				</div>
			</div> 
			<div className="one-fifth column medium-down--one-whole  join-perk-menu mob-visible" > 
				<div className="footer_menu join-perk-menu dynamic-js-menu"> 
					<div className="h6"><a href="/collections">Shop</a> 
						<span className="right icon-down-arrow"></span>
					</div> 
					<div className="toggle_content"> 
						<ul> 
							<li className=""><a href="#toys-menu">Toys</a></li>
							<li className=""><a href="#books-menu">Books</a></li> 
							<li className=""><a href="/collections/gift-finder">Gift Finder</a></li> 
							<li className=""><a href="https://www.mastermindtoys.com/pages/gift-cards">Gift Cards</a></li> 
							<li className=""><a href="https://www.mastermindtoys.com/pages/refer">Give $10, Get $10</a></li> 
							<li className=""><a href="/collections/bestsellers">Bestsellers</a></li> 
							<li className=""><a href="https://www.mastermindtoys.com/pages/swym-wishlist?originInstrument=12originInstrument=12">Wishlist</a></li> <li className=""><a href="https://www.mastermindtoys.com/blogs/news">The Playground</a></li>
						</ul>
					</div>
				</div>
			</div> 
			<div className="footer-social-icons mob-visible sixteen columns"> 
				<ul className="social_icons"> 
					<li><a href="https://www.instagram.com/mastermindtoys" title="Mastermind Toys on Instagram" rel="me" target="_blank" className="icon-instagram"></a></li> 
					<li><a href="https://www.tiktok.com/@mastermindtoys" title="Mastermind Toys on TikTok" rel="me" target="_blank" className="icon-tiktok"> </a></li> 
					<li><a href="https://www.facebook.com/MastermindToys" title="Mastermind Toys on Facebook" rel="me" target="_blank" className="icon-facebook"></a></li> 
					<li><a href="https://www.youtube.com/user/mastermindtoys" title="Mastermind Toys on YouTube" rel="me" target="_blank" className="icon-youtube"></a></li>
  
				</ul>
			</div> 
			<div className="one-fifth column medium-down--one-whole fifth-col " > 
				<div className="footer_menu-remove"> 
					<div className="newsletter_section"> 
						<h6>Learn the latest and greatest from Mastermind Toys</h6>
            
						<div className="toggle_content-remove"> 
							<div className="newsletter"> 
								<div className="newsletter_text">
									<input type="email" placeholder='Enter your email' ></input>
								</div>
                                <div className="newsletter_button">
									<button type="button">SIGN ME UP</button>
								</div>

							</div> 
							<div className="newsletter-info-text">By entering your email you consent to receive emails about special offers and upcoming promotions and have agreed to our <a href="/pages/terms-and-conditions">Terms of Service</a> and <a href="/pages/privacy-policy">Privacy Policy.</a></div>
						</div>
					</div>
				</div>
			</div>
		</div> 
		<div className="sixteen columns row footer_credits"> 
			<div className="footer-end"> 
				<div className="credits">
					Copyright &copy; 2022 <a href="/" title="">Mastermind Toys</a>
				</div> 
			</div>
		</div>
	</div>
</footer>
     </div>

  );
}