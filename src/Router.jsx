import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomeSection from './pages/Home/homeSection';
import Characters from './pages/Characters/characters';
import Contact from './pages/Contact/contact';

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