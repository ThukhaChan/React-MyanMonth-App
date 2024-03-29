import Carousel from "react-multi-carousel";
import "./MonthsList.css";
import { Link } from "react-router-dom";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};
const MonthsList = ({ months }) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-12 py-5">
          <h1 className="text-center">
            <span className="bg-black text-white p-3 rounded-5">
              မြန်မာလအသေးစိတ်များ
            </span>
          </h1>
        </div>
      </div>

      <div className="row">
        <div className="col-lg-12 ">
          <Carousel responsive={responsive}
          >
            {months.map(
              (month) => (
                (
                  <div className="px-3" key={month.id}>
                    <Link to={`/months/${month.id}`}>
                      <div
                        className="square-card position-relative"
                        style={{
                          height: "300px",
                          width: "100%",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          borderRadius: "10px",
                        }}
                      >
                        <img
                          src={require(`./img/${month.id}.jpg`)}
                          alt={month.MonthEn}
                          className=""
                          style={{
                            objectFit: "cover",
                            backgroundRepeat: "no-repeat",
                            width: "100%",
                            height: "300px",
                          }}
                        />
                        <div className="d-flex justify-content-center align-items-center position-absolute text-white fs-2">
                          {month.MonthMm}
                        </div>
                      </div>
                    </Link>
                  </div>
                )
              )
            )}
          </Carousel>
        </div>
      </div>
      <div className="text-left mt-3 p-3">
        <Link to={"/"} className="btn btn-outline-dark">
          ရှေ့သို့
        </Link>
      </div>
    </div>
  );
};

export default MonthsList;
