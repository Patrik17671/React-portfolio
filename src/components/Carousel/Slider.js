import React from 'react';
import "./Slider.css";
import Card from "./Card";
import "./Card.css";
import Carousel from 'react-elastic-carousel';
import java from "../../Images/java.svg";
import html from "../../Images/html.svg";
import javascript from "../../Images/javascript.svg";
import reactSvg from "../../Images/react.svg";

const Slider = () => {

    return (
        <div >
            <Carousel >
                <Card
                    tech="Java"
                    icon={java}
                    level="S Javou som začínal ,ale ovládam len základy."/>

                <Card
                    tech="HTML a CSS"
                    icon={html}
                    level="Pokročilý"/>

                <Card
                    tech="JavaScript"
                    icon={javascript}
                    level="Mierne pokročilý."/>
                <Card
                    tech="React"
                    icon={reactSvg}
                    level="Základy ,ale akurát sa ho učím."/>
            </Carousel>
        </div>
    );
};

export default Slider;
