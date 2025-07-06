import React from 'react';
import TestimonialCarouselStyle from '../../public/styles/Testimonialcarousel.module.css';
import { FaQuoteLeft } from "react-icons/fa";
import Testimonials from '../../testimonoal.js';

function Testimonialcarousel() {
    
    return (

        <>
        
            <div className={TestimonialCarouselStyle.testimonialContainer}>

                <div className={TestimonialCarouselStyle.testimonialHeading}>

                    <h2> Words That Inspire Us </h2>

                </div>

                <div className={TestimonialCarouselStyle.testimonialSection}>

                    <div className={TestimonialCarouselStyle.testimonials}>

                        <div className={TestimonialCarouselStyle.testimonialBoxes}>

                            {Testimonials.map((author) => (

                                <div className={TestimonialCarouselStyle.testimonialBox}>

                                    <div className={TestimonialCarouselStyle.testimonialContent}>

                                        <FaQuoteLeft />
                                        <p>{author.content}</p>

                                    </div>

                                    <div className={TestimonialCarouselStyle.testimonialAuthor}>

                                        <div className={TestimonialCarouselStyle.autherImage}>

                                            <img src={author.image} alt={author.name} />

                                        </div>

                                        <div className={TestimonialCarouselStyle.autherDetails}>

                                            <h4> {author.name} </h4>
                                            <p> {author.address} </p>

                                        </div>

                                    </div>

                                </div>

                            ))}
                            
                        </div>

                        <div className={TestimonialCarouselStyle.testimonialBoxes}>

                            {Testimonials.map((author) => (

                                <div className={TestimonialCarouselStyle.testimonialBox}>

                                    <div className={TestimonialCarouselStyle.testimonialContent}>

                                        <FaQuoteLeft />
                                        <p>{author.content}</p>

                                    </div>

                                    <div className={TestimonialCarouselStyle.testimonialAuthor}>

                                        <div className={TestimonialCarouselStyle.autherImage}>

                                            <img src={author.image} alt={author.name} />

                                        </div>

                                        <div className={TestimonialCarouselStyle.autherDetails}>

                                            <h4> {author.name} </h4>
                                            <p> {author.address} </p>

                                        </div>

                                    </div>

                                </div>

                            ))}
                            
                        </div>

                        <div className={TestimonialCarouselStyle.testimonialBoxes}>

                            {Testimonials.map((author) => (

                                <div className={TestimonialCarouselStyle.testimonialBox}>

                                    <div className={TestimonialCarouselStyle.testimonialContent}>

                                        <FaQuoteLeft />
                                        <p>{author.content}</p>

                                    </div>

                                    <div className={TestimonialCarouselStyle.testimonialAuthor}>

                                        <div className={TestimonialCarouselStyle.autherImage}>

                                            <img src={author.image} alt={author.name} />

                                        </div>

                                        <div className={TestimonialCarouselStyle.autherDetails}>

                                            <h4> {author.name} </h4>
                                            <p> {author.address} </p>

                                        </div>

                                    </div>

                                </div>

                            ))}
                            
                        </div>


                    </div>

                </div>

            </div>
            
        </>

    );

}

export default Testimonialcarousel;