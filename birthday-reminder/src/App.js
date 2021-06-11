import React,{useState} from 'react';
import { List } from "./myComponents/List";
import  data  from "./myComponents/data";

function App() {
  const [people, setPeople] = useState(data)
  function clearAll(){
    console.log('clicked');
    setPeople([])
  }
  return (
    <main>
      <section className="container">
        <h3>{people.length} birthdays today</h3>
        <List people={people}/>
        <button onClick={clearAll}>Clear All</button>
      </section>
    </main>
  );
}

export default App;
