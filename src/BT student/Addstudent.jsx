import React from "react";

export default function Addstudent({ handleSubmit }) {
  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          <h2> Add New Student</h2>
          <div>
            <div>
              <label>Name</label>
              <input type="text" id="" />
            </div>
            <div>
              <label>Email</label>
              <input type="text" id="" />
            </div>
            <div>
              <label>address</label>
              <input type="text" id="" />
            </div>
            <div>
              <label>Phone</label>
              <input type="text" id="" />
            </div>
            <button id="btn-add" type="submit">
              Add
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
