import "./SectionTwoStyle.css";
import image1 from "../assets/image1.jpg";
import image2 from "../assets/image2.jpg";
import image3 from "../assets/image3.jpg";
import ImageCard from "./ImageCard";

export default function SectionTwo_B() {
  return (
    <div className="d-flex justify-content-around flex-column flex-lg-row gap-5 gap-lg-2">
      <ImageCard
        imageTop={image3}
        imageBottom={image2}
        borderClass="border-danger-subtle"
      />
      <ImageCard
        imageTop={image2}
        imageBottom={image3}
        borderClass="border-dark"
      />
      <ImageCard
        imageTop={image3}
        imageBottom={image1}
        borderClass="border-info"
      />
      <ImageCard
        imageTop={image3}
        imageBottom={image2}
        borderClass="border-danger-subtle"
      />
      <ImageCard
        imageTop={image2}
        imageBottom={image3}
        borderClass="border-dark"
      />
      <ImageCard
        imageTop={image3}
        imageBottom={image1}
        borderClass="border-info"
      />
    </div>
  );
}
