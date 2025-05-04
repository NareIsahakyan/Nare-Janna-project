import "./i18n";
import "./App.css";
import Header from "./components/header/Header";
import UserRegistration from "./components/registration/UserRegistration";
import Taskbar from "./components/taskbar/Taskbar";
import Task from "./components/taskbar/Task";

function App() {
  return (
    <>
      <Header />
      {/* <UserRegistration /> */}
      {/* <Taskbar /> */}
      <Task />
    </>
  );
}

export default App;
