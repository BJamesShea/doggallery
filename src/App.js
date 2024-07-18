import "./App.css";
import Header from "./components/Header";
import Button from "./components/Button";
import React, { useEffect, useState } from "react";
import BreedSelector from "./components/BreedSelector";

function App() {
  return (
    <>
      <div className="container">
        <Header title="Puppy Gallery" text="By: Brandon Shea" />

        <BreedSelector />
        <Button text="Generate" color="lightblue" />
      </div>
    </>
  );
}

export default App;
