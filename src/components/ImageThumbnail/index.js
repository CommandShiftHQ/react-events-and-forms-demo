import React, { useState } from "react";
import "./style.css";

const ImageThumbnail = ({ url, description }) => {
  const [hover, setHover] = useState(false);
  const [save, setSave] = useState(false);

  const handleClick = (event) => {
    const target = event.target;
    const alt = target.getAttribute("alt");
    console.log(target, alt);
    setSave(!save);
  };

  return (
    <div
      className="image-thumbnail"
      onMouseOver={() => setHover(true)}
      onMouseOut={() => setHover(false)}
      onClick={(event) => handleClick(event)}
    >
      <img src={url} className="image-thumbnail__image" alt={description} />
      {save && <div className="image-thumbnail__save">Saved!</div>}
      {hover && <div className="image-thumbnail__title">{description}</div>}
    </div>
  );
};

export default ImageThumbnail;
