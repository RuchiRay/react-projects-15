import React,{useEffect} from 'react'

export const Alert = ({msg,type,removeAlert,list}) => {
    useEffect(() => {
        let timeout = setTimeout(() => {
            removeAlert()
        }, 3000);
        return () => {
           clearTimeout(timeout)
        }
    }, [list])
    return (
        <div>
            <p className={`alert alert-${type}`}>{msg}</p>
           </div>
    )
}
