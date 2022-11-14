import React, { useState } from "react";
import "./style.css";

const ImageThumbnail = ({ url, description }) => {
  const [hover, setHover] = useState(false);
  const [selected, setSelected] = useState(false);

  const handleClick = (event) => {
    const target = event.target;
    const alt = target.getAttribute("alt");
    setSelected(!selected);
  };

  return (
    <div
      className="image-thumbnail"
      onMouseEnter={() => setHover(true)}
      onMouseOut={() => setHover(false)}
      onClick={(event) => handleClick(event)}
    >
      <img src={url} className="image-thumbnail__image" alt={description} />
      {selected && <div className="image-thumbnail__save">Selected</div>}
      {hover && <div className="image-thumbnail__title">{description}</div>}
    </div>
  );
};

export default ImageThumbnail;
