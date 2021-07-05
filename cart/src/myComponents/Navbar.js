import React from 'react'
import {FaShoppingCart} from 'react-icons/fa'
import { useGlobalContext } from '../Context'
export const Navbar = () => {
    const {total} = useGlobalContext();
    return (
        <div className='navbar'>
            <p>UseReduder</p>
            <div className="total">
            <button className='cart-btn'><FaShoppingCart/></button>
            <span className='cart'>{total}</span>
            </div>

        </div>
    )
}
