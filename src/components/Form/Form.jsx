import React from "react";
import "./Form.css";

const Form = (props) => {
  //   console.log(props.studentName);
  const createStudentHandler = () => {
    if (props.studentName) {
      const newStudent = {
        id: Date.now(),
        name: props.studentName,
      };

      props.setStudent([...props.Student, newStudent]);
      props.setStudentName("");
    } else {
      alert("Please enter a valid name");
    }
  };
  const updateStudentHandler = () => {
    props.setStudent(
      props.Student.map((student) => {
        if (student.id === props.editableStudent.id) {
          student.name = props.studentName;
        }
        return student;
      })
    );
    props.setEditMod(false);
    props.setStudentName("");
    props.setEditableStudent(null);
  };
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        props.editMod ? updateStudentHandler() : createStudentHandler();
      }}
    >
      <input
        type="text"
        placeholder="Enter A Valid Name"
        value={props.studentName}
        onChange={(e) => props.setStudentName(e.target.value)}
      />
      <button className="add_btn">
        {" "}
        {props.editMod ? "Update Student" : "Add Student "}{" "}
      </button>
    </form>
  );
};

export default Form;
