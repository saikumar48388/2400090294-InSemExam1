import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import Courses from "./Courses";
import Contact from "./Contact";

function App() {
  return (
    <Router>
      <div>
        {/* Navigation Bar */}
        <nav style={styles.navbar}>
          <Link to="/" style={styles.link}>Home</Link>
          <Link to="/courses" style={styles.link}>Courses</Link>
          <Link to="/contact" style={styles.link}>Contact</Link>
        </nav>

        {/* Page Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

const styles = {
  navbar: {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    backgroundColor: "#282c34",
    padding: "15px"
  },
  link: {
    color: "white",
    textDecoration: "none",
    fontSize: "18px"
  }
};

export default App;
