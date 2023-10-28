import React from 'react';
import { AiOutlineShoppingCart } from 'react-icons/ai';

const CartWidget = () => {
    return (
        <div style={{ position: 'relative' }}>
            <AiOutlineShoppingCart size="1.5em" />
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                5 {/* Número hardcodeado */}
                {/* <span className="visually-hidden">unread messages</span> */}
            </span>
        </div>
    );
}

export default CartWidget;
