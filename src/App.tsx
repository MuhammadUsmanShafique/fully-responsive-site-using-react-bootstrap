import "./App.css";
import CardsCollection from "./components/CardsCollection";
import image1 from "./assets/1.jpeg";

const cardsData = [
  { image: image1, text: "Card 1" },
  { image: image1, text: "Card 2" },
  { image: image1, text: "Card 3" },
  { image: image1, text: "Card 4" },
  { image: image1, text: "Card 5" },
  { image: image1, text: "Card 6" },
];

function App() {
  return (
    <>
      <CardsCollection
        cards={cardsData}
        columns={{ xs: 12, sm: 6, md: 4, lg: 4, xl: 2 }}
      />
    </>
  );
}

export default App;
