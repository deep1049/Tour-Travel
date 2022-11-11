import { useState } from "react";

//name
//population
//country
//1.addcity
//2.API .jsx-->addCity
//3.Cities.jsx
function AddHotel({ handleAddHotel }) {
  const [formstate, setformstate] = useState({
    fullname: "",
    img: "",
    price: "",
    rating: "",
  });
  const handleChange = (e) => {
    // console.log(e.target.value);
    const { name, value, type } = e.target;
    const val = type === "number" ? Number(value) : value;
    setformstate({ ...formstate, [name]: val });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formstate);
    handleAddHotel({
      img: formstate.img,
      name: formstate.fullname,
      price: formstate.price,
      rating: formstate.rating,
      idtype: "combo",
    });
    setformstate({ fullname: "", img: "", price: "", rating: "" });
  };
  const { fullname, img, price, rating } = formstate;
  return (
    <div
      style={{
        padding: "20px",
        border: "1px solid black",
        display: "grid",
        width: "300px",
        margin: "auto",
      }}
    >
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name :</label>
          <input
            name="fullname"
            type="text"
            value={fullname}
            onChange={handleChange}
            placeholder="ADD HOTEL NAME"
          />
        </div>
        <div>
          <label>URL :</label>
          <input
            name="img"
            type="text"
            value={img}
            onChange={handleChange}
            placeholder="ADD url here"
          />
        </div>
        <div>
          <label>PRICE :</label>
          <input
            name="price"
            type="number"
            value={price}
            onChange={handleChange}
            placeholder="Enter price here"
          />
        </div>
        <div>
          <label>RATING :</label>
          <input
            name="rating"
            type="number"
            value={rating}
            onChange={handleChange}
            placeholder="Enter rating here"
          />
        </div>

        <input
          type="submit"
          value="ADD-HOTEL"
          style={{
            "margin-left": "60px",
            marginTop: "10px",
            color: "white",
            backgroundColor: "green",
            border: "0",
            height: "27px",
            width: "90px",
            "border-radius": "10px",
          }}
        />
      </form>
    </div>
  );
}
export default AddHotel;
