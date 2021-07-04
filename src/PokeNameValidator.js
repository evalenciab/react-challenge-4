import React, { useState, useEffect } from "react";
import pokemons from "./pokemons";

export default function PokeNameValidator() {
  const [randomPokemon, setRandomPokemon] = useState("");
  const [name, setName] = useState("");

  const generateRandomPokemon = () => {
    const randomPosition = Math.floor(Math.random() * pokemons.length);
    setRandomPokemon(pokemons[randomPosition]);
  };
  useEffect(() => {
    generateRandomPokemon();
  }, []);

  useEffect(() => {
    if (name.length > 0 && name.toLowerCase() === randomPokemon.toLowerCase()) {
      if (window.alert("Correct! Play again?")) {
        setName("");
        generateRandomPokemon();
      }
    }
  }, [name, randomPokemon]);
  return (
    <div className="app">
      <h2>Mini Challenge 4: Poke Name Validator</h2>
      <p>
        Pokémon name:&nbsp;
        <strong>{randomPokemon}</strong>
      </p>
      <p className="secondary">Type the Pokémon name correctly:</p>
      <input
        type="text"
        placeholder="Enter the Pokémon name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
    </div>
  );
}
