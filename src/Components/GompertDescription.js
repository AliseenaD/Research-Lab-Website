import React from "react";
import '../Styles/GompertsDescription.css';
import gompertsPic from '../Photos/16881824.jpeg'

function GompertDescription() {
    return (
        <div className="bioSection">
            <div className="bioBox">
                <h3>
                    Stephen Gomperts, MD, PhD is Associate Professor of Neurology at 
                    Harvard Medical School and attending physician at Massachusetts General Hospital. 
                    He is the Founding Director of the MGH Lewy Body Dementia Unit.
                </h3>
            </div>
            <div className="bioPic">
                <img className='pic' src={gompertsPic} alt="GompertsPic"></img>
            </div>
        </div>
    );
}

export default GompertDescription;