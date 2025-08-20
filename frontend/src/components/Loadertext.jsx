import React from 'react';
import LoaderTextComponent from '../components/Loadertextcomponent';

function Loadertext({LoaderStyle, firstBlockStyle, secondBlockStyle, thirdBlockStyle, fourthBlockStyle, fifthBlockStyle, sixthBlockStyle, seventhBlockStyle, firstTextStyle, secondTextStyle,thirdTextStyle, fourthTextStyle, fifthTextStyle, sixthTextStyle, seventhTextStyle}) {
    
    return (

        <>
            
            <div className={LoaderStyle.characterDiv1} style={firstBlockStyle}>
                
                <LoaderTextComponent
                            
                    character="C"
                    LoaderStyle={LoaderStyle}
                    textAnime={firstTextStyle}
                                
                />

            </div>

           <div className={LoaderStyle.characterDiv2} style={secondBlockStyle}>

                <LoaderTextComponent 
                
                    character="E"
                    LoaderStyle={LoaderStyle}
                    textAnime={secondTextStyle}
                
                />

           </div>

            <div className={LoaderStyle.characterDiv3} style={thirdBlockStyle}>

                <LoaderTextComponent 
                
                    character="M"
                    LoaderStyle={LoaderStyle}
                    textAnime={thirdTextStyle}
                
                />

            </div>
            
            <div className={LoaderStyle.characterDiv4} style={fourthBlockStyle}>

                <LoaderTextComponent
                
                    character="E"
                    LoaderStyle={LoaderStyle}
                    textAnime={fourthTextStyle}
                    
                />

            </div>

            <div className={LoaderStyle.characterDiv5} style={fifthBlockStyle}>

                <LoaderTextComponent
                
                    character="R"
                    LoaderStyle={LoaderStyle}
                    textAnime={fifthTextStyle}

                />

            </div>

            <div className={LoaderStyle.characterDiv6} style={sixthBlockStyle}>

                <LoaderTextComponent
                
                    character="C"
                    LoaderStyle={LoaderStyle}
                    textAnime={sixthTextStyle}
                    
                />

            </div>

            <div className={LoaderStyle.characterDiv7} style={seventhBlockStyle}>

                <LoaderTextComponent
                
                    character="E"
                    LoaderStyle={LoaderStyle}
                    textAnime={seventhTextStyle}
                    
                />

            </div>

        </>

    );

}

export default Loadertext;