import './style.css';
import logo from '../../assets/header-logo.png'

export default function Menu() {
    return (
       <header  className="home-head top-navigation">
          <div  className="sm:pl-12 pl-3">
             <div  className="top_bar flex items-center  sm:justify-between justify-start" >
                <div  className="main_nav_wrapper1 left basis-2/5">
                   <div  className="main_nav" id="main_nav">
                      <div  className="nav1 ">
                         <ul  className="menu align_left sm:flex-row flex flex-col">
                            <li className="menu-item px-3.5">
                              <a href="#" className=" font-bold uppercase text-lg text-white">TOYS</a>
                              <div className="dropdown_column__menu">
                                 <ul className="dropdown_title">
                                    <li> <a>SHOP AGE</a></li>
                                 </ul>
                                 <ul>
                                    <li> <a href="/collections/baby-0-2">Baby 0 - 2</a></li>
                                    <li> <a href="/collections/age-3">Age 3</a></li>
                                    <li> <a href="/collections/age-4">Age 4</a></li>
                                    <li> <a href="/collections/age-5">Age 5</a></li>
                                    <li> <a href="/collections/age-6">Age 6</a></li>
                                    <li> <a href="/collections/age-7">Age 7</a></li>
                                    <li> <a href="/collections/age-8">Age 8</a></li>
                                    <li> <a href="/collections/age-9">Age 9</a></li>
                                    <li> <a href="/collections/age-10">Age 10</a></li>
                                    <li> <a href="/collections/age-11">Age 11+</a></li>
                                 </ul>
                              </div>
                            
                            </li>
                            <li className="px-3.5"><a href="testcollections/books"  className="font-bold uppercase text-lg text-white">Books</a></li>
                            <li className="px-3.5"><a href="collections/history-books"  className="font-bold uppercase text-lg text-white">History Books</a></li>
                         </ul>
                      </div>
                   </div>
                   <div className='menu-icon sm:hidden block'>
                        <span></span> 
                        <span></span> 
                        <span></span>
                   </div>
                </div>
                <div  className="logo logo--image"> 
                  <a href="#" title="Mastermind Toys"> <img src={logo}  className="secondary_logo lazyload" alt="Mastermind Toys"/></a>
                </div>
                <div  className="basis-2/5 items-center hidden sm:flex"> 
                     <div className="search_container px-5" data-autocomplete-false="" >
                        <form action="" className="search_form h-10" method=""> 
                           <span className="icon-search">
                              <svg width="27" height="27" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                 <path d="M13.285 24.97c2.32.002 4.587-.69 6.511-1.988l6.759 6.758a2.251 2.251 0 1 0 3.185-3.185l-6.757-6.759a11.682 11.682 0 1 0-9.698 5.174zm0-20.666a8.975 8.975 0 0 1 6.351 2.63 8.985 8.985 0 0 1 0 12.702 8.985 8.985 0 0 1-12.703 0 8.98 8.98 0 0 1 .003-12.7 8.991 8.991 0 0 1 6.349-2.632z" fill="#1D4A6E"/>
                              </svg>
                           </span>
                           <input type="text" placeholder="What can we help you find?" value=""/>
                        </form>
                     </div>
                     <a href="" className="gift-finder-btn"> 
                        <svg width="30" height="29" viewBox="0 0 30 29" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M0 14.6339H1.93972V29H28.0603V14.6339H30V6.20584H24.4853C24.7898 5.58779 24.9457 4.90542 24.9428 4.21405C24.9636 1.92295 23.1471 0.0417574 20.8733 0C17.8702 0 16.0449 2.25965 15.0187 4.21405C13.9924 2.25965 12.1284 0 9.16412 0C6.89023 0.0419029 5.07374 1.92295 5.09465 4.21405C5.09168 4.90542 5.24763 5.58779 5.55209 6.20584H0.000151931L0 14.6339ZM4.22118 14.6339H13.8779V26.7014H4.25806L4.22118 14.6339ZM25.7791 26.7014H16.1592V14.6339H25.7791V26.7014ZM27.7188 12.3354H16.1595V8.50441H27.7561L27.7188 12.3354ZM20.8749 2.25957L20.8734 2.26107C21.8879 2.30147 22.6824 3.15295 22.6616 4.17654C22.7047 5.2196 21.9086 6.107 20.8734 6.16833H16.6154C17.2615 4.63595 18.6308 2.26115 20.8734 2.26115L20.8749 2.25957ZM7.33843 4.17505V4.17654C7.31615 3.15295 8.11073 2.30148 9.12515 2.26107C11.4065 2.26107 12.7758 4.63595 13.422 6.20733L9.16393 6.20584C8.12871 6.14448 7.33265 5.25856 7.37573 4.21405L7.33843 4.17505ZM2.28115 8.50441H13.8778V12.3354H2.28115V8.50441Z" fill="white"></path>
                     </svg>
                     </a>
                     <a href="" className="px-5"> 
                        <svg width="29" height="26" viewBox="0 0 29 26" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M26.69 2.371C25.138.843 23.13 0 21.035 0 18.532 0 16.18 1.198 14.5 3.268 12.823 1.198 10.468 0 7.965 0 5.872 0 3.862.842 2.31 2.371c-3.012 2.964-3.923 8.485 2.548 15.094 1.336 1.363 2.558 2.357 3.742 3.319 1.649 1.34 3.208 2.61 5.106 4.85a1.045 1.045 0 0 0 1.59 0c1.899-2.24 3.457-3.507 5.107-4.85 1.184-.961 2.404-1.956 3.742-3.32 6.47-6.607 5.558-12.13 2.547-15.093zm-4.04 13.68c-1.253 1.281-2.378 2.195-3.568 3.164-1.43 1.163-2.9 2.357-4.582 4.209-1.682-1.85-3.153-3.046-4.582-4.209-1.19-.968-2.315-1.883-3.569-3.163C-.485 9.07 2.651 4.919 3.774 3.813 4.937 2.67 6.426 2.04 7.966 2.04c2.271 0 4.326 1.293 5.635 3.548.369.635 1.43.635 1.798 0 1.31-2.255 3.364-3.548 5.635-3.548 1.54 0 3.028.629 4.192 1.773 1.121 1.106 4.259 5.257-2.576 12.239z" fill="#fff"></path>
                     </svg>
                     </a>
                     <a href="" className=""> 
                        <svg width="28" height="26" viewBox="0 0 28 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                           <path d="M14 0C9.993 0 6.72 3.226 6.72 7.174c0 3.95 3.273 7.175 7.28 7.175 4.006 0 7.28-3.226 7.28-7.175C21.28 3.226 18.006 0 14 0zm0 2.208c2.797 0 5.04 2.21 5.04 4.966 0 2.757-2.243 4.967-5.04 4.967s-5.04-2.21-5.04-4.967c0-2.756 2.243-4.966 5.04-4.966zm0 12.252c-7.797 0-14 6.992-14 15.436C0 30.506.501 31 1.12 31h25.76c.619 0 1.12-.494 1.12-1.104 0-8.444-6.203-15.436-14-15.436zm0 2.207c6.1 0 11.152 5.278 11.66 12.125H2.34C2.846 21.945 7.9 16.667 14 16.667z" fill="#fff"/>
                        </svg>
                     </a>
                     <a href="" className="cart-container">
                        <svg width="28" height="30" viewBox="0 0 28 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                           <path d="M1 11.77v21.538h26V11.769H1z" stroke="#fff" stroke-width="2"/>
                           <path d="M7.537 11.77V7.461S7.537 1 14 1c6.461 0 6.461 6.462 6.461 6.462v4.307M7.537 18.23v2.155s0 6.461 6.462 6.461c6.461 0 6.461-6.461 6.461-6.461V18.23" stroke="#fff" stroke-width="2"/>
                        </svg>
                     </a>
                </div>
             </div>
          </div>
       </header>
    );
    }

function show(){
   document.getElementById("main_nav").style.display = "block";
}    