import React, {useState} from 'react';
import { GoPlus } from "react-icons/go";
import { RiSubtractFill } from "react-icons/ri";

function Singleproductpagefaqsection({ SingleProductPageStyle }) {
    
    const [isFaqBoxActive, setIsFaqBoxActive] = useState(false);
    const [isFirstFaqQuestionBoxIconActive, setIsFirstFaqQuestionBoxIconActive] = useState(false);
    const [isSecondFaqBoxActive, setIsSecondFaqBoxActive] = useState(false); 
    const [isSecondFaqQuestionBarIconActive, setIsSecondFaqQuestionBarIconActive] = useState(false);
    const [isThirdFaqBoxActive, setIsThirdFaqBoxActive] = useState(false);
    const [isThirdFaqQuestionBarIconActive, setIsThirdFaqQuestionBarIconActive] = useState(false);


    function handleFirstFaqQuestionBox() {
        
        setIsFaqBoxActive(prev => !prev);
        setIsSecondFaqBoxActive(prev => prev === !prev);
        setIsThirdFaqBoxActive(prev => prev === !prev);
        setIsThirdFaqQuestionBarIconActive(prev => prev === !prev);
        setIsSecondFaqQuestionBarIconActive(prev => prev === !prev);
        setIsFirstFaqQuestionBoxIconActive(prev => !prev);

    }

    function handleSecondFaqQuestionBar() {
        
        setIsSecondFaqBoxActive(prev => !prev);
        setIsFaqBoxActive(prev => prev === !prev);
        setIsThirdFaqBoxActive(prev => prev === !prev);
        setIsThirdFaqQuestionBarIconActive(prev => prev === !prev);
        setIsSecondFaqQuestionBarIconActive(prev => !prev);
        setIsFirstFaqQuestionBoxIconActive(prev => prev === !prev);

    }

    function handleThirdQuestionBar() {
        
        setIsThirdFaqBoxActive(prev => !prev);
        setIsFaqBoxActive(prev => prev === !prev);
        setIsSecondFaqBoxActive(prev => prev === !prev);
        setIsThirdFaqQuestionBarIconActive(prev => !prev);
        setIsSecondFaqQuestionBarIconActive(prev => prev === !prev);
        setIsFirstFaqQuestionBoxIconActive(prev => prev === !prev);

    }

    const firstFaqQuestionBoxDropDown = isFaqBoxActive ? {

        height: '3rem',
        borderBottom: "1px solid #e6e6e6ff",
        transition: "all 0.8s ease"

    } : {

        height: "0rem",
        opacity: "0",
        borderBottom: "transparent",
        transition: "all 0.8s ease",

    }

    const secondFaqQuestionBarDropDownBox = isSecondFaqBoxActive ? {

        height: "5rem",
        borderBottom: "1px solid #e6e6e6ff",
        transition: 'all 0.8s ease'

    } : {

        height: "0rem",
        opacity: "0",
        borderBottom: "transparent",
        transition: "all 0.8s ease"

    }

    const thirdFaqDropDownBox = isThirdFaqBoxActive ? {

        height: "3rem",
        borderBottom: "1px solid #e6e6e6ff",
        transition: "all 0.8s ease"

    } : {

        height: "0rem",
        opacity: "0",
        borderBottom: "transparent",
        transition: 'all 0.8s ease'

    }

    const faqQuestionBarIcon1 = isThirdFaqQuestionBarIconActive ? {

        transform: "scale(0)",
        position: "absolute",
        transition: "all 0.8s ease"

    } : {

        transform: "scale(1)",
        position: "absolute",
        transition: "all 0.8s ease"

    }

    const faqQuestionBarIcon2 = isThirdFaqQuestionBarIconActive ? {

        transform: "scale(1)",
        position: "relative",
        transition: "all 0.8s ease"

    } : {

        transform: "scale(0)",
        position: "relative",
        transition: "all 0.8s ease"

    }

    const secondFaqtQuestionBarIcon1 = isSecondFaqQuestionBarIconActive ? {

        transform: "scale(0)",
        position: "absolute",
        transition: "all 0.8s ease"

    } : {

        transform: "scale(1)",
        position: "absolute",
        transition: "all 0.8s ease"

    }

    const secondFaqQuestionBarIcon2 = isSecondFaqQuestionBarIconActive ? {

        transform: "scale(1)",
        transition: "all 0.8s ease"

    } : {

        transform: "scale(0)",
        transition: "all 0.8s ease",

    }

    const firstFaqQuestionBoxIcon1 = isFirstFaqQuestionBoxIconActive ? {

        transform: "scale(0)",
        position: "absolute",
        transition: "all 0.8s ease"

    } : {

        transform: "scale(1)",
        position: "absolute",
        transition: "all 0.8s ease"

    }

    const firstFaqQuestionBoxIcon2 = isFirstFaqQuestionBoxIconActive ? {

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
        
            <div className={SingleProductPageStyle.faqSection}>

                <div className={SingleProductPageStyle.faqHeading}>

                    <h3> FAQ </h3>
                    <p>Have a question ? We are here to help.</p>

                </div>

                <div className={SingleProductPageStyle.faqDropDown}>

                    <div className={SingleProductPageStyle.firstFaq}>

                        <div className={SingleProductPageStyle.firstFaqQuestionBar} onClick={handleFirstFaqQuestionBox}>

                            <span> Is the shipping free? </span>
                            
                            <div className={SingleProductPageStyle.firstFaqQuestionBarIcons}>

                                <span style={firstFaqQuestionBoxIcon1}> <GoPlus /> </span>
                                <span style={firstFaqQuestionBoxIcon2}><RiSubtractFill /></span>

                            </div>

                        </div>

                        <div className={SingleProductPageStyle.firstFaqQuestionDropDownBox} style={firstFaqQuestionBoxDropDown}>

                            <p>Yes. All India shipping is already included in the price. We use Shiprocket with 9-10 days delivery time.</p>

                        </div>

                    </div>

                    <div className={SingleProductPageStyle.secondFaq}>

                        <div className={SingleProductPageStyle.secondFaqQuestionBar} onClick={handleSecondFaqQuestionBar}>

                            <span> When will I receive my item? </span>

                            <div className={SingleProductPageStyle.secondFaqQuestionBarIcons}>

                                <span style={secondFaqtQuestionBarIcon1}><GoPlus /></span>
                                <span style={secondFaqQuestionBarIcon2}><RiSubtractFill /></span>

                            </div>

                        </div>

                        <div className={SingleProductPageStyle.secondFaqQuestionBarDropDown} style={secondFaqQuestionBarDropDownBox}>

                            <p>When we have received your order, you will automatically receive an e-mail confirming your order. Orders made before 2 PM will be picked, packed and shipped the same day. Delivery time is usually 4-5 working days with Shiprocket.</p>

                        </div>

                    </div>

                    <div className={SingleProductPageStyle.thirdFaq}>

                        <div className={SingleProductPageStyle.thirdFaqQuestionBar} onClick={handleThirdQuestionBar}>

                            <span> Can I change or return my item? </span>

                            <div className={SingleProductPageStyle.thirdFaqQuestionBarIcons}>

                                <span style={faqQuestionBarIcon1}><GoPlus /></span>
                                <span style={faqQuestionBarIcon2}><RiSubtractFill /></span>

                            </div>

                        </div>

                        <div className={SingleProductPageStyle.thirdFaqQuestionDropDownBox} style={thirdFaqDropDownBox}>

                            <p>If you get a defective product then only you can get an exchange or refund whichever is suitable for you.</p>

                        </div>

                    </div>

                </div>

            </div>
        
        </>

    );

}

export default Singleproductpagefaqsection;