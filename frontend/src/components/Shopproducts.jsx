import React, {useEffect} from 'react';
import ShopProductsStyle from '../../public/styles/Shopproducts.module.css';
import { fetchShopProduct } from "../features/Shop/ShopProductSlice";
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '../features/Shop/CartSlice';

function Shopproducts() {

    const { items: productItem, status } = useSelector((state) => state.shopProduct);
    useSelector((state) => console.log(state.cart));

    const dispatch = useDispatch();

    useEffect(() => {

        if (status === 'idle') {
            
            dispatch(fetchShopProduct());

        }

    }, [status, dispatch]);

    if(status === 'loading') return <p> Product is fetching....</p>
    if(status === 'failed') return <p> Product not found....</p>
    
    return (

        <>
        
            <div className={ShopProductsStyle.shopProductSection}>

                {productItem.map((shopItem) => {

                    return (

                        <div className={ShopProductsStyle.shopProductBox} key={shopItem.id}>

                            <div className={ShopProductsStyle.shopProductImage}>

                                <img src={shopItem.image} alt={shopItem.title} />

                            </div>
                            <div className={ShopProductsStyle.shopProductContent}>

                                <h3 style={{paddingLeft: "20px"}}> {shopItem.title} </h3>
                                <p style={{paddingLeft: "20px"}}> Category: Men's Outfit </p>
                                <p style={{paddingLeft: "20px"}}> Price: 5000 /- </p>
                                <button style={{marginLeft: "20px"}} onClick={() => {dispatch(addToCart(shopItem))}}> Add To Cart </button>

                            </div>

                        </div>

                    );

                })}
               

            </div><br /><br /><br /><br />
            
        </>

    );

}

export default Shopproducts;