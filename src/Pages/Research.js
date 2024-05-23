import React from 'react';
import HeadBanner from '../Components/HeadBanner';
import Footer from '../Components/Footer';
import ProjectDescription from '../Components/ProjectDescription';
import imageOne from '../Photos/Screenshot-2024-02-05-at-10.57.51 AM.png';
import imageTwo from '../Photos/Screen-Shot-2023-11-17-at-10.04.27-AM-copy.png';
import imageThree from '../Photos/Screen-Shot-2024-01-04-at-11.39.06-AM.png';
import AboutTeam from '../Components/AboutTeam';
import Diseases from '../Components/Diseases';

function Research() {

    // Provide the projects desciptions and images to map onto ProjectDescription component
    const items = [
        {
            title: 'Mechanisms of disease and disease resistance',
            text: 'We incorporate staining and protein isolation techniques to investigate the associations between genes, their associated protein pathways, and the resulting susceptibility or resistance of cell cultures to neurodegenerative diseases. We utilize both human and rodent brain tissue to determine what and how molecular mechanisms have roles within diseases.',
            image: imageOne
        },
        {
            title: 'Neurophysiological dissection of these neurodegenerative diseases',
            text: 'Using dedicated electrophysiological equipment and analytical software, we seek to induce and observe neurophysiological patterns within mouse models to help broaden our understanding behind the underlying processes of these neurodegenerative diseases. These observations on region-specific circuity and activity help guide our therapeutic approaches targeting the diseases.',
            image: imageTwo
        },
        {
            title: 'PET molecular imaging and therapeutics',
            text: 'We use investigative techniques such as PET imaging to explore the pathology of neurodegenerative diseases. Our observations on modulatory pathology provides insight on disease progression and its association with cognitive decline. We use our findings to guide experimental design within the lab to help expand our understanding.',
            image: imageThree
        }
    ];

    // Map items into a list of projects component
    const ProjectsList = ({items}) => {
        return (
            <div>
                {items.map((item, index) => (
                    <ProjectDescription title={item.title} text={item.text} key={index} image={item.image} />
                ))}
            </div>
        );
    };

    return (
        <div>
            <HeadBanner title='Research' />
            <Diseases />
            <AboutTeam />
            <ProjectsList items={items} />
            <Footer />
        </div>
    );
}

export default Research;