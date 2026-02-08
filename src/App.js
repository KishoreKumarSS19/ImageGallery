import React from "react";
import Navbar from "./Navbar"; 
import ImageCard from "./ImageCard";
import imageData from "./data/images";
import "./style.css";

const App = () => {
  return (
    <div className="main-wrapper">
      <Navbar />
      <header className="hero-content">
        <h1 className="title">Digital Artifacts</h1>
        <p className="description">A curated study of light and perspective.</p>
      </header>

      <section className="gallery-viewport">
        {imageData.map((item) => (
          <ImageCard
            key={item.id}
            {...item} 
          />
        ))}
      </section>
    </div>
  );
};

export default App;