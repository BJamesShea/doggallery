import React from "react";

const ImageGallery = ({ imageUrls }) => {
  if (!imageUrls || !Array.isArray(imageUrls) || imageUrls.length === 0) {
    return <div>No images available</div>;
  }

  return (
    <div className="imgGal">
      {imageUrls.map((url, index) => (
        <img
          key={index}
          src={url}
          alt={`Image ${index + 1}`}
          style={{ width: "300px", height: "300px", margin: "10px" }}
        />
      ))}
    </div>
  );
};

export default ImageGallery;
