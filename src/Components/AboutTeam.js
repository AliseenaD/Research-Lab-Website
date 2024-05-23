import React from "react";
import Button from '../Components/Button';
import '../Styles/AboutTeam.css';

function AboutTeam() {
    return (
        <div className="aboutContent">
            <div className="aboutShape">
                <div className="aboutContent">
                    <div className="aboutText">
                        <p>Meet the team behind our projects!</p>
                    </div>
                    <Button src='./Team' title='Team' initialColor='#203245' 
                    hoverColor='#2d4d6e' initialText='#f5f5f5' hoverText='#b1b1b1'
                    radiusColor='#203245'/>
                </div>
            </div>
        </div>
    );
}

export default AboutTeam;