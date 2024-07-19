import React from "react";

import './mobileExplore.scss';
import MobileProductPromo from "../../components/mobile-product/mobileProductPromo";
import HMenu from "../../components/h-menu/hMenu";
import HomeProduct from "../../components/mobile-product/homeProduct";
import {withRouter} from "react-router-dom";
import {useSelector} from "react-redux";

const MobileExplore = ({history}) => {

    const products = useSelector(state => state.productData.products)

    return (
        <div className={'mobile-explore'}>
            {/*<MobileProductPromo/>*/}
            <HMenu/>
            <div className={'product-list-header'}>
                <span className={''}>Electronics</span>
                <i className="material-icons">chevron_right</i>
            </div>

            <div className={'home-listing'}>
                <ul>
                    {
                        products ? products.map((product,index) => {
                            return (
                                <>
                                    <li className={''} onClick={() => history.push('/home/fjsdskfdsdgj')} key={index}>
                                        <HomeProduct product = {product} />
                                    </li>
                                </>
                            )
                        }) : ''
                    }
                </ul>
            </div>

            <div className={'product-list-header'}>
                <span className={''}>Electronics</span>
                <i className="material-icons">chevron_right</i>
            </div>

            <div className={'home-listing'}>
                <ul>
                    <li className={''}>
                        <HomeProduct />
                    </li>
                </ul>
            </div>

        </div>
    )
}

export default withRouter(MobileExplore);