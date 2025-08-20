import React from 'react';
import ReuseableSecondProductNavStyle from '../../public/styles/Reuseablesecondproductnav.module.css';
import { useNavigate } from 'react-router-dom';
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

function Reuseablesecondproductnav(props) {

    const navigate = useNavigate();

    return (

        <>
        
            <div className={ReuseableSecondProductNavStyle.navigationBar}>

                <span onClick={() => { navigate('/') }}> {props.navLink} </span>
                <MdOutlineKeyboardArrowRight />
                <p> {props.currentPageName} </p>

            </div>
            
        </>

    );

}

export default Reuseablesecondproductnav; 