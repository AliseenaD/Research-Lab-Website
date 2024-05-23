import React from "react";
import '../Styles/Diseases.css';

function Diseases() {
    const interests = ['Tauopathies', `Alzheimer's Disease`, 'Synucleinopathies'];

    const DiseaseList = ({diseases}) => {
        return (
            <>
                {diseases.map((disease, index) => (
                    <div className={`diseaseItem disease-${index}`} key={index}>
                        <p>{disease}</p>
                        <hr></hr>
                    </div>
                ))}
            </>
        );
    };

    return (
        <div className="diseasesContent">
            <p>Disease Interests</p>
            <div className="diseases">
                <DiseaseList diseases={interests} />
            </div>
        </div>
    );
}

export default Diseases;