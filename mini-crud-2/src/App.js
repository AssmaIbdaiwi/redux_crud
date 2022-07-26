import Add from "./Admin/Add";
import { BrowserRouter,
  Routes,
  Route,} from 'react-router-dom'
import Home from "./Admin/Home";
import View from "./Admin/View";
import Update from "./Admin/Update";
import Nav from "./Admin/layout/Nav";
import Login from "./Admin/Login";
import './App.css';
function App() {
  return (
    <BrowserRouter>
      <Nav />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/View" element={<View />} />
        <Route path="/edit/:id" element={<Update />} />

        <Route path="/add" element={<Add />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
