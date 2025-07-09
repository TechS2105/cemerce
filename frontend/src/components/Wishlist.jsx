import React from 'react';
import WishlistStyle from '../../public/styles/Wishlist.module.css';
import { RiArrowRightSLine } from "react-icons/ri";
import {useNavigate} from 'react-router-dom'
import { RiDeleteBin6Line } from "react-icons/ri";
import { useSelector, useDispatch} from 'react-redux';
import { removeWishlistProduct } from '../features/Shop/WishListSlice';
import Footer from '../components/Footer';

let isWishlistEmpty = 0;

function Wishlist() {

    const navigate = useNavigate();

    const { items: wishList } = useSelector((state) => state.wishlist);
    const dispatch = useDispatch();

    function handleRemoveWishlist(id) {
        
        dispatch(removeWishlistProduct(id));

    }
    
    return (

        <>

            <div className={WishlistStyle.wishlistHomeLink}>

                <p> <span onClick={() => {navigate('/')}}> HOME </span> <RiArrowRightSLine /> WISHLIST</p>

            </div>
            <div className={WishlistStyle.wishlistHeading}>

                <h2>Your Wishlist Product</h2>

            </div>

            <div className={WishlistStyle.wishListTable}>

                <div className={WishlistStyle.wishListProduct}>
                    
                    {isWishlistEmpty === wishList.length ? <div className={WishlistStyle.isWishlist}> Your Wishlist Is Empty...</div> : 
                                        
                        <table>

                            <thead>

                                <tr> 

                                    <th>Product Image</th>
                                    <th>Product Name</th>
                                    <th>Product Price</th>
                                    <th>Product Remove</th>

                                </tr>

                            </thead>

                            <tbody>

                                {wishList.map((wishListItem) => {

                                    return (

                                        <tr key={wishListItem.id}>

                                            <td><img src={wishListItem.image} alt={wishListItem.title} /></td>
                                            <td> {wishListItem.title} </td>
                                            <td> {wishListItem.price} /- </td>
                                            <td> <RiDeleteBin6Line onClick={() => { handleRemoveWishlist(wishListItem.id) }}/> </td>

                                        </tr> 

                                    );

                                })}
                                            

                            </tbody>

                        </table>
                                        
                    }

                </div>
               

            </div>

            <Footer />

        </>

    );

}

export default Wishlist;