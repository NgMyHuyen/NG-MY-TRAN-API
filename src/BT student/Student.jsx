import Table from "react-bootstrap/Table";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import DriveFileRenameOutlineIcon from "@mui/icons-material/DriveFileRenameOutline";

// export default function Student() {
//   const [students2, setStudents2] = useState([]);
//   useEffect(() => {
//     const getAllStudents = () => {
//       axios
//         .get("http://localhost:3000/students2")
//         .then((res) => setStudents2(res.data))
//         .catch((err) => console.log(err));
//     };
//     getAllStudents();
//   }, []);

//   return (
//     <>
//       <div id="div-all">
//         <header className="header">
//           <h4>Quan ly sinh vien</h4>
//           <button id="btn-header">Add new student</button>
//         </header>
//         <Table striped bordered hover variant="dark">
//           <thead>
//             <tr>
//               <th>
//                 <input type="checkbox" />
//               </th>
//               <th>#</th>
//               <th>Student Name</th>
//               <th>Email</th>
//               <th>Address</th>
//               <th>Phone</th>
//               <th>Action</th>
//             </tr>
//           </thead>
//           <tbody>
//             {students2.map((student, index) => {
//               <tr className="tr-of-td" key={students2.id}>
//                 <td>
//                   <input type="checkbox" />
//                 </td>
//                 <td>{index + 1}</td>
//                 <td>{student.studentName}</td>
//                 <td>{student.mail}</td>
//                 <td>{student.address}</td>
//                 <td>{student.phone}</td>
//                 <td>
//                   <span>
//                     <EditIcon
//                       className="btn-edit"
//                       style={{ color: "#e9e90e" }}
//                       // onclick={() => {
//                       //   handleEdit;
//                       // }}
//                     />
//                     <DeleteIcon
//                       className="btn-edit"
//                       style={{ color: "red" }}
//                       // onclick={() => {
//                       //   handleDelete;
//                       // }}
//                     />
//                   </span>
//                 </td>
//               </tr>;
//             })}
//           </tbody>
//         </Table>
//       </div>
//     </>
//   );
// }

export default function Student({
  handleDelete,
  handleToogleEdit,
  students2,
  handleAdd,
}) {
  return (
    <>
      <div id="div-all">
        <header className="header">
          <h4>Quan ly sinh vien</h4>
          <button id="btn-header" onClick={handleAdd}>
            Add new student
          </button>
        </header>
        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>
                <input type="checkbox" />
              </th>
              <th>#</th>
              <th>Student Name</th>
              <th>Email</th>
              <th>Address</th>
              <th>Phone</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {students2.map((student, index) => (
              <tr className="tr-of-td" key={student.id}>
                <td>
                  <input type="checkbox" />
                </td>
                <td>{index + 1}</td>
                <td>{student.studentsName}</td>
                <td>{student.mail}</td>
                <td>{student.address}</td>
                <td>{student.phone}</td>
                <td>
                  <span>
                    <DriveFileRenameOutlineIcon
                      className="btn-edit"
                      style={{ color: "#e9e90e", paddingRight: "20px" }}
                      onClick={handleToogleEdit}
                    />
                    <DeleteForeverIcon
                      className="btn-edit"
                      style={{ color: "red" }}
                      onClick={() => handleDelete(student.id)}
                    />
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </>
  );
}
