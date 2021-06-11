import React, { useState, useEffect } from "react";
import { Loading } from "./myComponents/Loading";
import { Tours } from "./myComponents/Tours";
const url = "https://course-api.com/react-tours-project";

function App() {
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);
  const fetchTours = async () => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const tours = await response.json()
      console.log(tours);
      setLoading(false)
      setTours(tours)
    } catch (error) {
      setLoading(false)
      console.log(error);
   
  };
}
function removeTour(id){
  const newTours = tours.filter((tour)=>{
    return tour.id!==id;
  }
  )
  setTours(newTours)
    
}
  useEffect(() => {
    fetchTours();
  }, []);
  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }
  if(tours.length===0){
    return(
      <main>
        <div className="no-tour">
          <h2>No tours left</h2>
          <button onClick={()=>fetchTours()}>Refresh</button>
        </div>
      </main>
    )
  }
  return (
    <main>
      <Tours tours={tours} removeTour={removeTour} />
    </main>
  );
}

export default App;
