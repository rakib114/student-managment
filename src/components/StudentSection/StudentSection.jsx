import React from "react";
import AbsentStudent from "../AbsentStudent/AbsentStudent";
import Allstudent from "../AllStudent/Allstudent";
import PresentStudent from "../PresentStudent/PresentStudent";
import "./StudentSection.css";

const StudentSection = (props) => {
  const toggleHandler = (id) => {
    const student = props.Student.find((item) => item.id === id);

    props.setStudent(
      props.Student.map((item) => {
        if (item.id === student.id) {
          item.isPresent = !item.isPresent;
        }
        return item;
      })
    );
  };
  return (
    <div className="student__section">
      <div className="all _student">
        <Allstudent
          setStudent={props.setStudent}
          Student={props.Student}
          setStudentName={props.setStudentName}
          studentName={props.studentName}
          setEditMod={props.setEditMod}
          setEditableStudent={props.setEditableStudent}
        />
      </div>
      <div className="added_section">
        <div className="presetn _student">
          <PresentStudent
            Student={props.Student}
            toggleHandler={toggleHandler}
          />
        </div>
        <div className="absent _student">
          <AbsentStudent
            Student={props.Student}
            toggleHandler={toggleHandler}
          />
        </div>
      </div>
    </div>
  );
};

export default StudentSection;
