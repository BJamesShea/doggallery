import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Button from "./components/Button";
import BreedSelector from "./components/BreedSelector";
import ImageGallery from "./components/ImageGallery";

function App() {
  const [selectedBreed, setSelectedBreed] = useState("");
  const [imageUrls, setImageUrls] = useState([]);
  const [numImages, setNumImages] = useState(1);

  const handleNumImagesChange = (e) => {
    setNumImages(Number(e.target.value));
  };

  const handleBreedChange = (breed) => {
    setSelectedBreed(breed);
  };

  const handleGenerateClick = async () => {
    if (selectedBreed) {
      try {
        const responses = await Promise.all(
          Array.from({ length: numImages }, () =>
            fetch(`https://dog.ceo/api/breed/${selectedBreed}/images/random`)
          )
        );
        const data = await Promise.all(
          responses.map((response) => response.json())
        );
        setImageUrls(data.map((item) => item.message));
      } catch (error) {
        console.error("Error fetching images", error);
      }
    } else {
      alert("Please select a breed first");
    }
  };

  return (
    <div className="app-container">
      <div className="header-container">
        <Header
          title="Doggo Emporium!"
          text="Select breed and number of images!"
        />
        <BreedSelector onBreedChange={handleBreedChange} />
        <label htmlFor="numImages">Number of Images: </label>
        <select
          id="numImages"
          value={numImages}
          onChange={handleNumImagesChange}
        >
          {Array.from({ length: 100 }, (_, i) => (
            <option key={i + 1} value={i + 1}>
              {i + 1}
            </option>
          ))}
        </select>

        <Button onClick={handleGenerateClick} text="Generate" />
      </div>
      <ImageGallery imageUrls={imageUrls} />
    </div>
  );
}

export default App;
