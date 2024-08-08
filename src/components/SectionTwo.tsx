import img1 from "../assets/Sec2Image1.jpg";
import img2 from "../assets/Sec2Image2.jpg";
import "./SectionTwoStyle.css"; // Import your custom CSS

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
      <br />

      <div className="container-fluid ">
        <div className="d-flex justify-content-around ">
          <div className="w-lg-15 w-md-100 w-sm-100 row h-250px gy-3 border border-4  ">
            <div className="col-12 h-auto border border-3 border-danger-subtle bg-secondary-subtle"></div>
            <div className="col-12 h-auto border border-3 border-dark-subtle bg-secondary-subtle"></div>
          </div>
          <div className="bg-body w-lg-15 w-md-100 w-sm-100">2</div>
          <div className=" bg-info w-lg-15 w-md-100 w-sm-100">3</div>
          <div className=" bg-black w-lg-15 w-md-100 w-sm-100">4</div>
          <div className="bg-dark-subtle w-lg-15 w-md-100 ">5</div>
          <div className="bg-danger w-lg-15 w-md-100 ">6</div>
        </div>
      </div>
    </>
  );
}
