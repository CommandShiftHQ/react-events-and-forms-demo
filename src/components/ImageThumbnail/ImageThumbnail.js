import React from "react";

const ImageThumbnail = ({ url, description }) => {
  return (
    <div className="image-thumbnail">
      <img src={url} className="image-thumbnail__image" alt={description} />
      <button className="image-thumbnail__select">Save</button>
    </div>
  );
};

export default ImageThumbnail;
