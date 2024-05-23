import React from "react";
import '../Styles/HomeBanner.css';

function HomeBanner() {
    return (
        <div className="image">
            <div className="back"></div>
            <div className="descriptionBox">
                <p>
                    Research in the Gomperts laboratory is focused on the study of Dementia with Lewy Bodies, 
                    Alzheimer’s, and Parkinson’s, dissected through a vertically organized program that extends 
                    from bench to bedside.
                </p>
            </div>
        </div>
    );
}

export default HomeBanner;