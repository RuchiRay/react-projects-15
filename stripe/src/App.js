import React, { useState, useEffect } from "react";
import { Navbar } from './myComponents/Navbar'
import { Hero } from './myComponents/Hero'
import { Sidebar } from './myComponents/Sidebar'
import { Submenu } from './myComponents/Submenu'
function App() {
  return (
    <>
    <Navbar/>
    <Sidebar/>
    <Hero/>
    <Submenu/>
    </>
  )
}

export default App;
