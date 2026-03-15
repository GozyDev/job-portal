import { BrowserRouter, Routes, Route } from "react-router-dom";

import JobsPage from "./pages/JobsPage";
import JobDetailsPage from "./pages/JobDetailsPage";

import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import Navbar from "./components/Mobilenavbar";
export default function App() {
  return (
    <BrowserRouter>
      <div className="">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/jobs" element={<JobsPage />} />
          <Route path="/jobs/:id" element={<JobDetailsPage />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
