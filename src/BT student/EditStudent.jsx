import React from "react";

export default function EditStudent({ student, handleSubmitEdit }) {
  return (
    <>
      <div>
        <form onSubmit={handleSubmitEdit}>
          <h2> Edit</h2>
          <div key={student.id}>
            <div>
              <label>Name</label>
              <input type="text" id="" defaultValue={student.studentsName} />
            </div>
            <div>
              <label>Email</label>
              <input type="text" id="" defaultValue={student.mail} />
            </div>
            <div>
              <label>address</label>
              <input type="text" id="" defaultValue={student.address} />
            </div>
            <div>
              <label>Phone</label>
              <input type="text" id="" defaultValue={student.phone} />
            </div>
            <button id="btn-add" type="submit">
              Edit
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
