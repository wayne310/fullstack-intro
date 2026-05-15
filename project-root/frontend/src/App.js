import { useEffect, useState } from "react";
import axios from "axios";
import StudentForm from "./StudentForm";
import StudentList from "./StudentList";

function App() {
  const [students, setStudents] = useState([]);

  const fetchStudents = async () => {
    const res = await axios.get("http://localhost:5000/students");
    setStudents(res.data);
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  return (
    <div>
      <h1>Student System</h1>
      <StudentForm fetchStudents={fetchStudents} />
      <StudentList students={students} />
    </div>
  );
}

export default App;