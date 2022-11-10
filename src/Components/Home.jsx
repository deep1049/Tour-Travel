import Navbar from "./Navbar";
import Footer from "./Footer";
import "./styles/Home.css";
import DatePicker from "react-date-picker";
import { useState, useEffect } from "react";
const NAVS = [
  "Stays",
  "Flights",
  "Cars",
  "Packages",
  "Things to do",
  "Cruises",
];
const Home = () => {
  const [value, onChange] = useState(new Date());
  const [active, setActive] = useState("Stays");
  const IsActive = (data) => {
    if (active === data) {
      return "active";
    }
    return "";
  };
  return (
    <div className="main">
      <Navbar />
      <div className="Home">
        <div className="box1 fields-banner-wrapper">
          <img src="./images/home1.jpg" alt="background" />
          <div className="fields-wrapper">
            <div className="tabs">
              <ul>
                {NAVS.map((item) => {
                  return (
                    <li
                      className={IsActive(item)}
                      onClick={() => {
                        setActive(item);
                      }}
                    >
                      {item}
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="fields">
              <input placeholder="Going To" className="going" />
              <label>
                Check In
                <DatePicker onChange={onChange} value={value} />
              </label>
              <label>
                Check Out
                <DatePicker onChange={onChange} value={value} />
              </label>
              <select>
                <option value="" selected disabled hidden>
                  Select Travelers
                </option>
                <option value="1">1 traveler</option>
              </select>
            </div>
            <div>
              <label>
                <input type="checkbox" />
                Add a Flight
              </label>
              <label>
                <input type="checkbox" />
                Add a Car
              </label>
            </div>
            <div>
              <button>Search</button>
            </div>
          </div>
          <div></div>
        </div>
        <div className="box2">
          <div>
            <img src="/images/p1.jpg" alt="error" />
          </div>
          <div>
            <img src="/images/p2.jpg" alt="error" />
          </div>
          <div>
            <img src="/images/p3.jpg" alt="error" />
          </div>
        </div>
        <div className="box3">
          <h1>Featured offers</h1>
          <div className="pic">
            <div>
              <img src="/images/p4.jpg" alt="error" />
              <h2>Last Minute Deal</h2>
              <p>Get Away today </p>
            </div>
            <div>
              <img src="/images/p5.jpg" alt="error" />
              <h2>All Exclusive Resort</h2>
              <p>Enjoy sun and fun</p>
            </div>
            <div>
              <img src="/images/p6.jpg" alt="error" />
              <h2>Insider Prices</h2>
              <p>Members get Rewarded</p>
            </div>
            <div>
              <img src="/images/p7.jpg" alt="error" />
              <h2>Jet and reset</h2>
              <p>fly some where beachy and warm</p>
            </div>
          </div>
        </div>
        <div className="box4">
          <div>
            <img src="./images/p8.jpg" alt="error" />
            <p>Today's Top Deals</p>
            <h2>Vacations are even more rewarding with our best offer</h2>
          </div>
        </div>
        <div className="box5">
          <h1>Travelling Tips</h1>
          <div className="pic">
            <div>
              <img src="/images/p9.jpg" alt="error" />
              <h2>National Parks</h2>
              <p>There's plenty to keep you busy </p>
              <button>Learn more</button>
            </div>
            <div>
              <img src="/images/p10.jpg" alt="error" />
              <h2>The perfect road trip</h2>
              <p>Find the adventuruos for every trip</p>
              <button>Road on</button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default Home;
