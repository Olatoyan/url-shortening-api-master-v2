import { Route, Routes } from "react-router-dom";
import HomeDetails from "./components/HomeDetails";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomeDetails />} />
    </Routes>
  );
}

export default App;
