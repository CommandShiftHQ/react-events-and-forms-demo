import React from "react";
import ImageThumbnail from "./ImageThumbnail";
import images from "../../data/images";
import "./style.css";

const EventsDemo = () => {
  return (
    <div className="EventsDemo">
      <h1>App - Events</h1>

      <div className="images">
        {images.map((image, index) => (
          <ImageThumbnail
            key={index}
            url={image.url}
            description={image.description}
          />
        ))}
      </div>
    </div>
  );
};

export default EventsDemo;
