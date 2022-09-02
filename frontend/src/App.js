import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { AddEmployee } from "./components/AddEmployee";
import { EditEmployee } from "./components/EditEmployee";
import { ListEmployees } from "./components/ListEmployees";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ListEmployees />} />
        <Route path="/addEmployee" element={<AddEmployee />} />
        <Route path="/editEmployee/:id" element={<EditEmployee />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
