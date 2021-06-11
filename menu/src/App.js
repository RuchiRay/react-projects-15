import React, { useState } from "react";
import items from "./myComponents/data";
import { Categories } from "./myComponents/Categories";
import { Menu } from "./myComponents/Menu";
let allCategories =['all',...new Set(items.map((item)=>item.category))] 
console.log(allCategories);
function App() {
  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState(allCategories);
  function filterItems(category) {
    console.log('category clicked',category);
    if(category==='all'){
      setMenuItems(items);
      return;
    }
    let newMenu  = items.filter((item)=>{
      return item.category===category;
    })
    setMenuItems(newMenu)
  }
  
  return (
    <main>
      <h2 className="heading">Our Menu</h2>
      <Categories filterItems={filterItems} categories={categories}/>
      <Menu items={menuItems} />
    </main>
  );
}

export default App;
