import image1 from "../assets/t1.jpg";
import image2 from "../assets/t2.jpg";
import image3 from "../assets/t3.jpg";
import image4 from "../assets/t4.jpg";
import image5 from "../assets/t5.jpg";
import image6 from "../assets/t6.jpg";

import CardsCollection from "./CardsCollection";
import Navbar from "./Navbar";
import "../App.css";

const cardsData = [
  { image: image1, text: "Card 1" },
  { image: image2, text: "Card 2" },
  { image: image3, text: "Card 3" },
  { image: image4, text: "Card 4" },
  { image: image5, text: "Card 5" },
  { image: image6, text: "Card 6" },
  { image: image1, text: "Card 7" },
  { image: image2, text: "Card 8" },
  { image: image3, text: "Card 9" },
  { image: image4, text: "Card 10" },
  { image: image5, text: "Card 11" },
];

export default function TopSection() {
  return (
    <div className="bg-black">
      <Navbar />
      <div className="container text-center text-white position-relative">
        <div
          className="circle bg-dark d-lg-block d-none"
          style={{
            height: "350px",
            width: "350px",
            zIndex: "2",
            borderRadius: "50%",
            margin: "0 auto",
          }}
        ></div>
        <h1 className="display-1 position-relative" style={{ zIndex: "3" }}>
          Themebau.
        </h1>
        <p
          className="position-relative fs-5 text-justify"
          style={{ zIndex: "3" }}
        >
          Themebau is a stylish universal template for all your projects &
          creative output. Minimalistic and easy to use, it has everything you
          need to launch your website.
        </p>
      </div>
      <div className="my-5">
        <CardsCollection
          cards={cardsData}
          columns={{ xs: 12, sm: 6, md: 4, lg: 4, xl: 4 }}
        />
      </div>
    </div>
  );
}
