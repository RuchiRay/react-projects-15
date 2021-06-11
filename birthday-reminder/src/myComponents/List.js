import React from 'react'

export const List = ({people}) => {
    return (
        <>
        {people.map((pep)=>{
            return(
                <div className="person" key={pep.id}>
                    <img src={pep.image} alt={pep.name} />
                    <div className="name-years">
                        <h4>{pep.name}</h4>
                        <p className="years">{pep.age}</p>
                    </div>
                </div>
            )
        })}
        </>
    )
}
