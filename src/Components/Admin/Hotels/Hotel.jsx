import { useState, useEffect } from "react";
import { useAlert } from "react-alert";
import Navbar from "../../Navbar";
import AddHotel from "./AddHotel";
import { getHotel, AddCityPost, DeleteCity } from "./api";

function Hotel() {
  // loading, error;
  const [data, setData] = useState([]);
  //1. maintain page state and initialistaion with 1
  const [page, setpage] = useState(1);
  const MyAlert = useAlert();
  const handlegetHotel = (page) => {
    getHotel({
      page: page,
      limit: 5,
      sort: "name",
      order: "asc",
    }).then((res) => setData(res.data));
  };
  useEffect(() => {
    //stop hardcoding page number and use page state
    //useeffect will be called again and again and the new data is update
    handlegetHotel(page);
    // add page as dependenecy
  }, [page]);
  const handleAddHotel = (data) => {
    //make post request here
    //addCity(data)
    AddCityPost(data);
    MyAlert.show("Hotel Added!");
    handlegetHotel(page);
  };
  const handleDeleteHotel = (id) => {
    DeleteCity(id);
    MyAlert.show("Hotel Deleted");
    handlegetHotel(page);
  };
  console.log("hello");
  return (
    <div>
      <Navbar />
      <h1 style={{ marginLeft: "700px" }}> Hotels </h1>
      <AddHotel handleAddHotel={handleAddHotel} />
      <div style={{ "margin-left": "500px", "margin-top": "30px" }}>
        <h2>Hotel List</h2>
        {data.map((city) => (
          <div key={city.id}>
            <span>
              <p>{city.name}</p>
              <button
                onClick={() => handleDeleteHotel(city.id)}
                style={{
                  "margin-left": "60px",
                  marginTop: "10px",
                  color: "white",
                  backgroundColor: "red",
                  border: "0",
                  height: "22px",
                  width: "80px",
                  "border-radius": "10px",
                }}
              >
                Delete
              </button>
            </span>
          </div>
        ))}
        <button disabled={page <= 1} onClick={() => setpage(page - 1)}>
          PREV
        </button>
        <button disabled={true}>{page}</button>
        <button disabled={data === null} onClick={() => setpage(page + 1)}>
          NEXT
        </button>
      </div>
    </div>
  );
}

export default Hotel;
