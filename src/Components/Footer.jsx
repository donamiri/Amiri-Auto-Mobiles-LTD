import React from "react";

const Footer = () => {
  return (
    <footer className="mt-5"
      style={{
        backgroundColor: "#333",
        color: "#fff",
        padding: "10px 0",
        textAlign: "center",
      }}
    >
      <div className="container">
        <p>
          &copy; {new Date().getFullYear()} Amiri Auto Mobiles LTD . All rights
          reserved.
        </p>
        <p>
          <a
            href="/about"
            style={{
              color: "#ffffff",
              textDecoration: "none",
              margin: "0 10px",
            }}
          >
            About
          </a>{" "}
          |
          <a
            href="/contact"
            style={{
              color: "#ffffff",
              textDecoration: "none",
              margin: "0 10px",
            }}
          >
            Contact
          </a>{" "}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
