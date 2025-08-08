import Gallery from "./Gallery/Gallery";
import VideoContainer from "./VideoContainer/VideoContainer";
import CardsList from "./Cards/CardsList";
import cards from "../../../utils/cards";
import "./Main.css";

const Main = () => {
  return (
    <main className="main">
      <VideoContainer />
        <h1 className="main__text-title"> Visit Ziv and Or Buildings </h1> 
        <CardsList cards={cards} />
      <Gallery />
      
    </main>
  );
};

export default Main;
