import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./views/Home";
import Details from "./components/Details";
import DataProvider from "./context/DataContext";

const App = () => {

  return (
    <DataProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/people/:id" element={ <Details type='people' />} />
          <Route path="/vehicles/:id" element={ <Details type='vehicles' />} />
          <Route path="/planets/:id" element={ <Details type='planets' />} />
        </Routes>
      </Router>
    </DataProvider>
  );
};

export default App;
