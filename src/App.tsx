import BlogHeader from "./Components/BlogHeader/BlogHeader";
import Card from "./Components/Card/Card";

import BplusLogo from "../src/Podcast Logos/Bplus.jpg";
import HagirVagirLogo from "../src/Podcast Logos/HagirVagir.jpg";
import JafekriLogo from "../src/Podcast Logos/Jafekri.jpg";
import RadioJadiLogo from "../src/Podcast Logos/RadioJadi.jpg";
import RakhtkanLogo from "../src/Podcast Logos/Rakhtkan Bazandeha.jpg";
import RadioRahLogo from "../src/Podcast Logos/RadioRah.jpg";

function App() {
  const podcasts = [
    {
      name: "Bplus",
      podcaster: "Ali Bandari",
      img_alt: "Bplus logo",
      img_src: BplusLogo,
      my_score: 9,
    },
    {
      name: "Hagir Vagir",
      podcaster: "Mandani, Nouroozi",
      img_alt: "HagirVagir logo",
      img_src: HagirVagirLogo,
      my_score: 6.5,
    },
    {
      name: "Jafekri",
      podcaster: "Amirali GH",
      img_alt: "Jafekri logo",
      img_src: JafekriLogo,
      my_score: 9,
    },
    {
      name: "Radio Jadi",
      podcaster: "Jadi Mirmirani",
      img_alt: "Radio Jadi logo",
      img_src: RadioJadiLogo,
      my_score: 8,
    },
    {
      name: "Rakhtkan Bazandeha",
      podcaster: "Bomrani",
      img_alt: "Rakhtkan logo",
      img_src: RakhtkanLogo,
      my_score: 7.5,
    },
    {
      name: "Radio Rah",
      podcaster: "Mojtaba Shakouri",
      img_alt: "Radio Rah logo",
      img_src: RadioRahLogo,
      my_score: 9.5,
    },
  ];

  return (
    <>
      <BlogHeader />
      {podcasts.map((podcast) => (
        <Card
          name={podcast.name}
          podcaster={podcast.podcaster}
          img_alt={podcast.img_alt}
          img_src={podcast.img_src}
          my_score={podcast.my_score}
        />
      ))}
    </>
  );
}

export default App;
