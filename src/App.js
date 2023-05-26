import { Route, Routes } from "react-router-dom";
import { PrincipalScreen } from "./Components/PrincipalScreen/PrincipalScreen";
import { EasyMode } from "./Components/EaseMode/EasyMode";
import { NormalMode } from "./Components/NormalMode/NormalMode";
import "./App.css";
import { HardMode } from "./Components/HardMode/HardMode";

function App() {
  return (
    <Routes>
      <Route path="/" element={<PrincipalScreen />} />
      <Route path="/easy-mode" element={<EasyMode/>} />
      <Route path="/normal-mode" element={<NormalMode/>} />
      <Route path="/hard-mode" element={<HardMode/>}/>
    </Routes>
  );
}
export default App;
