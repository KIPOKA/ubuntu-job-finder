import React from "react";

function Footer() {
  return (
    <footer className="py-12 bg-[#0a192f]">
      <div className="mx-auto px-4 text-center text-white">
        <p>
          &copy; {new Date().getFullYear()} Ubuntu Job Finder. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
