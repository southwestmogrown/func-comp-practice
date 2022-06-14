import pokeImage from "./images/bulbasaur.jpg";

function Showcase() {
  const favPokemon = "Bulbasaur";

  const pokeCharacteristics = {
    type: "Grass",
    move: "Vine Whip"
  };

  return (
    <>
      <h1>{favPokemon}'s Showcase Component</h1>
      <h2>
        {favPokemon}'s type is{" "}
        <span style={{ backgroundColor: "green", color: "white" }}>
          {pokeCharacteristics.type}
        </span>{" "}
        and one of it's moves is{" "}
        <span style={{ backgroundColor: "white", color: "green" }}>
          {pokeCharacteristics.move}
        </span>
      </h2>
      <img src={pokeImage} alt={favPokemon} />
    </>
  );
}

export default Showcase;
