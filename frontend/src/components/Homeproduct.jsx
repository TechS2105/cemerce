import React, {useEffect} from 'react';
import HomeProductStyle from '../../public/styles/Homeproduct.module.css';
import { fetchHomeWomenProduct } from '../features/Shop/HomeWomenSlice';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '../features/Shop/CartSlice';
import { addToWishList } from '../features/Shop/WishListSlice';
import { useNavigate } from 'react-router-dom';
import { GoHeart } from "react-icons/go";
import { FaRegEye } from "react-icons/fa";

function Homeproduct() {

    const { items: homeWomenProducts, status } = useSelector((state) => state.homeWomenProduct);
    useSelector((state) => console.log(state.cart));

    const dispatch = useDispatch();

    const navigate = useNavigate();

    useEffect(() => {

        if (status === 'idle') {
            
            dispatch(fetchHomeWomenProduct());

        }

    }, [status, dispatch]);

    if(status === 'loading') return <p> Product is loading... </p>
    if(status === 'failed') return <p> Product not found.... </p>
    
    return (

        <>
            
            <div className={HomeProductStyle.homeProductContainer}>

                {homeWomenProducts.map((womenProduct) => {

                    return (

                        <div className={HomeProductStyle.homeProductBox} key={womenProduct.id}>

                            <div className={HomeProductStyle.homeProductImage}>

                                <FaRegEye />
                                <GoHeart onClick={ () => {dispatch(addToWishList(womenProduct))}} />
                                <img src={womenProduct.image} alt={womenProduct.title} />

                            </div>

                            <div className={HomeProductStyle.homeProductContent}>

                                <h3 style={{paddingLeft: "20px"}}> {womenProduct.title} </h3>
                                <p style={{paddingLeft: "20px"}}> Category: {womenProduct.category} </p>
                                <p style={{paddingLeft: "20px"}}> Price: {womenProduct.price} /- </p>
                                <button style={{marginLeft: "20px"}} onClick={() => {dispatch(addToCart(womenProduct))}}> Add To Cart </button>

                            </div>

                        </div>

                    );

                })}

            </div>

            <div className={HomeProductStyle.homeProductButton}>

                    <button onClick={() => {navigate('/women')}}> View More </button>

            </div>
        </>

    );

}

export default Homeproduct;