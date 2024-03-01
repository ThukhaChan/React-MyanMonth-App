import { Link } from "react-router-dom";
import month22 from "../src/paint/tiii.jpg";
import month6 from "../src/paint/key.jpg";
import jay from "../src/paint/jay.jpg";
import hay from "../src/paint/hay.jpg";
import "./Home.css";
import Carousel from "react-multi-carousel";
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
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
const Home = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-12 my-5 py-3">
          <h2 className="text-center">
            <span className="p-3 shadow rounded">
              မြန်မာ ဆယ့်နှစ်လများ
            </span>
          </h2>
        </div>
        <div className="row justify-content-between">
          {/* div Photo */}
          <div className="col-lg-8 p-lg-3 shadow-lg">
            <Carousel responsive={responsive} autoPlay={true} autoPlaySpeed={3000} infinite={true}
              removeArrowOnDeviceType={["tablet", "mobile","desktop"]}
            >
              <img
                src={month22}
                alt="Image"
                className="img-fluid w-100"
                style={{ objectFit: "cover" }}
              />
              <img
                src={month6}
                alt="Image"
                className="img-fluid w-100"
                style={{ objectFit: "cover" }}
              />
              <img
                src={hay}
                alt="Image"
                className="img-fluid w-100"
                style={{ objectFit: "cover" }}
              />
              <img
                src={jay}
                alt="Image"
                className="img-fluid w-100"
                style={{ objectFit: "cover" }}
              />
            </Carousel>
          </div>
          <div className="col-lg-4 p-lg-3"  style={{overflowY: "auto",height:"80vh" }}>
            <div className="col-lg-12 p-3  rounded mb-3 shadow">(၁) တန်ခူးလ သင်္ကြန်ပွဲ</div>
            <div className="col-lg-12 p-3  rounded mb-3 shadow">(၂) ကဆုန်လ ညောင်ရေသွန်းပွဲ</div>
            <div className="col-lg-12 p-3  rounded mb-3 shadow">(၃) နယုန်လ စာပြန်ပွဲ </div>
            <div className="col-lg-12 p-3  rounded mb-3 shadow">(၄) ဝါဆိုလ ဝါဆိုပွဲ</div>
            <div className="col-lg-12 p-3  rounded mb-3 shadow">(၅) ဝါခေါင်လ စာရေးတံမဲပွဲ</div>
            <div className="col-lg-12 p-3  rounded mb-3 shadow">(၆) တော်သလင်းလ လှေပြိုင်ပွဲ</div>
            <div className="col-lg-12 p-3  rounded mb-3 shadow">(၇) သီတင်းကျွတ်လ မီးထွန်းပွဲ</div>
            <div className="col-lg-12 p-3  rounded mb-3 shadow">(၈) တန်ဆောင်မုန်းလ ကထိန်ပွဲ </div>
            <div className="col-lg-12 p-3  rounded mb-3 shadow">(၉) နတ်တော်လ စာဆိုတော်ပွဲ</div>
            <div className="col-lg-12 p-3  rounded mb-3 shadow">(၁၀) ပြာသိုလ မြင်းခင်းပွဲ </div>
            <div className="col-lg-12 p-3  rounded mb-3 shadow">(၁၁) တပို့တွဲလ ထမနဲပွဲ </div>
            <div className="col-lg-12 p-3  rounded mb-3 shadow">(၁၂) တပေါင်းလ သဲပုံစေတီပွဲ </div>
          </div>
        </div>
        <div className="text-left mt-3 p-3">
        <Link to={"/Months"} className="btn btn-outline-dark">
          နောက်စာမျက်နှာသို့
        </Link>
      </div>
      </div>
    </div>
  );
};

export default Home;
