import img1 from "../assets/Sec2Image1.jpg";
import img2 from "../assets/Sec2Image2.jpg";
import "./SectionTwoStyle.css"; // Import your custom CSS
import image1 from "../assets/image1.jpg";
import image2 from "../assets/image2.jpg";
import image3 from "../assets/image3.jpg";
export default function SectionTwo() {
  return (
    <>
      <div className="container-fluid">
        <div className="row gx-4">
          <div className="col-12 col-md-6  ">
            <img
              src={img1}
              className="img-fluid img1-pos"
              alt="Description 1"
            />
            <img
              src={img2}
              className="img-fluid img2-pos"
              alt="Description 2"
            />
          </div>
          <div className="col-12 col-md-6">
            <h1 className="mt-md-5 ms-md-2">
              Present your work in a unique way 💪
            </h1>
            <p className="mt-md-3 ms-md-5 fs-4 ">
              Themebau has 1/2/3/4 columns layouts to showcase your work and
              collections. Choose between the 19 types of layouts to create your
              portfolio.
              <br />
              <button
                type="button"
                className="mt-3 ms-md-5 btn btn-dark ms-lg-3 w-auto VP_but"
              >
                View Pages &nbsp; <span className="dot">•</span>
              </button>
            </p>
          </div>
        </div>
      </div>
      <br />
      <div className="container-fluid ">
        <div className="d-flex justify-content-around flex-column flex-lg-row gap-5 gap-lg-2 ">
          <div className="border border-5 border-danger-subtle p-1">
            <img
              src={image3}
              className="img-fluid img1-pos mb-2"
              alt="Description 1"
            />
            <img
              src={image2}
              className="img-fluid img1-pos"
              alt="Description 1"
            />
          </div>
          <div className="border border-5 border-dark p-1  ">
            <img
              src={image2}
              className="img-fluid img1-pos mb-2"
              alt="Description 1"
            />
            <img
              src={image3}
              className="img-fluid img1-pos"
              alt="Description 1"
            />
          </div>
          <div className="border border-5 border-info p-1 ">
            <img
              src={image3}
              className="img-fluid img1-pos mb-2"
              alt="Description 1"
            />
            <img
              src={image1}
              className="img-fluid img1-pos"
              alt="Description 1"
            />
          </div>
          <div className="border border-5 border-danger-subtle p-1">
            <img
              src={image3}
              className="img-fluid img1-pos mb-2"
              alt="Description 1"
            />
            <img
              src={image2}
              className="img-fluid img1-pos"
              alt="Description 1"
            />
          </div>
          <div className="border border-5 border-dark p-1  ">
            <img
              src={image2}
              className="img-fluid img1-pos mb-2"
              alt="Description 1"
            />
            <img
              src={image3}
              className="img-fluid img1-pos"
              alt="Description 1"
            />
          </div>
          <div className="border border-5 border-info p-1 ">
            <img
              src={image3}
              className="img-fluid img1-pos mb-2"
              alt="Description 1"
            />
            <img
              src={image1}
              className="img-fluid img1-pos"
              alt="Description 1"
            />
          </div>
        </div>
      </div>
    </>
  );
}
