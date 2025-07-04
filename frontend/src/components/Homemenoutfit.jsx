import React, {useEffect} from 'react';
import HomeMenOutfitStyle from '../../public/styles/Homemenoutfit.module.css';
import { GoHeart } from "react-icons/go";
import { FaEye } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import { fetchHomeMenProduct } from '../features/Shop/HomeMenSlice';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '../features/Shop/CartSlice';
import { addToWishList } from '../features/Shop/WishListSlice';

function Homemenoutfit() {

    const navigate = useNavigate();

    const { items: menProduct, status } = useSelector((state) => state.homeMenProduct);
    
    useSelector((state) => console.log(state.cart));
    useSelector((state) => console.log(state.wishlist));

    const dispatch = useDispatch();

    useEffect(() => {

        if(status === 'idle'){

            dispatch(fetchHomeMenProduct());

        }

    }, [status, dispatch]);
    
    if(status === 'loading') return <p style={{fontSize: "1.5rem"}}> Product is loading... </p>
    if(status === 'failed') return <p style={{fontSize: "1.5rem"}}> Product  not found... </p>
    
    return (

        <>
        
            <div className={HomeMenOutfitStyle.menHomeOutfit}>

                {menProduct.map((menItem) => {

                    return (

                        <div className={HomeMenOutfitStyle.menProduct} key={menItem.id}>

                            <div className={HomeMenOutfitStyle.menProductImage}>

                                <GoHeart onClick={() => { dispatch(addToWishList(menItem)) }} />
                                <FaEye />
                                <img src={menItem.image} alt={menItem.title} />

                            </div>

                            <div className={HomeMenOutfitStyle.menProductContent}>

                                <h3 style={{ paddingLeft: "20px" }}> {menItem.title.length > 40 ? menItem.title.slice(0, 40) : menItem.title} </h3>
                                <p style={{paddingLeft: "20px"}}> Category: {menItem.category} </p>
                                <p style={{paddingLeft: "20px"}}> Price: {menItem.price} /- </p>
                                <button style={{marginLeft: "20px"}} onClick={() => dispatch(addToCart(menItem))}> Add To Cart </button>

                            </div>

                        </div> 

                    );

                })}
                
                

            </div>

            <div className={HomeMenOutfitStyle.menLinkButton}>

                <button onClick={() => {navigate('/men')}}> View More </button>

            </div>
            
        </>

    );

}

export default Homemenoutfit;