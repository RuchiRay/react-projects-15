import React from 'react'
import { FaEdit,FaTrash} from 'react-icons/fa';
export const List = ({items,removeItem,editItem}) => {
    return (
        <div className='grocery-list'>
           {
               items.map((item)=>{
                   return (
                       <div className="item-container"key={item.id}>
                           <p className="item" >{item.title}</p>
                          <div className="btn-container">
                              <button type='button' className="edit-btn" onClick = {()=>editItem(item.id)}> <FaEdit/> </button>
                              <button type='button' className="del-btn" onClick={()=>removeItem(item.id)}> <FaTrash/> </button>
                          </div>
                       </div>
                       )
                       
                      
               })
           }
        </div>
    )
}
