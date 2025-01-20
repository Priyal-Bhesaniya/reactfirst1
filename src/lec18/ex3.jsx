import React, { useState, useEffect } from 'react';

import image1 from '../../public/vite.svg';
import image2 from '../../public/1.png';
import image3 from '../../public/2.png';
import image4 from '../../public/3.png';





const ImageChanger = () => {
    const [imageIndex, setImageIndex] = useState(0);

    // Use the actual imported image paths in the array
    const images = [image1, image2, image3, image4];

    useEffect(() => {
        const interval = setInterval(() => {
            setImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 4000);

        return () => clearInterval(interval); // Cleanup the interval on unmount
    }, []);

    return (
        <div>
            {/* Display the current image */}
            <img 
                src={images[imageIndex]} 
                alt={`Image ${imageIndex + 1}`} 
                style={{ width: '300px', height: '200px', objectFit: 'cover' }}
            />
        </div>
    );
};

export default ImageChanger;
