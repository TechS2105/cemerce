import React from 'react';
import CartStyle from '../../public/styles/Cart.module.css';
import { useNavigate } from 'react-router-dom';
import { IoIosArrowForward } from "react-icons/io";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useSelector, useDispatch } from 'react-redux';
import { removeCartProduct } from '../features/Shop/CartSlice';
import Footer from '../components/Footer';

let isCart = 0;

function Cart() {
    
    const navigate = useNavigate();

    const { items: cart } = useSelector((state) => state.cart);
    const dispatch = useDispatch();

    const handleRemove = (id) => {

        dispatch(removeCartProduct(id));

    }

    return (

        <>
        
            <div className={CartStyle.cartQuickLink}>

                <p> <span onClick={() => navigate('/')}> HOME  </span> <IoIosArrowForward />  CART </p>

            </div>

            <div className={CartStyle.cartHeading}>

                <h2> Your Cart Product </h2>

            </div>

            <div className={CartStyle.cartProductContainer}>

                <div className={CartStyle.cartProduct}>

                    {isCart === cart.length ? <div className={CartStyle.isEmptyStyle}> Your Cart Is Empty... </div> : 

                        <table>

                            <thead>

                                <tr>

                                    <th>Product Image</th>
                                    <th>Product Name</th>
                                    <th>Product Price</th>
                                    <th>Remove Product</th>

                                </tr>

                            </thead>

                                <tbody>

                                    {cart.map((cartItem) => {

                                        return (
                                                
                                            <tr key={cartItem.id}>

                                                <td><img src={cartItem.image} alt={cartItem.title} /></td>
                                                <td> <p> {cartItem.title} </p>  </td>
                                                <td> <p> {cartItem.price} /- </p></td>
                                                <td> <RiDeleteBin6Line onClick={() => {handleRemove(cartItem.id)}} /> </td>

                                            </tr>
                                                
                                        )

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

export default Cart;