import React, { useEffect, useState } from "react";
import "./widgetStyle.css";

const DogPicture = () => {

    const [imageUrl,setImageUrl] = useState('');

    useEffect(() => {
        fetch('https://dog.ceo/api/breeds/image/random')
        .then((res) => res.json())
        .then((data) => {
            setImageUrl(data.message);
        });
    }, []);

    return (
        <div className="options-container">
            <img src={imageUrl} alt='a dog' />
        </div>
    );

};

export default DogPicture;