import axios from "axios";
import { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "./styles/searchPage.css";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import Popup from "reactjs-popup";
import { useAlert } from "react-alert";

function SearchHotel() {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const [Data, setData] = useState([]);
  const [open, setOpen] = useState(false);
  const [chosenPlace, setChosenPlace] = useState({});
  const [loading, setloading] = useState(false);
  const MyAlert = useAlert();
  const navigateTo = useNavigate();
  const fetchdata = async () => {
    try {
      const result = await axios.get("http://localhost:3003/hotels");
      console.log("Data", result.data);
      if (result) {
        setData(result.data);
        // setloading(false);
        // console.log("Data", Data);
      } else {
        console.log("something wrong");
      }
    } catch (error) {
      console.log("error", error);
    }
  };
  useEffect(() => {
    // This is placed inside
    fetchdata();
    //
    //
  }, []);
  // if (loading) {
  //   return <h1>Loading...</h1>;
  // }
  const Checkout = (item) => {
    console.log("checkout", item);
    setOpen(true);
    setChosenPlace(item);
  };
  const PayNow = () => {
    MyAlert.show(`Your booking confirmed for ${chosenPlace.name}`);
    setChosenPlace({});
    setOpen(false);
    navigateTo("/");
  };
  return (
    <div className="searchPage">
      <Navbar />
      <h1>{params.get("city")} Locations</h1>
      <Popup
        className="cust-popup"
        open={open}
        onClose={() => {
          setOpen(false);
          setChosenPlace({});
        }}
        modal
      >
        <div className="checkout">
          <h2>
            Your Payment Options{" "}
            <span
              onClick={() => {
                setOpen(false);
                setChosenPlace({});
              }}
            >
              &times;
            </span>
          </h2>
          <div className="checkout-content">
            <div className="head">
              <img src="images/pay-badge.svg" />
              <div className="side">
                <strong>Fully refundable</strong>
                <span>
                  You can change or cancel this stay if plans change. Because
                  flexibility matters.
                </span>
              </div>
            </div>
            <div className="body">
              <div className="chosen-place">
                Booking: <strong>{chosenPlace.name}</strong>
              </div>
              <div className="item">
                <div className="sub-head">
                  <strong>Pay now</strong>
                  <div className="aside">
                    <ul>
                      <li>
                        We will process your payment in your local currency
                      </li>
                    </ul>
                    <div className="charge">
                      <label>₹{chosenPlace.price}</label>
                      <span>₹{chosenPlace.price} total</span>
                      <button onClick={PayNow}>Pay Now</button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="sub-head">
                  <strong>Pay when you stay</strong>
                  <div className="aside">
                    <ul>
                      <li>You will not be charged until your stay</li>
                      <li>Pay the property directly in their local currency</li>
                    </ul>
                    <div className="charge">
                      <label>₹{chosenPlace.price}</label>
                      <span>₹{chosenPlace.price} total</span>
                      <button disabled>Pay at property</button>
                      <small>Payment mode not available</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Popup>
      <div className="products">
        {Data.map((item) => {
          return (
            <div className="rooms">
              <div>
                <img src={item.img} />
              </div>
              <div className="name">
                <h1>{item.name}</h1>
                <br />
                <h2>Rating :{item.rating}</h2>
              </div>
              {/* <div className="rating">
                
              </div> */}
              <div className="price">
                <h2>Price</h2>
                <h1>Rs.{item.price}</h1>
              </div>

              <button
                onClick={() => {
                  Checkout(item);
                }}
              >
                Add To Cart
              </button>
            </div>
          );
        })}
      </div>
      <Footer />
    </div>
  );
}
export default SearchHotel;
