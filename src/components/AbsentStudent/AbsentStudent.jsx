import React from "react";

const AbsentStudent = (props) => {
  return (
    <div>
      <h2>Absetn Students</h2>
      <div className="info_area">
        <table>
          <thead>
            <tr>
              <th>Name:</th>
              <th>Change</th>
            </tr>
          </thead>
          <tbody>
            {props.Student.filter((item) => item.isPresent === false).map(
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

export default AbsentStudent;
