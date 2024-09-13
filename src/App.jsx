import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Service from './pages/Service';
import Media from './pages/Media';
import Review from './pages/Review';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Home/>}
        />
        <Route
          path="/services"
          element={<Service/>}
        />
        <Route
          path="/media"
          element={<Media/>}
        />
        <Route
          path="/reviews"
          element={<Review/>}
        />
        <Route
          path="/contact"
          element={<Contact/>}
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App; 