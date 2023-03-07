import React from 'react';
import Link from 'next/link';
import { AiOutlineShopping } from 'react-icons/ai';

const Navbar = () => {
    return (
        <div className="navbar-container">
            <p className="logo">
                <Link href="/">Store Name</Link>
            </p>

            <button className="cart-icon">
                <AiOutlineShopping /> <span className="cart-item-qty">01</span>
            </button>
        </div>
    );
};

export default Navbar;
