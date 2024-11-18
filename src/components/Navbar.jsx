import React, { useState, useEffect } from "react";
import { Link as RouterLink, useLocation, useNavigate } from "react-router-dom";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

const navLinks = [
  { title: "About", path: "about" },
  { title: "Skills", path: "skills" },
  { title: "Projects", path: "projects" },
  { title: "Contact", path: "contact" },
];

function Navbar() {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const navbarHeight = 90; // Adjust this value based on your navbar height

  // Handle scroll for styling the navbar
  useEffect(() => {
    const handleScroll = () => {
      setScrolling(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isOnMainPage = location.pathname === "/";

  const handleLogoClick = () => {
    if (isOnMainPage) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      navigate("/");
    }
    setNavbarOpen(false);
  };

  const handleNavClick = (path) => {
    setNavbarOpen(false);
    if (!isOnMainPage) {
      navigate(`/#${path}`);
    } else {
      const section = document.getElementById(path);
      if (section) {
        window.scrollTo({
          top: section.offsetTop - navbarHeight,
          behavior: "smooth",
        });
      }
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-10 py-3 md:px-14 ${
        scrolling || navbarOpen ? "bg-neutral-900" : "bg-transparent"
      } transition-all`}
    >
      <div className="flex container items-center justify-between c mx-auto px-4">
        <RouterLink
          to="/"
          onClick={handleLogoClick}
          className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-teal-500 to-teal-200 bg-clip-text text-transparent lobster-two-bold-italic"
        >
          Data Empowers
        </RouterLink>

        <button
          onClick={() => setNavbarOpen(!navbarOpen)}
          className="md:hidden border rounded p-2 border-teal-400 text-white hover:text-teal-400"
        >
          {navbarOpen ? (
            <XMarkIcon className="h-5 w-5" />
          ) : (
            <Bars3Icon className="h-5 w-5" />
          )}
        </button>

        {/* Mobile menu */}
        {navbarOpen && (
          <div className="fixed top-0 left-0 w-full h-screen bg-neutral-900 flex flex-col items-center justify-center space-y-4">
            <button
              onClick={() => setNavbarOpen(false)}
              className="absolute top-4 right-4 p-2 text-white hover:text-teal-400"
            >
              <XMarkIcon className="h-6 w-6" />
            </button>
            <ul className="flex flex-col items-center space-y-4">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => handleNavClick(link.path)}
                    className="text-white text-xl cursor-pointer hover:text-teal-400"
                  >
                    {link.title}
                  </button>
                </li>
              ))}
              <a
                href="/path/to/your/resume.pdf"
                download
                className="px-6 py-3 border-2 border-teal-500 text-teal-500 font-semibold hover:bg-teal-500 hover:text-white rounded-lg"
              >
                Resume
              </a>
            </ul>
          </div>
        )}

        {/* Desktop menu */}
        <div className={`hidden md:flex md:w-auto`} id="navbar">
          <ul className="flex flex-row space-x-8">
            {navLinks.map((link, index) => (
              <li key={index}>
                <button
                  onClick={() => handleNavClick(link.path)}
                  className="nav-link cursor-pointer hover:text-teal-400"
                >
                  {link.title}
                </button>
              </li>
            ))}
            <a
              href="/path/to/your/resume.pdf"
              download
              className="ml-4 px-4 py-2 border-2 border-teal-500 text-teal-500 hover:bg-teal-500 hover:text-white rounded-lg"
            >
              Resume
            </a>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
