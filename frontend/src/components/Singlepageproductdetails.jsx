import React, {useState} from 'react';
import { GoPlus } from "react-icons/go";
import { GoDash } from "react-icons/go";
import { GoHeart } from "react-icons/go";
import { LuArrowRightLeft } from "react-icons/lu";

function Singlepageproductdetails({ SingleProductPageStyle }) {
    
    const [counterValue, setCounterValue] = useState(1);

    function handleCounterDecrease() {
        
        if (counterValue !== 1) {
            
            setCounterValue(counterValue - 1);
            
        }
        
    }

    function handleCounterIncrease() {

        setCounterValue(counterValue + 1);

    }
    
    return (

        <>
        
            <div className={SingleProductPageStyle.singleProductDetailsBox}>

                <h2> Organza Zardosi Work</h2>
                <p> Rs.10,999 </p>

            </div>

            <div className={SingleProductPageStyle.singleProductPageButtonsBox}>

                <div className={SingleProductPageStyle.singleProductPageButtonsSection}>

                        <div className={SingleProductPageStyle.singleProductPageCounterBox}>
                                            
                            <div className={SingleProductPageStyle.decrease} onClick={handleCounterDecrease}>

                                <GoDash/>

                            </div>

                            <input type="number" value={counterValue} />

                            <div className={SingleProductPageStyle.increase} onClick={handleCounterIncrease}>

                                <GoPlus/>

                             </div>

                        </div>
                    
                        <button> Add To Cart </button>
                        <button> Buy It Now </button>
                    
                </div>

                <div className={SingleProductPageStyle.singleProductPageSecondButtonsSection}>

                    <span> <GoHeart /> Add To Wishlist </span>
                    <span> <LuArrowRightLeft /> Compare </span>

                </div>

            </div>

        </>
        
    );

}

export default Singlepageproductdetails;