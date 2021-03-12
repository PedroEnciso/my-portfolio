// import images
import remSleep from "./img/rem-sleep.png";
import pokedex from "./img/pokedex.png";
import guessThatPokemon from "./img/guess-that-pokemon.png";
import westHills from "./img/west-hills.png";

const ProjectState = () => {
  return [
    {
      title: "REM Sleep Solutions",
      description:
        "I worked with a client to create a page displaying different packages for their business. I implemented this page using Wordpress and CSS/HTML.",
      img: remSleep,
      project: "https://remsleepsolutions.com/adjustable-beds/",
      github: "",
    },
    {
      title: "Pokedex",
      description:
        "I used the PokeAPI to create a Pokedex that handles user input using Javascript and Tailwind.",
      img: pokedex,
      project: "https://pokedex-gsm209ouw-pedroenciso.vercel.app/index.html",
      github: "https://github.com/PedroEnciso/pokedex",
    },
    {
      title: "Guess That Pokemon",
      description:
        "I used the PokeAPI to create a game that has the user guess a Pokemon’s name given their description. I usedJavascript and Tailwind.",
      img: guessThatPokemon,
      project: "https://pokedex-gsm209ouw-pedroenciso.vercel.app/guess.html",
      github: "https://github.com/PedroEnciso/pokedex",
    },
    {
      title: "West Hills",
      description:
        "I used Javascript to create a game that allows the user to input different heights of buildings. The tallest buildings from the left turn green.",
      img: westHills,
      project: "https://quizzical-lamport-793b00.netlify.app/",
      github: "https://github.com/PedroEnciso/westHillsFullSite",
    },
  ];
};

export default ProjectState;
