import { useEffect } from "react";
import {
  BrowserRouter,
  Outlet,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import BlogPage from "@/app/blog/page";
import ContactPage from "@/app/contact/page";
import CorporatesPage from "@/app/corporates/page";
import HomePage from "@/app/page";
import PartnershipsPage from "@/app/partnerships/page";
import ProfessionalsPage from "@/app/professionals/page";
import ProgramsPage from "@/app/programs/page";
import StudentsPage from "@/app/students/page";
import UniversitiesPage from "@/app/universities/page";

function ScrollManager() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) {
      const el = document.getElementById(hash.slice(1));
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
        return;
      }
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);
  return null;
}

function Layout() {
  return (
    <>
      <ScrollManager />
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/corporates" element={<CorporatesPage />} />
          <Route path="/partnerships" element={<PartnershipsPage />} />
          <Route path="/professionals" element={<ProfessionalsPage />} />
          <Route path="/programs" element={<ProgramsPage />} />
          <Route path="/students" element={<StudentsPage />} />
          <Route path="/universities" element={<UniversitiesPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
