import React,{useState} from 'react';
import data from './myComponents/data'
import { SingleQuestion } from './myComponents/SingleQuestion'
function App() {
  const [questions, setQuestions] = useState(data)
  return (
  <main>
    <div className="container">
      <h3>Question and answers about log in</h3>
      <div className="main-que-ans">
           {
             questions.map((question)=>{
               return(
                 <SingleQuestion key={question.id} {...question}/>
               )
             })
           }
      </div>
    </div>

  </main>
  );
}

export default App;
