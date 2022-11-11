import axios from "axios";
import { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "./styles/searchPage.css";

function SearchHotel() {
  const [Data, setData] = useState([]);
  const [loading, setloading] = useState(false);
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
  }, []);
  // if (loading) {
  //   return <h1>Loading...</h1>;
  // }
  return (
    <div className="searchPage">
      <Navbar />
      {/* <h1>Searchpage</h1> */}
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
              // className="add-to-cart"
              // onClick={() => {
              //   AddToCart(item);
              // }}
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
