import React, {useEffect} from 'react';
import WomenProductStyle from '../../public/styles/Womenproduct.module.css';
import { fetchWomenProduct } from '../features/Shop/WomenCollectionSlice';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '../features/Shop/CartSlice';
import { GoHeart } from "react-icons/go";
import { addToWishlist } from "../features/Shop/WishListSlice";
import { FaRegEye } from "react-icons/fa";

function Womenproduct() {
    
    const { items: womenProducts, status } = useSelector((state) => state.womenProduct);
    const dispatch = useDispatch();

    useEffect(() => {

        if (status === 'idle') {

            dispatch(fetchWomenProduct());

        }

    }, [status, dispatch]);

    if(status === 'loading') return <p> Product is loading... </p>
    if(status === 'failed') return <p> Product not found... </p>

    return (

        <>
            {womenProducts.map((womenItems) => {

                return (

                    <div className={WomenProductStyle.womenProductBox} key={womenItems.id}>

                        <div className={WomenProductStyle.womenProductImage}>

                            <GoHeart onClick={ () => {dispatch(addToWishlist(womenItems));}} />
                            <FaRegEye />
                            <img src={womenItems.image} alt={womenItems.title} />

                        </div>

                        <div className={WomenProductStyle.womenProductContent}>

                            <h3> {womenItems.title} </h3>
                            <p>Category: { womenItems.category}</p>
                            <p>Price: {womenItems.price} /- </p>
                            <button onClick={() => {dispatch(addToCart(womenItems))}}> Add To Cart </button>

                        </div>

                    </div>
                )

            })}

        </>       

    );

}

export default Womenproduct;