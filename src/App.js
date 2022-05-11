import { useState } from "react";
import "./App.css";
import Form from "./components/Form/Form";
import StudentSection from "./components/StudentSection/StudentSection";

function App() {
  const [studentName, setStudentName] = useState("");
  const [Student, setStudent] = useState([]);
  const [editMod, setEditMod] = useState(false);
  const [editableStudent, setEditableStudent] = useState(null);
  return (
    <div className="App">
      <Form
        studentName={studentName}
        setStudentName={setStudentName}
        Student={Student}
        setStudent={setStudent}
        editMod={editMod}
        setEditMod={setEditMod}
        editableStudent={editableStudent}
        setEditableStudent={setEditableStudent}
      />
      <StudentSection
        setStudent={setStudent}
        Student={Student}
        setStudentName={setStudentName}
        studentName={studentName}
        setEditMod={setEditMod}
        setEditableStudent={setEditableStudent}
      />
    </div>
  );
}

export default App;
