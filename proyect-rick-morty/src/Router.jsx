import { BrowserRouter, Routes, Route } from "react-router-dom";
import Characters from "./pages/Characters/Characters";
import Contact from "./pages/Contact/Contact";
import HomeSection from "./pages/Home/HomeSection";

export default function RouterSite() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeSection />} />
        <Route path="/Characters" element={<Characters />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}
