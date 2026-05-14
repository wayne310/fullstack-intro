function UserCard(props) {
  return (
    <div className="card">
      <h2>Name: {props.name}</h2>
      <p>Course: {props.course}</p>
    </div>
  );
}

export default UserCard;