import { useState } from "react";
import axios from "axios";

function StudentForm({ fetchStudents }) {
  const [form, setForm] = useState({ name: "", course: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:5000/students", form);
    setForm({ name: "", course: "" });
    fetchStudents();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="name"
        placeholder="Name"
        value={form.name}
        onChange={handleChange}
      />
      <input
        name="course"
        placeholder="Course"
        value={form.course}
        onChange={handleChange}
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default StudentForm;