import React, {useState, useEffect} from 'react';
import HomeWomenProductStyle from '../../public/styles/Homewomenproduct.module.css';
import HomeWomenProduct from './Homeproduct';


function Homewomenproduct() {

    const [homeWomenProductHeading, setHomeWomenProductHeading] = useState({

        transform: 'translateY(200px)',
        opacity: "0",
        filter: "blur(20px)"

    });

    const [homeWomenProductAnime, setHomeWomenProductAnime] = useState({

        transform: 'translateY(500px)',
        opacity: "0",
        filter: "blur(20px)"

    });

    const [homeWomenProductNavigationArrow, setHomeWomenProductNavigationArrow] = useState({

        opacity: "0",
        filter: "blur(20px)",

    });

    const [homeWomenProductViewMoreButton, setHomeWomenProductViewMoreButton] = useState({

        transform: "translateY(200px)",
        opacity: "0",
        filter: "blur(20px)"

    });

    function handleWomenProductScroll() {
        
        if (window.scrollY > 2700) {
            
            setHomeWomenProductHeading({

                transform: 'translateY(0px)',
                opacity: "1",
                filter: "blur(0px)",
                transition: "all 0.8s ease"

            });

            setHomeWomenProductAnime({

                transform: "translateY(0px)",
                opacity: "1",
                filter: "blur(0px)",
                transition: "all 0.8s ease 0.3s"

            });

        } else {
            
            setHomeWomenProductHeading({

                transform: "translateY(200px)",
                transition: "all 0.8s ease",
                filter: "blur(20px)",
                opacity: "0"

            });

            setHomeWomenProductAnime({

                transform: "translateY(500px)",
                transition: "all 0.8s ease",
                filter: "blur(20px)",
                opacity: "0"

            });

        }

        if (window.scrollY >= 3020) {
            
            setHomeWomenProductNavigationArrow({

                opacity: "1",
                filter: "blur(0px)",
                transition: "all 0.8s ease 0.3s"

            });

        } else {
            
            setHomeWomenProductNavigationArrow({

                opacity: "0",
                filter: "blur(20px)",
                transition: "all 0.8s ease"

            })

        }

        if (window.scrollY >= 3200) {
            
            setHomeWomenProductViewMoreButton({

                transform: "translateY(0px)",
                transition: "all 0.8s ease",
                opacity: "1",
                filter: "blur(0px)",

            });

        } else {
            
            setHomeWomenProductViewMoreButton({

                transform: "translateY(200px)",
                transition: "all 0.8s ease",
                opacity: "1",
                filter: "blur(20px)",

            });

        }

    }

    useEffect(() => {

        window.addEventListener('scroll', handleWomenProductScroll);

    }, []);
    
    return (
        
        <div className={HomeWomenProductStyle.homeWomenProductSection} onScroll={handleWomenProductScroll}>

            <div className={HomeWomenProductStyle.homeWomenProductHeading}>

                <h2 style={homeWomenProductHeading}> Women's Outfit </h2>

            </div>

            <HomeWomenProduct
            
                homeWomenProductAnime={homeWomenProductAnime}
                homeWemenProductNavigationArrow={homeWomenProductNavigationArrow}
                homeWomenProductViewMoreButton={homeWomenProductViewMoreButton}
                
            />
            
        </div>

    )

}

export default Homewomenproduct;