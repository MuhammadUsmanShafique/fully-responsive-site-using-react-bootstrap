import image1 from "../assets/1.jpeg";
import CardsCollection from "./CardsCollection";
import Navabar from "./Navbar";
import "../App.css";
const cardsData = [
  { image: image1, text: "Card 1" },
  { image: image1, text: "Card 2" },
  { image: image1, text: "Card 3" },
  { image: image1, text: "Card 4" },
  { image: image1, text: "Card 5" },
  { image: image1, text: "Card 6" },
  { image: image1, text: "Card 7" },
  { image: image1, text: "Card 8" },
  { image: image1, text: "Card 9" },
  { image: image1, text: "Card 10" },
  { image: image1, text: "Card 11" },
  { image: image1, text: "Card 12" },
];

export default function TopSection() {
  return (
    <div className="bg-black">
      <Navabar />
      <div className="container text-center text-white position-relative">
        <div className="circle  bg-dark h-300px" style={{ zIndex: "2" }}></div>
        <h1 className="font80px position-relative" style={{ zIndex: "4" }}>
          Themebau.
        </h1>
        <p className="position-relative fs-4" style={{ zIndex: "4" }}>
          Themebau is a stylish universal template for all your projects &
          creative output. Minimalistic and easy to use, it has everything you
          need to launch your website.
        </p>
      </div>
      <br />
      <br />
      <br />
      <br />
      <CardsCollection
        cards={cardsData}
        columns={{ xs: 12, sm: 6, md: 4, lg: 3, xl: 2 }}
      />
    </div>
  );
}
