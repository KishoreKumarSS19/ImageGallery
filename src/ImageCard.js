import React from "react";

function ImageCard({ image, title, description }) {
  return (
    <div className="image-card">
      <img src={image} alt={title} className="card-image" loading="lazy" />
      <div className="card-overlay">
        <h3 className="card-title">{title}</h3>
        <p className="card-desc">{description}</p>
      </div>
    </div>
  );
}

export default ImageCard;