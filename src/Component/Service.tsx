import React, {FC} from 'react';
import "./Service.css"

interface passesProps {
    image: string;
    text: string;
}

const Service: FC<passesProps> = ({image, text}) => {
    return (
        <div className="service">
            <div className="image"><img src={image} alt={image}/></div>
            <h2>{text}</h2>
        </div>
    );
}

export default Service;
