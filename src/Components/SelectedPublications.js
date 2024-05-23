import React from "react";
import Button from "./Button";
import '../Styles/SelectedPublications.css';

function SelectedPublications() {
    return (
        <div className="wrapper">
            <div className="publications">
                <h3>Selected Publications</h3>
                    <ul>
                        <li>
                        <a href="https://pubmed.ncbi.nlm.nih.gov/33578418/" className="articleName">18F-AV-1451 positron emission tomography in neuropathological substrates of corticobasal syndrome.</a>
                        <br/>Goodheart AE, Locascio JJ, Samore WR, Collins JA, Brickhouse M, Schultz A, Touroutoglou A, Johnson KA, Frosch MP, Growdon JH, Dickerson BC, Gomperts SN.<br/>
                        Brain. 2021 Feb 12;144(1):266-277. doi: 10.1093/brain/awaa383.
                        </li>
                        <li>
                        <a href="https://pubmed.ncbi.nlm.nih.gov/31243072/" className="articleName">
                        Neuropathologic correlates of amyloid and dopamine transporter imaging in Lewy body disease.</a>
                        <br/>Shirvan J, Clement N, Ye R, Katz S, Schultz A, Johnson KA, Gomez-Isla T, Frosch M, Growdon JH, Gomperts SN.<br/>
                        Neurology. 2019 Jul 30;93(5):e476-e484. doi: 10.1212/WNL.0000000000007855. Epub 2019 Jun 26.
                        </li>
                    </ul>
                <Button src='/Publications' initialColor='#c7cfd2' hoverColor='#2d4d6e' title='Publications' 
                initialText='#203245' hoverText='#c7cfd2' radiusColor='#203245' />
            </div>
        </div>
    );
}

export default SelectedPublications;