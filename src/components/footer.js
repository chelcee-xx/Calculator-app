import React from "react";

function Footer(){
    const year = new Date().getFullYear();
    return (
      <footer>
        <p>Copyright ⓒ {year} Medeh Chelsea</p>
      </footer>
    );
}

export default Footer;