import React from "react";

export default function PokemonList({ pokemon }) {
  //TODO props.pokemon is being passed into the function, therefore destructuring can be passed into it
  return (
    <div>
      {pokemon.map(p => (
        <div key={p}>{p}</div>
      ))}
    </div>
  );
}
