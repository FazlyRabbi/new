// Fazly Rabbi : New Version of Navbar 08/11/2022
import { Routes, Route } from "react-router-dom";

//importing pages
import Home from "./page/Home/Home";
import HomeN from "./page/nestedPages/HomeN";
import Administration from "./page/nestedPages/Administration";
import PresidentMsg from "./page/nestedPages/PresidentMsg";
import HeadTeacherMsg from "./page/nestedPages/HeadTeacherMsg";
import History from "./page/nestedPages/History";
import DonorFounder from "./page/nestedPages/DonorFounder";
import Mission from "./page/nestedPages/Mission";
import MasterPlan from "./page/nestedPages/MasterPlan";
import Students from "./page/nestedPages/Students";
import ResultSummery from "./page/nestedPages/ResultSummery";
import OnlineActivity from "./page/nestedPages/OnlineActivity";
import Gallery from "./page/nestedPages/Gallery";
import SchoolMagazine from "./page/nestedPages/SchoolMagazine";
import Contact from "./page/nestedPages/Contact";
import Physical from "./page/nestedPages/Physical";
import Ictlab from "./page/nestedPages/Ictlab";
import ScienceLab from "./page/nestedPages/ScienceLab";
import AcademicCelender from "./page/nestedPages/AcademicCelender";



// importing css code
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path={"/"} element={<Home />}>
        <Route index element={<HomeN />} />
        <Route path={"/administration"} element={<Administration />} />
        <Route path={"/president"} element={<PresidentMsg />} />
        <Route path={"/headteachermsg"} element={<HeadTeacherMsg />} />
        <Route path={"/history"} element={<History />} />
        <Route path={"/donorfounder"} element={<DonorFounder />} />
        <Route path={"/mission"} element={<Mission />} />
        <Route path={"/masterplan"} element={<MasterPlan />} />
        <Route path={"/students"} element={<Students />} />
        <Route path={"/result"} element={<ResultSummery />} />
        <Route path={"/onlineactivity"} element={<OnlineActivity />} />
        <Route path={"/gallery"} element={<Gallery />} />
        <Route path={"/schoolmagazine"} element={<SchoolMagazine />} />
        <Route path={"/contact"} element={<Contact />} />
        <Route path={"/physical"} element={<Physical />} />
        <Route path={"/ictlab"} element={<Ictlab />} />
        <Route path={"/sciencelab"} element={<ScienceLab />} />
        <Route path={"/academic"} element={<AcademicCelender />} />
      </Route>
    </Routes>
  );
}

export default App;
