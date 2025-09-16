import React, {useState} from 'react';
import { GoPlus } from "react-icons/go";
import { GoDash } from "react-icons/go";
import { GoHeart } from "react-icons/go";
import { LuArrowRightLeft } from "react-icons/lu";
import { BsTruck } from "react-icons/bs";
import { IoLeafOutline } from "react-icons/io5";
import { GoLock } from "react-icons/go";
import { BsBoxSeam } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { RiTwitterXLine } from "react-icons/ri";
import { FaPinterestP } from "react-icons/fa";
import { RiSubtractFill } from "react-icons/ri";
import { addToCart } from '../features/Shop/CartSlice';
import { addToWishlist } from '../features/Shop/WishListSlice';
import { useDispatch } from 'react-redux';

function Singlepageproductdetails({ SingleProductPageStyle, productDetails, productDetailsHeadingAnime, productDetailsPriceAnime, productDetailsCounter, productDetailsFirstButton, productDetailsSecondButton, productDetailsWishlistButton, productDetailsCompareButton, productDetailsTableFirstRow, productDetailsTableSecondRow, productDetailsTableThirdBox, productDetailsShippingInfoBox, productDetailsShippingCareGuide, productDetailsSecurePayments, productDetailsFreeDelivery, productDetailsSocialIconRef }) {

    const [counterValue, setCounterValue] = useState(1);

    const dispatch = useDispatch();

    function handleCounterDecrease() {
        
        if (counterValue !== 1) {
            
            setCounterValue(counterValue - 1);
            
        }
        
    }

    function handleCounterIncrease() {

        setCounterValue(counterValue + 1);

    }

    // Shipbox Dropdown
    const [isAnimate, setIsAnimate] = useState(false);
    const [isShippingDrowDownBarIconActive, setIsShippingDrowDownBarIconActive] = useState(false);

    const [isCareGuideAnimate, setIsCareGuideAnimate] = useState(false);
    const [isCareGuideDropDownBarIconActive, setIsCareGuideDropDownBoxActive] = useState(false);

    function handleShippingInformationDropDown() {
        
        setIsAnimate(prev => !prev);
        setIsShippingDrowDownBarIconActive(prev => !prev);

    }

    function handleCareGuideDropdownBox() {
        
        setIsCareGuideAnimate(prev => !prev);
        setIsCareGuideDropDownBoxActive(prev => !prev);

    }

    const shippingInfoDropDownBox = isAnimate ? {

        height: "8rem",
        transition: 'all 0.8s ease',

    } : {
        
        height: '0rem',
        transition: "all 0.8s ease"

    }

    const careGuideAnime = isAnimate ? {

        marginTop: "8rem",
        transition: "all 0.8s ease"

    } : {

        marginTop: "0rem",
        transition: "all 0.8s ease"

    }

    const careGuidBox = isCareGuideAnimate ? {

        height: "8rem",
        transition: 'all 0.8s ease'

    } : {

        height: "0rem",
        transition: 'all 0.8s ease'

    }

    const shippingDropDownBarIcon1 = isShippingDrowDownBarIconActive ? {

        transform: "scale(0)",
        position: "absolute",
        transition: "all 0.8s ease"

    } : {

        transform: "scale(1)",
        position: "absolute",
        transition: "all 0.8s ease"

    }

    const shippingDropDownBarIcon2 = isShippingDrowDownBarIconActive ? {

        transform: "scale(1)",
        position: "relative",
        transition: "all 0.8s ease"

    } : {

        transform: "scale(0)",
        position: "relative",
        transition: "all 0.8s ease",

    }

    const careGuideDropDownBarIcon1 = isCareGuideDropDownBarIconActive ? {

        transform: "scale(0)",
        position: "absolute",
        transition: "all 0.8s ease"

    } : {

        transform: "scale(1)",
        position: "absolute",
        transition: "all 0.8s ease"

    }

    const careGuideDropDownBarIcon2 = isCareGuideDropDownBarIconActive ? {

        transform: "scale(1)",
        position: "relative",
        transition: "all 0.8s ease"

    } : {

        transform: "scale(0)",
        position: "relative",
        transition: "all 0.8s ease"

    }
    
    return (

        <>
        
            <div className={SingleProductPageStyle.singleProductDetailsBox}>

                <h2 style={productDetailsHeadingAnime}> {productDetails.title} </h2>
                <p style={productDetailsPriceAnime}> Rs.{productDetails.price} </p>

            </div>

            <div className={SingleProductPageStyle.singleProductPageButtonsBox}>

                <div className={SingleProductPageStyle.singleProductPageButtonsSection}>

                        <div className={SingleProductPageStyle.singleProductPageCounterBox} style={productDetailsCounter}>
                                            
                            <div className={SingleProductPageStyle.decrease} onClick={handleCounterDecrease}>

                                <GoDash/>

                            </div>

                            <input type="number" value={counterValue} readOnly/>

                            <div className={SingleProductPageStyle.increase} onClick={handleCounterIncrease}>

                                <GoPlus/>

                            </div>

                        </div>
                    
                        <button onClick={() => {dispatch(addToCart(productDetails))}} style={productDetailsFirstButton}> Add To Cart </button>
                        <button style={productDetailsSecondButton}> Buy It Now </button>
                    
                </div>

                <div className={SingleProductPageStyle.singleProductPageSecondButtonsSection}>

                    <span onClick={() => {dispatch(addToWishlist(productDetails))}} style={productDetailsWishlistButton}> <GoHeart /> Add To Wishlist </span>
                    <span style={productDetailsCompareButton}> <LuArrowRightLeft /> Compare </span>

                </div>

            </div>

            <div className={SingleProductPageStyle.singleProductPageProductDetailsBox}>

                <table>

                    <tbody>

                        <tr style={productDetailsTableFirstRow}>

                            <td> Vendor: </td>
                            <td> {productDetails.details.vendor}  </td>

                        </tr>

                        <tr style={productDetailsTableSecondRow}>

                            <td> Types: </td>
                            <td> {productDetails.details.types} </td>

                        </tr>

                        <tr style={productDetailsTableThirdBox}>

                            <td> Available: </td>
                            <td> Available</td>

                        </tr>

                    </tbody>

                </table>

            </div>

            <div className={SingleProductPageStyle.singleProductPageProductOtherDetailsBox}>

                <div className={SingleProductPageStyle.singleProductPageProductFirstDropdownBox} style={productDetailsShippingInfoBox}>

                    <div className={SingleProductPageStyle.singleProductPageProductFirstDropdownBoxContent} onClick={handleShippingInformationDropDown}>

                        <span><BsTruck /><p>Shipping information</p></span>

                        <div className={SingleProductPageStyle.shippintDropDownBarIcons}>

                            <span style={shippingDropDownBarIcon1}><GoPlus /></span>
                            <span style={shippingDropDownBarIcon2}><RiSubtractFill /></span>

                        </div>

                        
                    </div>

                    <div className={SingleProductPageStyle.shippingInformationBox} style={shippingInfoDropDownBox}>

                        <p>- All India Free Delivery. </p>
                        <p>- Ships within 1-2 business days. </p>
                        <p>- Ships in our fully recyclable and biodegradable signature boxes. </p>

                    </div>

                </div>

                <div className={SingleProductPageStyle.singleProductPageProductSecondDropDownBox} style={productDetailsShippingCareGuide}>

                    <div className={SingleProductPageStyle.singleProductPageProductSecondDropdownBoxContent} style={careGuideAnime} onClick={handleCareGuideDropdownBox}>

                        <span><IoLeafOutline /><p>Care Guide</p></span>

                        <div className={SingleProductPageStyle.careGuideDropDownBarIcons}>

                            <span style={careGuideDropDownBarIcon1}><GoPlus /></span>
                            <span style={careGuideDropDownBarIcon2}><RiSubtractFill /></span>

                        </div>

                    </div>

                    <div className={SingleProductPageStyle.careGuideBox} style={careGuidBox}>

                        <p> <b>Dry Clean Only</b> to maintain the integrity of the fabric and zari work. </p>

                        <ul>

                            <li> Store in a muslin cloth to protect against moisture and sunlight. </li>

                        </ul>

                    </div>

                </div>

                <div className={SingleProductPageStyle.singleProductPageProductThirdBox}>

                    <span style={productDetailsSecurePayments}> <GoLock /> <p> Secure payment </p></span>

                    <div className={SingleProductPageStyle.productFreeDeliveryBox}>

                        <span style={productDetailsFreeDelivery}> <BsBoxSeam /> <p>Your order is free delivery !</p> </span>

                    </div>

                    <div className={SingleProductPageStyle.socialIconSection} ref={productDetailsSocialIconRef}>

                        <span> <FaFacebookF /> Share </span>
                        <span> <RiTwitterXLine /> Tweet </span>
                        <span> <FaPinterestP /> Pin it </span>

                    </div>

                </div>

            </div>

        </>
        
    );

}

export default Singlepageproductdetails;