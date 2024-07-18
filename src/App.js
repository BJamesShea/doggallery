import "./App.css";
import Header from "./components/Header";
import Button from "./components/Button";
import React, { useState } from "react";
import BreedSelector from "./components/BreedSelector";
import ImageGallery from "./components/ImageGallery";

function App() {
  const [selectedBreed, setSelectedBreed] = useState("");
  const [imageUrls, setImageUrls] = useState([]);

  const handleBreedChange = (breed) => {
    setSelectedBreed(breed);
  };

  const handleGenerateClick = async () => {
    if (selectedBreed) {
      try {
        const responses = await Promise.all([
          fetch(`https://dog.ceo/api/breed/${selectedBreed}/images/random`),
          fetch(`https://dog.ceo/api/breed/${selectedBreed}/images/random`),
          fetch(`https://dog.ceo/api/breed/${selectedBreed}/images/random`),
        ]);
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
    <div className="container">
      <Header title="Puppy Gallery" text="By: Brandon Shea" />
      <BreedSelector onBreedChange={handleBreedChange} />
      <Button text="Generate" color="lightblue" onAdd={handleGenerateClick} />
      <ImageGallery imageUrls={imageUrls} />
    </div>
  );
}

export default App;
