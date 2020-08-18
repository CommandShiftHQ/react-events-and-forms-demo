import React, { useState } from "react";

const ImageThumbnail = ({ url, description }) => {
  const [hover, setHover] = useState(false);
  const [save, setSave] = useState(false);

  return (
    <div
      className="image-thumbnail"
      onMouseOver={() => setHover(true)}
      onMouseOut={() => setHover(false)}
      onClick={() => setSave(!save)}
    >
      <img src={url} className="image-thumbnail__image" alt={description} />
      {save && <div className="image-thumbnail__save">Saved!</div>}
      {hover && <div className="image-thumbnail__title">{description}</div>}
    </div>
  );
};

export default ImageThumbnail;
