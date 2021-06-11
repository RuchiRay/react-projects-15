import React from 'react'

export const Menu = ({items}) => {
    return (
        <div className='menu-main'>
            {
                items.map((item)=>{
                    let {id,title,img,desc,price} = item;
                    return(
                        <div className="menu-item" key={id}>
                         <img src={img} alt={title} />
                         <div className="price-desc-name">
                             <div className="name-price">
                                 <h3 className="name">{title}</h3>
                                 <p className="price">{price}</p>
                             </div>
                             <div className="desc">{desc}</div>
                         </div>
                        </div>
                    )
                })
            }
        </div>
    )
}
