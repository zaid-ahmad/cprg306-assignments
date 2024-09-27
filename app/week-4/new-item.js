"use client";
import { useState } from "react";

const NewItem = () => {
    const [quantity, setQuantity] = useState(1);
    let buttonStyle =
        "w-24 h-12 flex items-center justify-center bg-teal-500 text-white rounded font-bold text-3xl transition-all duration-100 ease-in-out hover:bg-teal-600 active:bg-teal-950 disabled:opacity-50 disabled:cursor-not-allowed";

    const increment = () => {
        if (quantity < 20) {
            setQuantity(quantity + 1);
        }
    };

    const decrement = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    return (
        <div className='flex flex-col gap-7 h-screen items-center justify-center'>
            <h2 className='text-4xl'>Quantity: {quantity}</h2>
            <div className='flex items-center gap-5'>
                <button
                    onClick={decrement}
                    disabled={quantity === 1}
                    className={buttonStyle}
                >
                    -
                </button>
                <button
                    onClick={increment}
                    className={buttonStyle}
                    disabled={quantity === 20}
                >
                    +
                </button>
            </div>
        </div>
    );
};

export default NewItem;
