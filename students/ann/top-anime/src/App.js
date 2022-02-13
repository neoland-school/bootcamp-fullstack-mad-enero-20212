import React from "react";
import "./App.css";
import "./components/anime-card";
import AnimeCard from "./components/anime-card";
import Rank from "./components/rank";

function App() {
  let animes = [
    {
      image:
        "https://cdn.myanimelist.net/images/anime/10/47347.jpg?s=29949c6e892df123f0b0563e836d3d98",
      title: "Shingeki no Kyojin",
      rank: 1,
    },
    {
      image:
        "https://cdn.myanimelist.net/images/anime/9/9453.jpg?s=b89e80691ac5cc0610847ccbe0b8424a",
      title: "Death Note",
      rank: 2,
    },
    {
      image:
        "https://cdn.myanimelist.net/images/anime/1223/96541.jpg?s=faffcb677a5eacd17bf761edd78bfb3f",
      title: "Fullmetal Alchemist",
      rank: 3,
    },
    {
      image:
        "https://cdn.myanimelist.net/images/anime/12/76049.jpg?s=40b6c7dbbbb94c44675116d301150078",
      title: "One Punch Man",
      rank: 4,
    },
    {
      image:
        "https://cdn.myanimelist.net/images/anime/11/39717.jpg?s=5908e8051487fb8468d5fca779f8f00d",
      title: "Sword Art Online",
      rank: 5,
    },
    {
      image:
        "https://cdn.myanimelist.net/images/anime/10/78745.jpg?s=8ea4cb2e8a861e63757d3c05aa5d32c2",
      title: "Boku no Hero Academia",
      rank: 6,
    },
    {
      image:
        "https://cdn.myanimelist.net/images/anime/5/64449.jpg?s=f1af76501ac3d4238170191d5e0679f2",
      title: "Tokyo Ghoul",
      rank: 7,
    },
    {
      image:
        "https://cdn.myanimelist.net/images/anime/13/17405.jpg?s=59241469eb470604a792add6fbe7cce6",
      title: "Naruto",
      rank: 8,
    },
    {
      image:
        "https://cdn.myanimelist.net/images/anime/1286/99889.jpg?s=e497d08bef31ae412e314b90a54acfda",
      title: "Kimetsu no Yaiba",
      rank: 9,
    },
    {
      image:
        "https://cdn.myanimelist.net/images/anime/5/87048.jpg?s=2bca128fcb9dfd6d0908f3d9986576c6",
      title: "Kimi no Na wa",
      rank: 10,
    },
  ];

  const animesRank = animes.map((anime) => <Rank rank={anime.rank}></Rank>)
  const animesList = animes.map((anime) => <AnimeCard title={anime.title} image={anime.image}></AnimeCard>)
  return (
    <React.Fragment>
        <div className="animes__container">
          {animesList}
        </div>
      </React.Fragment>
  );
}

export default App;
