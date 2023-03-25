import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import Footer from "./app/Footer";
import NavBar from "./app/nav/NavBar";
import { setLocalUrls } from "./features/url/urlSlice";
import Features from "./pages/Features";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Pricing from "./pages/Pricing";
import Resources from "./pages/Resources";
import SignUp from "./pages/SignUp";
function App() {
  const dispatch = useDispatch();
  // get the urls from the localstorage when the app loads 
  useEffect(() => {
    const localUrls = JSON.parse(localStorage.getItem("urls"));
    if (localUrls !== null) {
      dispatch(setLocalUrls(localUrls));
    }
  }, []);

  console.log();
  return (
    <div className="overflow-hidden flex flex-col min-h-[100dvh]">
      <NavBar />
      <Routes>
        <Route path="/url-shortening-api/" element={<Home />} />
        <Route path="/url-shortening-api/features" element={<Features />} />
        <Route path="/url-shortening-api/pricing" element={<Pricing />} />
        <Route path="/url-shortening-api/resources" element={<Resources />} />
        <Route path="/url-shortening-api/login" element={<Login />} />
        <Route path="/url-shortening-api/signup" element={<SignUp />} />
        <Route path="/*" element={<Home />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
