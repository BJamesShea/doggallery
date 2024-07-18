import React from "react";

const ImageGallery = ({ imageUrls }) => {
  return (
    <div>
      {imageUrls.length > 0 ? (
        imageUrls.map((url, index) => (
          <img
            key={index}
            src={url}
            alt={`Random dog ${index + 1}`}
            style={{ width: "300px", height: "300px", margin: "10px" }}
          />
        ))
      ) : (
        <p>No images to display</p>
      )}
    </div>
  );
};

export default ImageGallery;
