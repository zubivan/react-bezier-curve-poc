import React from "react";

export const BezierCurve = ({origin, destination, controlPoint1, controlPoint2}) => {
    const path = `M${origin.x} ${origin.y} C${controlPoint1.x} ${controlPoint1.y}, ${controlPoint2.x} ${controlPoint2.y} ${destination.x} ${destination.y}`;
    return (
            <div style={{width: "100%", height: "100%"}}> 
                <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                    <path d={path} 
                        stroke="black"
                        fill="transparent"
                        />
                </svg>
            </div>
    );
}