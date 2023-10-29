import { Link } from "react-router-dom";
import bag from '../../../../assets/ProductImg/bag.png'
import bicycle from '../../../../assets/ProductImg/bicycle3.png'
import bottle from '../../../../assets/ProductImg/bottle (1).png'
import electronic from '../../../../assets/ProductImg/Electronic33.png'
import jaket from '../../../../assets/ProductImg/jaket3d.png'
import Motorcycle from '../../../../assets/ProductImg/motorcycle (1).png'
import smartphone from '../../../../assets/ProductImg/smartphone (1).png'
import watch from '../../../../assets/ProductImg/watch3d.png'

import './Product.css'

const Product = () => {
    return (
        <> 
        <div className="">
            <h1 className="text-2xl text-center">Category</h1>
            <hr  className="border border-red-600 w-[500px] my-4 mx-auto"/>
            <hr  className="border border-red-600 w-[400px] mx-auto"/>
        </div>
        <div className="grid lg:grid-cols-4 grid-cols-2 lg:w-[50%]  gap-5 mx-auto my-10 justify-center items-center border">
           <div className="product-item">
              <Link>
                    <img src={bag} alt="" />
                    <h2>Bag</h2>
              </Link>
           </div>
           <div className="product-item">
              <Link>
                    <img src={bicycle} alt="" />
                    <h2>Bicycle</h2>
              </Link>
           </div>
           <div className="product-item">
              <Link>
                    <img src={bottle} alt="" />
                    <h2>Bottle</h2>
              </Link>
           </div>
           <div className="product-item">
              <Link>
                    <img src={electronic} alt="" />
                    <h2>Electronic</h2>
              </Link>
           </div>
           <div className="product-item">
              <Link>
                    <img src={jaket} alt="" />
                    <h2>Jaket</h2>
              </Link>
           </div>
           <div className="product-item">
              <Link>
                    <img src={Motorcycle} alt="" />
                    <h2>Motorcycle</h2>
              </Link>
           </div>
           <div className="product-item">
              <Link>
                    <img src={smartphone} alt="" />
                    <h2>Smartphone</h2>
              </Link>
           </div>
           <div className="product-item">
              <Link>
                    <img src={watch} alt="" />
                    <h2>Watch</h2>
              </Link>
           </div>
        </div>
        </>
    );
};

export default Product;