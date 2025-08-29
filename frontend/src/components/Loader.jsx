import React, { useState, useEffect } from "react";
import LoaderStyle from "../../public/styles/Loader.module.css";
import LoaderText from "../components/Loadertext";

function Loader() {
  const [loaderBlockAnime, setLoaderBlockAnime] = useState({
    transform: "translateY(0px)",
    opacity: "1",
    filter: "blur(0px)",
  });

  const [firstBlockStyle, setFirstBlockStyle] = useState({
    transform: "translateY(0px)",
    opacity: "1",
    filter: "blur(0px)",
  });

  const [secondBlockStyle, setSecondBlockStyle] = useState({
    transform: "translateY(0px)",
    opacity: "1",
    filter: "blur(0px)",
  });

  const [thirdBlockStyle, setThirdBlockStyle] = useState({
    transform: "translateY(0px)",
    opacity: "1",
    filter: "blur(0px)",
  });

  const [fourthBlockStyle, setForuthBlockStyle] = useState({
    transform: "translateY(0px)",
    opacity: "1",
    filter: "blur(0px)",
  });

  const [fifthBlockStyle, setFifthBlockStyle] = useState({
    transform: "translateY(0px)",
    opacity: "1",
    filter: "blur(0px)",
  });

  const [sixthBlockStyle, setSixthBlockStyle] = useState({
    transform: "translateY(0px)",
    opacity: "1",
    filter: "blur(0px)",
  });

  const [seventhBlockStyle, setSeventhBlockStyle] = useState({
    transform: "translateY(0px)",
    opacity: "1",
    filter: "blur(0px)",
  });

  // Loader Text Style

  const [firstTextStyle, setFirstTextStyle] = useState({
    transform: "scale(0) rotateY(0deg)",
    filter: "blur(20px)",
    opacity: "0",
  });

  const [secondTextStyle, setSecondTextStyle] = useState({
    transform: "scale(0) rotateY(0deg)",
    filter: "blur(20px)",
    opacity: "0",
  });

  const [thirdTextStyle, setThirdTextStyle] = useState({
    transform: "scale(0) rotateY(0deg)",
    filter: "blur(20px)",
    opacity: "0",
  });

  const [fourthTextStyle, setFourthTextStyle] = useState({
    transform: "scale(0) rotateY(0deg)",
    filter: "blur(20px)",
    opacity: "0",
  });

  const [fifthTextStyle, setFifthTextStyle] = useState({
    transform: "scale(0) rotateY(0deg)",
    filter: "blur(20px)",
    opacity: "0",
  });

  const [sixthTextStyle, setSixthTextStyle] = useState({
    transform: "scale(0) rotateY(0deg)",
    filter: "blur(20px)",
    opacity: "0",
  });

  const [seventhTextStyle, setSeventhTextStyle] = useState({
    transform: "scale(0) rotateY(0deg)",
    filter: "blur(20px)",
    opacity: "0",
  });

  function handleLoader() {
    setLoaderBlockAnime({
      transform: "translateY(-2000px)",
      transition: "all 2s ease 6.8s",
      opacity: "0",
      filter: "blur(2px)",
    });

    setFirstBlockStyle({
      transform: "translateY(1000px)",
      transition: "all 2s ease 6s",
      filter: "blur(20px)",
      opacity: "0",
      color: "#fff",
    });

    setSecondBlockStyle({
      transform: "translateY(-1000px)",
      transition: "all 2s ease 5s",
      filter: "blur(20px)",
      opacity: "0",
    });

    setThirdBlockStyle({
      transform: "translateY(1000px)",
      transition: "all 2s ease 5.9s",
      filter: "blur(20x)",
      opacity: "0",
    });

    setForuthBlockStyle({
      transform: "translateY(-1000px)",
      transition: "all 2s ease 4.9s",
      filter: "blur(20px)",
      opacity: "0",
    });

    setFifthBlockStyle({
      transform: "translateY(1000px)",
      transition: "all 2s ease 5.8s",
      filter: "blur(20px)",
      opacity: "0",
    });

    setSixthBlockStyle({
      transform: "translateY(-1000px)",
      transition: "all 2s ease 4.8s",
      filter: "blur(20px)",
      opacity: "0",
    });

    setSeventhBlockStyle({
      transform: "translateY(1000px)",
      transition: "all 2s ease 5.7s",
      filter: "blur(20px)",
      opacity: "0",
    });

    // Loader Text Style

    setFirstTextStyle({
      transform: "scale(1) rotateY(360deg)",
      transition: "all 1.5s ease 0.2s",
      filter: "blur(0px)",
      opacity: "1",
    });

    setSecondTextStyle({
      transform: "scale(1) rotateY(-360deg)",
      transition: "all 1.5s ease 0.5s",
      filter: "blur(0px)",
      opacity: "1",
      color: "orange",
      textShadow: "15px 15px 5px #292929",
    });

    setThirdTextStyle({
      transform: "scale(1) rotateY(360deg)",
      transition: "all 1.5s ease 0.8s",
      opacity: "1",
      filter: "blur(0px)",
    });

    setFourthTextStyle({
      transform: "scale(1) rotateY(-360deg)",
      transition: "all 1.5s ease 1.1s",
      opacity: "1",
      filter: "blur(0px)",
      color: "orange",
      textShadow: "15px 15px 5px #292929",
    });

    setFifthTextStyle({
      transform: "scale(1) rotateY(360deg)",
      transition: "all 1.5s ease 1.3s",
      opacity: "1",
      filter: "blur(0px)",
    });

    setSixthTextStyle({
      transform: "scale(1) rotateY(-360deg)",
      transition: "all 1.5s ease 1.6s",
      filter: "blur(0px)",
      opacity: "1",
      color: "orange",
      textShadow: "15px 15px 5px #292929",
    });

    setSeventhTextStyle({
      transform: "scale(1) rotateY(360deg)",
      transition: "all 1.5s ease 1.9s",
      filter: "blur(0px)",
      opacity: "1",
    });
  }

  useEffect(() => {
    setTimeout(() => {
      handleLoader();
    }, 2000);

    window.addEventListener("load", handleLoader());
  }, []);

  return (
    <>
      <div
        className={LoaderStyle.loader}
        onLoad={handleLoader}
        style={loaderBlockAnime}
      >
        <LoaderText
          LoaderStyle={LoaderStyle}
          firstBlockStyle={firstBlockStyle}
          secondBlockStyle={secondBlockStyle}
          thirdBlockStyle={thirdBlockStyle}
          fourthBlockStyle={fourthBlockStyle}
          fifthBlockStyle={fifthBlockStyle}
          sixthBlockStyle={sixthBlockStyle}
          seventhBlockStyle={seventhBlockStyle}
          firstTextStyle={firstTextStyle}
          secondTextStyle={secondTextStyle}
          thirdTextStyle={thirdTextStyle}
          fourthTextStyle={fourthTextStyle}
          fifthTextStyle={fifthTextStyle}
          sixthTextStyle={sixthTextStyle}
          seventhTextStyle={seventhTextStyle}
        />
      </div>
    </>
  );
}

export default Loader;
