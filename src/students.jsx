import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Students() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const getAllStudent = () => {
      axios
        .get("http://localhost:3000/students")
        .then((res) => setStudents(res.data))
        .catch((err) => console.log(err));
    };
    getAllStudent();
  }, []);

  return (
    <div>
      {students.map((student, index) => {
        return (
          // <div key={students.id}>
          //   <span>{index + 1}</span>
          //   <h4>Name: {student.studentName}</h4>
          //   <p>Age: {student.age}</p>
          //   <p>Gender: {student.gender}</p>
          // </div>
          <ul>
            <li key={students.id}>
              <span>{index + 1}</span>
              <h4>Name: {student.studentsName}</h4>
              <p>Age: {student.age}</p>
              <p>Gender: {student.gender}</p>
            </li>
          </ul>
        );
      })}
    </div>
  );
}
