import React from 'react';
import "./About.css";
import ja from '../../Images/pp2.png';
import Slider from "../Carousel/Slider";

const About = () => {
    return (
        <div className="about">
            <h1>O mne</h1>
            <img src={ja} alt="nah" height="200px" style={{borderRadius: "50%"}}/>
            <p>Vitaj na mojom React portfoliu, kde som si skúšal základné princípy reaktu.
            Bol to jeden z prých projektov, tak ak si z HR oddelenia, kde som posielal žiadosť,
            nedaj sa odradiť, chystám sa to vylepšiť =).</p>

            <Slider />


        </div>
    );
};

export default About;
