import Create from "./components/Create";
import Dashboard from "./components/Dashboard";
import { BrowserRouter as Router, Routes, Route } from "react-router";
import FormProvider from "./context/FormProvider";
import Update from "./components/Update";

const App = () => {
  return (
    <div className="bg-slate-900 h-screen text-slate-300 ">
      <Router>
        <FormProvider>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/create" element={<Create />} />
            <Route path="/update/:id" element={<Update />} />
          </Routes>{" "}
        </FormProvider>
      </Router>
    </div>
  );
};

export default App;
