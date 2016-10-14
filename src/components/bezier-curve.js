import React from "react";

export const BezierCurve = ({origin, destination, controlPoint1, controlPoint2}) => {
    const path = `M${origin.x} ${origin.y} C${controlPoint1.x} ${controlPoint1.y}, ${controlPoint2.x} ${controlPoint2.y} ${destination.x} ${destination.y}`;
    return (
            <div style={{width: "100%", height: "100%"}}> 
                <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                        <marker id="markerArrow" markerWidth="13" markerHeight="13" refX="2" refY="6"
                            orient="auto">
                            <path d="M2,2 L2,11 L10,6 L2,2" fill="black" />
                        </marker>
                    </defs>
                    <path d={path} 
                        stroke="black"
                        fill="transparent" 
                        markerEnd="url(#markerArrow)"
                        />
                </svg>
            </div>
    );
}