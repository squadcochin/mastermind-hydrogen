import './productcard-style.css';
import image from '../../assets/product1.jpg'

export default function Productcard() {
    return (
        <div className="product-card">
            <div className="sale-container">
                <div className="text-white bg-cyan-400 rounded py-1 px-2 sale-box">30% off Books</div>                
            </div>
            <div className='product-image'>
                <img src={image}  className="lazyload" alt="Mastermind Toys" width="600" />
            </div> 
            <div className='product-title font-bold text-left text-xl pb-5'>
                Klutz Neon Stencil Art
            </div>
            <div className='product-price font-medium text-left	 text-lg'>
                $29.99 
            </div>
            <div className='product-addtocartbtn font-medium text-left	'>
                <button class="bg-transparent hover:bg-blue-500 w-full text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                    Add to Cart
                </button>
            </div>
        </div>
    );
    }