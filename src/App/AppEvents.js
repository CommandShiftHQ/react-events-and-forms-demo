import React from "react";
import ImageThumbnail from "../components/ImageThumbnail/ImageThumbnail";
import images from "../data/images";
import "./App.css";

const App = () => {
  return (
    <div className="App">
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

export default App;
