import React, { useState, useEffect, useRef } from "react";
import { FaBars } from "react-icons/fa";
import logo from "../aven.png";
import { links, social } from "./data";

export const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);
  const linksContainerRef = useRef(null)
  const linksRef = useRef(null)
  useEffect(() => {
    const linksHeight = linksRef.current.getBoundingClientRect().height
    console.log(linksHeight);
    if(showLinks){
      linksContainerRef.current.style.height = `${linksHeight}px`
    }
    else{
      linksContainerRef.current.style.height = '0px'
    }
  }, [showLinks])
  return (
    <nav>
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} alt="logo" />
          <button
            className="nav-toggle"
            onClick={() => setShowLinks(!showLinks)}
          >
            <FaBars />
          </button>
        </div>
        <div className='links-container'ref={linksContainerRef} >
          <ul className="links" ref={linksRef}>
            {links.map((link) => {
              return (
                <li key={link.id}>
                  <a href={link.url}>{link.text}</a>
                </li>
              );
            })}
          </ul>
        </div>

        <ul className="social-icons">
          {social.map((icon) => {
            return (
              <li key={icon.id}>
                <a href={icon.url}>{icon.icon}</a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};
