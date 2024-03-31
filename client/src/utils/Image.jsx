import React, { useState } from "react";

const Image = ({ src, alt, onError }) => {
  const [imgSrc, setImgSrc] = useState(src);

  const handleError = () => {
    setImgSrc(onError); // Set to your fallback image
  };

  return (
    <img
      loading="lazy"
      className="h-full w-full object-cover object-center"
      src={imgSrc}
      alt={alt}
      onError={handleError}
    />
  );
};

export default Image;