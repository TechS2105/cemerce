import React, {useEffect} from 'react';
import KidProduct from '../../public/styles/Kidproducts.module.css';
import { fetchKidCollections } from '../features/Shop/KidCollectionsSlice';
import { useSelector, useDispatch } from 'react-redux';
import { GoHeart } from "react-icons/go";
import { FaRegEye } from "react-icons/fa";
import { addToCart } from '../features/Shop/CartSlice';
import { addToWishlist } from '../features/Shop/WishListSlice';

function Kidcollections() {

    const { items: kidCollection, status } = useSelector((state) => state.kidCollections);
    const dispatch = useDispatch();

    useEffect(() => {

        if (status === 'idle') {
            
            dispatch(fetchKidCollections());

        }

    }, [status, dispatch]);

    if(status === 'loading') return <p> Product is loading... </p>
    if(status === 'failed') return <p> Product not found...</p> 
    
    return (

        <div className={KidProduct.kidProductContainer}>

            {kidCollection.map((kidItems) => {

                return (

                    <div className={KidProduct.kidProductBox}>

                        <div className={KidProduct.kidProductImage}>

                            <GoHeart onClick={() => {dispatch(addToWishlist(kidItems))}} />
                            <FaRegEye />
                            <img src={ kidItems.image } alt={kidItems.title} />

                        </div>

                        <div className={KidProduct.kidProductContent}>

                            <h3 style={{paddingLeft: "20px"}}> {kidItems.title} </h3>
                            <p style={{paddingLeft: "20px"}}> Category: {kidItems.category} </p>
                            <p style={{paddingLeft: "20px"}}> Price: {kidItems.price} /-</p>
                            <button style={{ marginLeft: "20px" }} onClick={() => { dispatch(addToCart(kidItems))}}> Add To Cart </button>

                        </div>

                    </div>

                );

            })}
            

        </div>

    );

}

export default Kidcollections;