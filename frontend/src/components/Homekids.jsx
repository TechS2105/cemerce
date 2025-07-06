import React, {useEffect} from 'react';
import HomeKidStyle from '../../public/styles/Homekids.module.css';
import { GoHeart } from "react-icons/go";
import { FaRegEye } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import { fetchKidsHomeProduct } from '../features/Shop/HomeKidsSlice';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '../features/Shop/CartSlice';

function Homekids() {
    
    const navigate = useNavigate();

    const { items: kidsProduct, status } = useSelector((state) => state.homeKidsProduct);
    const dispatch = useDispatch();

    useEffect(() => {

        if(status === 'idle'){

            dispatch(fetchKidsHomeProduct());

        }

    }, [status, dispatch]);

    if(status === 'loading') return <p> Product is loading... </p>
    if(status === 'failed') return <p> product not found... </p>

    return (

        <div className={HomeKidStyle.homeKidsContainer}>

            <div className={HomeKidStyle.homeKidsHeading}>

                <h2> Kid's Outfit </h2>

            </div>

            <div className={HomeKidStyle.homeKidsProduct}>

                <div className={HomeKidStyle.homeKidsPorductContainer}>

                    {kidsProduct.map((kidsItem) => {

                        return (

                            <div className={HomeKidStyle.homeKidsProductBox} key={kidsItem.id}>

                                <div className={HomeKidStyle.homeKidsProductImage}>

                                    <FaRegEye />
                                    <GoHeart />
                                    <img src={kidsItem.image} alt={kidsItem.title} />

                                </div>

                                <div className={HomeKidStyle.homeKidsProductContent}>

                                    <h3 style={{paddingLeft: "20px"}}> {kidsItem.title} </h3>
                                    <p style={{ paddingLeft: "20px" }}> Category: { kidsItem.category}</p>
                                    <p style={{paddingLeft: "20px"}}> Price: {kidsItem.price} /- </p>
                                    <button style={{marginLeft: "20px"}} onClick={() => {dispatch(addToCart(kidsItem))}}> Add To Cart </button>

                                </div>

                            </div>

                        );

                    })}
                    
                   

                </div>

                <div className={HomeKidStyle.homeKidsPorductButton}>

                    <button onClick={() => {navigate('/kids')}}> View More </button>

                </div>

            </div>

        </div>

    );

}

export default Homekids;