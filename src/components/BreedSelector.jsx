import React, { useState, useEffect } from "react";

const BreedSelector = () => {
  const [breeds, setBreeds] = useState([]);
  const [selectedBreed, setSelectedBreed] = useState("");

  useEffect(() => {
    const fetchBreeds = async () => {
      try {
        const response = await fetch("https://dog.ceo/api/breeds/list/all");
        const data = await response.json();
        setBreeds(Object.keys(data.message));
      } catch (error) {
        console.error("Error fetching breeds".error);
      }
    };
    fetchBreeds();
  }, []);

  const handleChange = (event) => {
    setSelectedBreed(event.target.value);
  };

  return (
    <div>
      <label htmlFor="breed-selector">Select a dog breed: </label>
      <select id="breed-selector" value={selectedBreed} onChange={handleChange}>
        <option value="">--Choose breed--</option>
        {breeds.map((breed) => (
          <option key={breed} value={breed}>
            {breed}
          </option>
        ))}
      </select>
    </div>
  );
};

export default BreedSelector;
