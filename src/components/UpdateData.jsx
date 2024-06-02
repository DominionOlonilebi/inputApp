import React, { useState, useContext } from "react";
import { MyContext } from "../StoreContext/context";

const UpdateData = () => {
  const { data, setData } = useContext(MyContext);
  const [newTitle, setNewTitle] = useState("");

  console.log(data, "my data");
  console.log(newTitle, "my data");

  const handleUpdate = (event) => {
    event.preventDefault();
    setData({ title: newTitle });
  };

  return (
    <section className="input_section">
      <div className="container">
        <div className="row">
          <div className="col">
            <form onSubmit={handleUpdate} className="form-group ">
              <h4 className="text-center">{data.title}</h4>
              <input
                type="text"
                value={newTitle}
                onChange={(event) => setNewTitle(event.target.value)}
                className="form-control mb-3 inputs"
                placeholder="Input text..."
              />
              <button type="submit" className="form-control submit_btn">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UpdateData;
