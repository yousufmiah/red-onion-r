import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Breakfast from "./Pages/Home/Breakfast/Breakfast";
import Dinner from "./Pages/Home/Dinner/Dinner";
import Home from "./Pages/Home/Home/Home";
import Lunch from "./Pages/Home/Lunch/Lunch";
import Login from "./Pages/Login/Login/Login";
import Register from "./Pages/Login/Register/Register";
import Footer from "./Pages/Shared/Footer/Footer";
import Header from "./Pages/Shared/Header/Header";

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}>
          <Route path="/" element={<Breakfast></Breakfast>}></Route>
          <Route path="lunch" element={<Lunch></Lunch>}></Route>
          <Route path="dinner" element={<Dinner></Dinner>}></Route>
        </Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/signup" element={<Register></Register>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
