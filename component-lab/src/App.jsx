import Header from "./components/Header";
import UserCard from "./components/UserCard";
import Footer from "./components/Footer";

function App() {

  const studentName = "Wayne";
  const studentCourse = "BSIT";

  return (
    <div>

      <Header title="Component-Based Architecture Lab" />

      <UserCard
        name={studentName}
        course={studentCourse}
      />

      <Footer />

    </div>
  );
}

export default App;