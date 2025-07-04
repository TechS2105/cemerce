import React, {useEffect} from 'react';
import ProductStyle from '../../public/styles/Products.module.css';
import ProductImage from '../components/Productsimage';
import ProductContent from '../components/Productcontent';
import { fetchMenCollections } from '../features/Shop/MenCollectionSlice';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '../features/Shop/CartSlice';
import { addToWishList } from '../features/Shop/WishListSlice';

function Product() {

    const { items: menCollection, status } = useSelector((state) => state.menCollections);
    useSelector((state) => console.log(state.cart));
    useSelector((state) => console.log(state.wishlist))

    const dispatch = useDispatch();

    useEffect(() => {

        if(status === 'idle'){

            dispatch(fetchMenCollections());

        }

    }, [status, dispatch])

    if(status === 'loading') return <p> Product is loading...</p>
    if(status === 'failed') return <p> Product not found...</p>
    
    return (

        <>
        
            {menCollection.map((menProduct) => {

                return (

                    <div className={ProductStyle.productBox} key={menProduct.id}>

                        <div className={ProductStyle.productImage}>

                            <ProductImage 
                            
                                productImage={menProduct.image}
                                title={menProduct.title}
                                onButtonClick = {() => {dispatch(addToWishList(menProduct))}}
                                
                            />

                        </div>

                        <div className={ProductStyle.productContent}>

                            <ProductContent
                            
                                productHeading={menProduct.title}
                                productCategory={menProduct.category}
                                productPrice={menProduct.price}
                                cartButton="Add To Cart"
                                onButtonClick = {() => {dispatch(addToCart(menProduct))}}
                                
                            />

                        </div>

                    </div>

                );

            })}
           
            
        </>

    );

}

export default Product;