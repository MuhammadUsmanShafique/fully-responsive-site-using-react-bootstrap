import img1 from "../assets/Sec2Image1.jpg";
import img2 from "../assets/Sec2Image2.jpg";
export default function SectionTwo() {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <img src={img1} className="w-50%" />
          <br />
          <img src={img2} />
        </div>
        <div className="col">
          <h1>Present your work in unique way 💪</h1>
          <p>
            Themebau has 1/2/3/4 columns layouts to showcase your work and
            collections. Choose between the 19 types of layouts to create your
            portfolio.
          </p>
        </div>
      </div>
    </div>
  );
}
