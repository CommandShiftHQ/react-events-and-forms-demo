import React from "react";
import "./style.css";

const ImageThumbnail = ({ url, description }) => {

  return (
    <div className="image-thumbnail">
      <img src={url} className="image-thumbnail__image" alt={description} />
      <div className="image-thumbnail__save">Selected</div>
      <div className="image-thumbnail__title">{description}</div>
    </div>
  );
};

export default ImageThumbnail;
