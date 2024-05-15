import axios from "axios";
import "./App.scss";
import Student from "./BT student/Student";
import Addstudent from "./BT student/Addstudent";
import EditStudent from "./BT student/EditStudent";
import { useEffect, useState } from "react";

export default function App() {
  const [students2, setStudents2] = useState([]);
  useEffect(() => {
    const getAllStudents = () => {
      axios
        .get("http://localhost:3000/students2")
        .then((res) => setStudents2(res.data))
        .catch((err) => console.log(err));
    };
    getAllStudents();
  }, []);

  const DeleteStudent = (id) => {
    console.log("delete", id);
    axios.delete(`http://localhost:3000/students2/${id}`);
    const index = students2.findIndex((item) => item.id == id);
    students2.splice(index, 1);
    setStudents2([...students2]);
  };

  const [toggleAdd, setToggleAdd] = useState(false);
  const handleToggleAdd = () => {
    setToggleAdd(!toggleAdd);
  };
  const handleSubmit = (event) => {
    setToggleAdd(true);
    setToggleEdit(false);
    event.preventDefault();
    console.log("dhdjsd");
    console.dir(event.target, "target");
    const newStudent = {
      id: Math.floor(Math.random() * 1000),
      studentsName: event.target[0].value,
      mail: event.target[1].value,
      address: event.target[2].value,
      phone: event.target[3].value,
      status: false,
    };
    axios
      .post("http://localhost:3000/students2", newStudent)
      .then(() => {
        setStudents2([...students2, newStudent]);
        console.log(newStudent, "resdata");
        event.target.reset();
      })
      .catch((err) => console.log(err));
    setToggleAdd(false);
    localStorage.setItem("students".JSON.stringify(students2));
  };

  const [toggleEdit, setToggleEdit] = useState(false);
  const handleToggleEdit = () => {
    setToggleEdit(!toggleEdit);
  };
  // const [student, setStudent] = useState(
  //   JSON.parse(localStorage.getItem("studentEdit")) || {}
  // );
  // const ediStudent = (id) => {
  //   setToggleAdd(false);
  //   setToggleEdit(true);
  //   // localStorage.getItem("studentEdit", JSON.stringify(id));
  //   const index = students2.findIndex((item) => item.id == id);
  //   console.log(index, "index");
  //   console.log(students2[index], "student");
  //   const student = {
  //     studentsName: students2[index].studentaName,
  //   };
  //   localStorage.setItem("studentEdit", JSON.stringify(student));
  //   setStudent(student);
  // };

  const handleEdited = (event, id) => {
    event.preventDefault();
    localStorage.getItem("studentEdit", JSON.stringify(id));
    const index = students2.findIndex((item) => item.id == id);
    // const student = JSON.parse(localStorage.getItem("student"));
    const indexEdit = students2.findIndex((ele) => ele.id == student.id);
    console.log(indexEdit, "indexEdit");
    axios
      .patch(`http://localhost:3000/students2/${student.id}`, {
        studentsName: event.target[0].value,
        mail: event.target[1].value,
        address: event.target[2].value,
        phone: event.target[3].value,
        status: true,
      })
      .then(() => {
        students2[indexEdit].studentsName = event.target[0].value;
        students2[indexEdit].mail = event.target[1].value;
        students2[indexEdit].address = event.target[2].value;
        students2[indexEdit].phone = event.target[3].value;
        setStudents2([...students2]);
        setToggleEdit(false);
        localStorage.setItem("students".JSON.stringify(students2));
      })
      .catch((err) => console.log(err, "error"));
  };

  return (
    <>
      <div id="app-table">
        {/* <Students /> */}
        <Student
          handleDelete={DeleteStudent}
          students2={students2}
          handleAdd={handleToggleAdd}
          handleToogleEdit={handleToggleEdit}
        />
      </div>
      <div id="app-form">
        {toggleAdd && <Addstudent handleSubmit={handleSubmit} />}
        {toggleEdit == true && (
          <EditStudent handleSubmitEdit={handleEdited} student={student} />
        )}
      </div>
    </>
  );
}
