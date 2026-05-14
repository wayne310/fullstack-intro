import Welcome from "./components/Welcome";
import UserCard from "./components/UserCard";

export default function App() {
  return (
    <div>
      <Welcome />

      <UserCard name="Dharam" email="dharam@gmail.com" />
      <UserCard name="Rahul" email="rahul@gmail.com" />
    </div>
  );
}