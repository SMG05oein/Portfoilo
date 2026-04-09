import logo from './logo.svg';
import './App.css';
import {Route, Routes} from "react-router-dom";
import GNB from "./GNB/GNB";
import MainPage from "./Pages/MainPage/MainPage";
import ProjectPage from "./Pages/Project/ProjectPage";

function App() {
  return (
    <Routes>
        <Route path="/" element={<GNB/>} >
            <Route index element={<MainPage/>} />
            <Route path={"/project"} element={<ProjectPage/>} />
        </Route>
    </Routes>
  );
}

export default App;
