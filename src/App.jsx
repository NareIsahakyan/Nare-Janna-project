import "./i18n";
import "./App.css";
import Header from "./components/header/Header";
import UserRegistration from "./components/registration/UserRegistration";
import Taskbar from "./components/taskbar/Taskbar";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import ATask from "./components/tasklist/ATask";
import AddNewTask from "./components/taskbar/AddNewTask";
import AddANewTask from "./components/addNewTask/AddANewTask";

function App() {
  return (
    <>
      <Header />
      {/* <UserRegistration /> */}
      {/* <DndProvider backend={HTML5Backend}>
        <Taskbar />
      </DndProvider> */}
      {/* <ATask /> */}
      {/* <AddNewTask /> */}
      <AddANewTask />
    </>
  );
}

export default App;
