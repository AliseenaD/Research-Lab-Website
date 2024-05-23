import React from "react";
import '../Styles/LabDescription.css';
import Button from "./Button";

function LabDescription() {
    return (
        <div className="description">
            <div className="researchDescription">
                <p>
                    Dr. Gomperts's basic and clinical research focuses on Parkinson's disease, 
                    dementia with Lewy bodies, and Alzheimer's disease. In human studies, he is 
                    working to understand the causes of cognitive impairment that can arise in 
                    these diseases with PET imaging of pathogenic processes, such as the accumulation 
                    of beta-amyloid and tau and the loss of dopamine neurons projecting to brain regions 
                    that subserve cognition. In animal models, he uses large scale, multi-electrode
                    recordings of brain cell activity together with optogenetic tools to investigate normal 
                    brain function and develop treatments to restore brain function in these diseases.
                </p>
                <Button src='./Research' title='Research' initialColor='#203245' 
                hoverColor='#2d4d6e' initialText='#f5f5f5' hoverText='#b1b1b1'
                radiusColor='#f5f5f5'/>
            </div>
        </div>
    );
}

export default LabDescription;