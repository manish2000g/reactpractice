import axios from "axios";
import { useState } from "react";

const Addlivestocks = () => {
  const [lname, setLname] = useState("");
  const [category, setCategory] = useState("");
  const [quantity, setQuantity] = useState("");
  const [price, setPrice] = useState("");

  const addlivestck = (e) => {
    e.preventDefault();
    const data = {
      lname: lname,
      category: category,
      quantity: quantity,
      price: price,
    };
    const config = {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    };
    axios
      .post("http://localhost:90/livestock/add", data, config)
      .then((response) => {
        console.log(response);
      })
      .catch();
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-4">
          <h2>Add Livestock </h2>

          <form>
            <div className="form-group">
              <label>Livestock</label>
              <input
                type="text"
                className="form-control"
                onChange={(e) => setLname(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label>Category</label>
              <input
                type="text"
                className="form-control"
                onChange={(e) => setCategory(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label>Quantity</label>
              <input
                type="text"
                className="form-control"
                onChange={(e) => setQuantity(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label>Price</label>
              <input
                type="text"
                className="form-control"
                onChange={(e) => setPrice(e.target.value)}
              />
            </div>

            <br></br>

            <div className="form-group">
              <button
                type="button"
                className="btn btn-dark"
                onClick={addlivestck}
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Addlivestocks;
