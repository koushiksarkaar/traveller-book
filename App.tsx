import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { SiteProvider } from "./context/SiteContext";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Destinations from "./pages/Destinations";
import Services from "./pages/Services";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Admin from "./pages/Admin";

const AppLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen font-sans text-gray-800">
      {/* We conditionally render Navbar/Footer inside specific pages or check route, 
          but usually Admin has its own layout. Here we show Nav/Footer everywhere 
          except Admin dashboard can optionally hide it. For simplicity, we keep navbar. */}
      <Navbar />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
};

const App: React.FC = () => {
  return (
    <SiteProvider>
      <Router>
        <Routes>
          {/* Admin Route - Does not use standard layout inside component if desired, 
              but for this structure, we'll wrap everything and let Admin page handle its full screen needs if CSS allows, 
              or simpler: just wrap non-admin pages. Let's wrap all for consistent nav. */}
          
          <Route path="/admin" element={
              <Admin />
          } />

          <Route path="/" element={<AppLayout><Home /></AppLayout>} />
          <Route path="/about" element={<AppLayout><About /></AppLayout>} />
          <Route path="/destinations" element={<AppLayout><Destinations /></AppLayout>} />
          <Route path="/services" element={<AppLayout><Services /></AppLayout>} />
          <Route path="/blog" element={<AppLayout><Blog /></AppLayout>} />
          <Route path="/contact" element={<AppLayout><Contact /></AppLayout>} />
        </Routes>
      </Router>
    </SiteProvider>
  );
};

export default App;
