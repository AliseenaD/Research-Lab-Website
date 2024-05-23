import React, { useState, useEffect } from "react";
import '../Styles/ProjectDescription.css';

function ProjectDescription({image, title, text}) {
    const imageStyle = {
        backgroundImage: `url(${image})`,
        backgroundSize: 'cover',
    }

    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const [description, setDescription] = useState(false);

    return (
        <div className="projectContent">
            <div className="projectInfo">
                {
                    (width <= 600) ? '' : <div className="projectImage" style={imageStyle}></div>
                }
                <div className="projectDescription" onMouseEnter={() => {setDescription(true)}} 
                    onMouseLeave={() => {setDescription(false)}}>
                        <div className={`projectTitle ${description ? 'hidden' : 'active'}`}>
                            <p>{title}</p>
                        </div>
                        <div className={`projectWords ${description ? 'active' : 'hidden'}`}>
                            <p>
                                {text}
                            </p>
                        </div>
                </div>
            </div>
        </div>
    );
}

export default ProjectDescription;