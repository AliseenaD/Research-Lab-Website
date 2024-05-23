import React, { useState } from "react";

function Button({title, src, radiusColor, initialColor, hoverColor, initialText, hoverText }) {
    // Implement useState for hover functionality 
    const [isHover, setHover] = useState(false);
    // Style the button based on the props
    const buttonStyle = {
        backgroundColor: isHover ? hoverColor : initialColor,
        color: isHover ? hoverText : initialText,
        transition: 'background-color 0.3s, color 0.3s',
        border: `1px solid ${radiusColor}`,
        borderRadius: '5px',
        textAlign: 'center',
        textDecoration: 'none',
        padding: '10px 15%',
    };
    
    return (
        <a href={src} style={buttonStyle} className="button" 
        onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
            {title}
        </a>
    );
}

export default Button;