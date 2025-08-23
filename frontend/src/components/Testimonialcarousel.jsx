import React, {useState, useEffect} from 'react';
import TestimonialCarouselStyle from '../../public/styles/Testimonialcarousel.module.css';
import { FaQuoteLeft } from "react-icons/fa";
import Testimonials from '../../testimonoal.js';

function Testimonialcarousel() {

    const [testimonialHeadingAnime, setTestimonialHeadingAnime] = useState({

        opacity: "0",
        filter: "blur(20)",
        transform: "translateY(200px)",

    });

    const [testimonialSectionAnime, setTestimonialSectionAnime] = useState({

        opacity: "0",
        filter: "blur(20px)",

    })

    function handleScrollAnime() {
        
        if (window.scrollY > 5800) {
            
            setTestimonialHeadingAnime({

                opacity: "1",
                filter: 'blur(0px)',
                transform: "translateY(0px)",
                transition: "all 0.8s ease"

            });

            setTestimonialSectionAnime({

                opacity: "1",
                filter: "blur(0px)",
                transition: "all 0.8s ease 0.5s"

            });

        } else {
            
            setTestimonialHeadingAnime({

                opacity: "0",
                filter: 'blur(20px)',
                transform: "translateY(200px)",
                transition: "all 0.8s ease"


            });

            setTestimonialSectionAnime({

                opacity: "0",
                filter: "blur(20px)",
                transition: "all 0.8s ease"

            })

        }

    }

    useEffect(() => {

        window.addEventListener('scroll', handleScrollAnime);

    }, [])
    
    return (

        <>
        
            <div className={TestimonialCarouselStyle.testimonialContainer} onScroll={handleScrollAnime}>

                <div className={TestimonialCarouselStyle.testimonialHeading}>

                    <h2 style={testimonialHeadingAnime}> Words That Inspire Us </h2>

                </div>

                <div className={TestimonialCarouselStyle.testimonialSection} style={testimonialSectionAnime}>

                    <div className={TestimonialCarouselStyle.testimonials}>

                        <div className={TestimonialCarouselStyle.testimonialBoxes}>

                            {Testimonials.map((author) => (

                                <div className={TestimonialCarouselStyle.testimonialBox} key={author.id}>

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

                                <div className={TestimonialCarouselStyle.testimonialBox} key={author.id}>

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

                                <div className={TestimonialCarouselStyle.testimonialBox} key={author.id}>

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