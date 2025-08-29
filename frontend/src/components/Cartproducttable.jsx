import React from 'react';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';

function Cartproducttable({CartStyle, cartProduct, removeProduct}) {

    const dispatch = useDispatch();
    
    return (

        <>
        
            <div className={CartStyle.productTable}>

                <table>

                    <thead>

                        <tr>

                            <th> Product Image </th>
                            <th> Product Category </th>
                            <th> Product Price </th>

                        </tr>

                    </thead>

                    <tbody>

                        {cartProduct.map((product, idx) => {

                            return (
                                
                                <tr key={idx}>

                                    <td>

                                        <div className={CartStyle.productImageAndName}>

                                            <div className={CartStyle.cartProductImage}>

                                                <img src={product.image} alt="" />

                                            </div>

                                            <div className={CartStyle.cartProductDetails}>

                                                <NavLink to={`/${product.category}/${product.title}`}>

                                                    <p> {product.title} </p>

                                                </NavLink>
                                                <span onClick={() => dispatch(removeProduct(product.id))}> Remove</span>

                                            </div>

                                        </div>

                                    </td>
                                    <td>

                                        <p> {product.category} </p>

                                    </td>
                                    <td>

                                        <p> Rs. {product.price} </p>

                                    </td>

                                </tr> 

                            )

                        })}
                       

                    </tbody>

                </table>
                
            </div>
           
            
        </>

    );

}

export default Cartproducttable;