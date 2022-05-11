import React from "react";
import "./AllStudent.css";

const Allstudent = (props) => {
  const editHandelar = (id) => {
    const toBeEditStudent = props.Student.find((item) => item.id === id);
    props.setEditMod(true);
    props.setStudentName(toBeEditStudent.name);
    props.setEditableStudent(toBeEditStudent);
  };
  const deleteHanlder = (id) => {
    props.setStudent(props.Student.filter((item) => item.id !== id));
  };
  const presentHandler = (id) => {
    const student = props.Student.find((item) => item.id === id);
    if (student.isPresent === true) {
      alert("The Student is already add in the present list");
    } else if (student.isPresent === false) {
      alert("The Student is already add in the absent list");
    } else if (student.isPresent === undefined) {
      props.setStudent(
        props.Student.map((item) => {
          if (item.id === student.id) {
            item.isPresent = true;
          }
          return item;
        })
      );
    }
  };
  const absentHanlder = (id) => {
    const student = props.Student.find((item) => item.id === id);
    if (student.isPresent === true) {
      alert("The Student is already add in the present list");
    } else if (student.isPresent === false) {
      alert("The Student is already add in the absent list");
    } else if (student.isPresent === undefined) {
      props.setStudent(
        props.Student.map((item) => {
          if (item.id === student.id) {
            item.isPresent = false;
          }
          return item;
        })
      );
    }
  };
  return (
    <div>
      <h2>All Added Student</h2>
      <div className="info_area">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Edit</th>
              <th>Delete</th>
              <th>Add to Present</th>
              <th>Add to Absent</th>
            </tr>
          </thead>
          <tbody>
            {props.Student.map((student) => (
              <tr>
                <td>{student.name}</td>
                <td>
                  <button
                    className="mini-btn edt-btn"
                    onClick={() => editHandelar(student.id)}
                  >
                    Edit
                  </button>
                </td>
                <td>
                  <button
                    className="mini-btn dlt-btn"
                    onClick={() => deleteHanlder(student.id)}
                  >
                    Delete
                  </button>
                </td>
                <td>
                  <button
                    className="mini-btn prsnt-btn"
                    onClick={() => presentHandler(student.id)}
                  >
                    Prsent
                  </button>
                </td>
                <td>
                  <button
                    className="mini-btn absnt-btn"
                    onClick={() => absentHanlder(student.id)}
                  >
                    Absent
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Allstudent;
