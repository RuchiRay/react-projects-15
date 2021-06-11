import React, {useState} from 'react'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'
export const SingleQuestion = ({title,info}) => {
    const [show, setshow] = useState(false);
    function toggleShow(){
        console.log('clicked');
        setshow(!show)
    }
    return (
        <div className="que-ans">
          <div className="que">
              <h4 className="title">{title}</h4>
              <button className="plus-minus" onClick={toggleShow} >{show?<AiOutlineMinus/>:<AiOutlinePlus/>}</button>
          </div>
            <p className="ans">{show?info:''}</p>
        </div>
    )
}
