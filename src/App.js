import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Menu from "./pages/Menu";
import Pagenotfound from "./pages/Pagenotfound";
import RegistrationPage from "./pages/ResgistrationPage";
import Signin from "./pages/Signin"
import Product1 from "./data/Data";
import Profile from "./profile";
import MyCart from "./pages/AddToCart";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/AddToCart" element={<MyCart/>} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/RegistrationPage" element={<RegistrationPage />} />
          <Route path="*" element={<Pagenotfound />} />
          <Route path="hg" element={<Home/>} />
        </Routes>
        {/* <Product1></Product1> */}
      </BrowserRouter>
    </div>
  );
}

export default App;