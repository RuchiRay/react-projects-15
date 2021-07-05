import React, { useState, useEffect,useRef } from "react";
import { Navbar } from './myComponents/Navbar'
import { CartContainer } from './myComponents/CartContainer'
import { useGlobalContext } from './Context'
function App() {
  const {loading} = useGlobalContext();
  console.log(loading);
  return (
    <main>
     <Navbar/> 
     {loading? <h3 className='loading'>Loading.....</h3>:<CartContainer/> }
    </main>
  );
}

export default App;
