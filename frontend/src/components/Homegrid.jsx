import React, {useState, useEffect} from 'react';
import HomeGridStyle from '../../public/styles/Homegrid.module.css'
import GridImage from '../components/Gridimage';

let image1 = "https://images.unsplash.com/photo-1527718641255-324f8e2d0421?q=80&w=765&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
let image2 = "https://images.unsplash.com/photo-1723174975550-c1e0c6189bee?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
let image3 = "https://plus.unsplash.com/premium_photo-1661274114204-aadd034cae9a?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

function Homegrid() {

    // Grid Text Anime
    const [firstGridTextAnime, setFirstGridTextAnime] = useState({

        transform: "translateX(-1000px) skewX(-50deg)",
        opacity: "0",
        filter: "blur(20px)",

    });

    const [secondGirdTextAnime, setSecondGirdTextAnime] = useState({

        transform: "translateX(-1000px) skewX(-50deg)",
        opacity: "0",
        filter: "blur(20px)",

    });

    const [thirdGridTextAnime, setThirdGridTextAnime] = useState({

        transform: "translateX(-500px) skewX(-50deg)",
        opacity: "0",
        filter: "blur(20px)",

    });

    // Grid Box Anime
    const [firstGridBoxAnime, setFirstGridBoxAnime] = useState({

        transform: "translateX(-1000px)",
        opacity: "0",
        filter: "blur(20px)"

    });

    const [secondGridBoxAnime, setSecondGridBoxAnime] = useState({

        transform: "translateY(-500px)",
        opacity: "0",
        filter: "blur(20px)",

    });

    const [thirdGridBoxAnime, setThirdGridBoxAnime] = useState({

        transform: "translateY(500px)",
        opacity: "0",
        filter: "blur(20px)",

    });

    function handleGridScroll() {

        //Grid Box Anime
        if (window.scrollY > 800) {
            
            setFirstGridBoxAnime({

                transform: "translateX(0px)",
                transition: "all 1s ease",
                opacity: "1",
                filter: "blur(0px)",

            });

            setSecondGridBoxAnime({

                transform: "translateY(0px)",
                transition: "all 1s ease",
                opacity: "1",
                filter: "blur(0px)"

            });

            setThirdGridBoxAnime({

                transform: "translateY(0px)",
                transition: "all 1s ease",
                opacity: "1",
                filter: "blur(0px)",

            })

        } else {
            
            setFirstGridBoxAnime({

                transform: "translateX(-1000px)",
                opacity: "0",
                transition: "all 1s ease 0.5s",
                filter: "blur(20px)"

            });

            setSecondGridBoxAnime({

                transform: "translateY(-500px)",
                opacity: "0",
                transition: "all 1s ease 0.5s",
                filter: "blur(20px)"

            });

            setThirdGridBoxAnime({

                transform: "translateY(500px)",
                opacity: "0",
                transition: "all 1s ease 0.5s",
                filter: "blur(20px)"

            });

        }

        // Grid First Box Text Anime
        if (window.scrollY >= 1100) {
            
            setFirstGridTextAnime({

                transform: "translateX(0px) skewX(0deg)",
                transition: "all 1s ease", 
                opacity: "1",
                filter: "blur(0px)",

            })

        } else {
            
            setFirstGridTextAnime({

                transform: "translateX(-1000px) skewX(-50deg)",
                transition: 'all 1s ease',
                opacity: "0",
                filter: "blur(20px)"

            })

        }

        // Grid Second Box Text Anime
        if (window.scrollY >= 800) {
            
            setSecondGirdTextAnime({

                transform: "translateX(0px) skewX(0deg)",
                transition: "all 1s ease 0.5s",
                opacity: "1",
                filter: "blur(0px)",

            });

        }else{

            setSecondGirdTextAnime({

                transform: "translateX(-1000px) skewX(-50deg)",
                transition: "all 1s ease",
                opacity: "0",
                filter: "blur(20px)"

            });

        }

        // Grid Third Box Text Anime
        if (window.scrollY >= 1200) {
            
            setThirdGridTextAnime({

                transform: "translateX(0px) skewX(0deg)",
                transition: "all 1s ease 0.5s",
                opacity: "1",
                filter: "blur(0px)",

            });

        } else {
            
            setThirdGridTextAnime({

                transform: "translateX(-500px) skewX(-50deg)",
                transition: "all 1s ease",
                opacity: "0",
                filter: "blur(20px)"

            });

        }

    }

    useEffect(() => {

        window.addEventListener('scroll', handleGridScroll);

    }, [])
    
    return (

        <div className={HomeGridStyle.grid} onScroll={handleGridScroll}>

            <div className={HomeGridStyle.gridBox1} style={firstGridBoxAnime}>

                <h2 style={firstGridTextAnime}> <span style={ {color: "orange"} }>M</span>en's Casual Outfit </h2>
                
                <GridImage
                
                    image={image1}
                    
                />


            </div>

            <div className={HomeGridStyle.gridBox2} style={secondGridBoxAnime}>

                <h2 style={secondGirdTextAnime}> <span style={{color: "orange"}}>W</span>omen's Office Wear </h2>

                <GridImage
                
                    image = {image2}
                />

            </div>

            <div className={HomeGridStyle.gridBox3} style={thirdGridBoxAnime}>

                <h2 style={thirdGridTextAnime}> <span style={{color: "orange"}}>K</span>id's Summer Outfit </h2>

                <GridImage
                
                    image = {image3}
                    
                />

            </div>

        </div>

    );

}

export default Homegrid;