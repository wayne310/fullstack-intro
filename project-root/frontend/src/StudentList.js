function StudentList({ students }) {
  return (
    <div>
      <h2>Students</h2>
      {students.map((s, index) => (
        <p key={index}>
          {s.name} - {s.course}
        </p>
      ))}
    </div>
  );
}

export default StudentList;