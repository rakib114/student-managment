import React from "react";
import "./PresentStudent.css";

const PresentStudent = (props) => {
  return (
    <div>
      <h2>Present Students</h2>
      <div className="info_area">
        <table>
          <thead>
            <tr>
              <th>Name:</th>
              <th>Change</th>
            </tr>
          </thead>
          <tbody>
            {props.Student.filter((item) => item.isPresent === true).map(
              (student) => (
                <tr>
                  <td> {student.name} </td>
                  <td>
                    <button
                      className="mini-btn chng-btn"
                      onClick={() => props.toggleHandler(student.id)}
                    >
                      Accidently Add
                    </button>
                  </td>
                </tr>
              )
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PresentStudent;
