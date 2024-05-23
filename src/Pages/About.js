import React from 'react';
import HeadBanner from '../Components/HeadBanner';
import Footer from '../Components/Footer';
import '../Styles/About.css';

function About() {
    return(
        <div>
            <HeadBanner title='Join Us' />
            <div className='contentWrapper'>
                <div className='joinContent'>
                    <div className='joinInformation'>
                        <p>We are looking for a postdoc to work on systems level hippocampal physiology using tetrode 
                            and calcium imaging techniques in freely behaving rodents.
                        </p>
                        <p>
                            The applicant should have:
                        </p>
                        <ul>
                            <li>
                                A PhD in neuroscience, engineering or a related field
                            </li>
                            <li>
                                Strong experimental and problem solving abilities
                            </li>
                            <li>
                                Programming skills and experience with Matlab is a plus
                            </li>
                        </ul>
                        <p>
                        If you are interested in applying, please send your CV, contact details of an academic reference, 
                        and a cover letter to: gomperts.stephen@mgh.harvard.edu
                        </p>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default About;