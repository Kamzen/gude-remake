import React from 'react';

import './homeProduct.scss';
import img from '../../images/hp.jpg';
const HomeProduct = ({product}) => {
    console.log(product)
    return(
        <div className={'home-product'}>
            <div className={'home-product-img'}>
                <img src={product ? product.product_info.product_img_url[0] : ''} alt={''} />
            </div>
            <span className={'product-name'}>{product ? product.product_info.title : 'Product Name'}</span>
            <div className={'product-hl-1'}>
                <span className={'avail'}>9 Available</span>
                <span className={'price'}>R399</span>
            </div>
            <div className={'product-hl-2'}>
                <span className={''}>Johannesburg</span>
                <span className={''}>Date</span>
            </div>
            <div className={'row'}>
                <div className={'col-xs-6'}>
                    <button className={'btn btn-default cart-btn'}>CART</button>
                </div>
                <div className={'col-xs-6'}>
                    <button className={'btn btn-default wishlist'}>WISHLIST</button>
                </div>
            </div>

        </div>
    )

}

export default HomeProduct;