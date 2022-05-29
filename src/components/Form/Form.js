import React from "react";
import "./Form.css";
import update from "../../images/up.webp"


const Form = () => {
  return (
    <>
      <div className="updateproduct">
        <div className="inner">
          <div className="content">
            <h2 className="apheading">Update Product</h2>
            <input type="text" name="" placeholder="Product's Name"></input>
            <input type="number" name="" placeholder="Old Price"></input>
            <input type="number" name="" placeholder="New Price"></input>
            <input type="number" name="" placeholder="Quantity"></input>
            <textarea
              rows="4"
              cols="60"
              name="comment"
              form="usrform"
              placeholder="Enter text here..."
              className="desc"
            ></textarea>
            <input type="number" name="" placeholder="Stock"></input>
            <input type="number" name="" placeholder="Discount"></input>
            <input type="file" className="fileupload" name=""></input>
            <button className="updateproductbtn">Add Product</button>
          </div>
          <div className="imageseciton">
            <img src={update}  className="addpimage" alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Form;