"use client";

import { useState } from "react";

const NewItem = () => {
    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState(1);
    const [category, setCategory] = useState("produce");

    const increment = (e) => {
        e.preventDefault();
        if (quantity < 20) {
            setQuantity(quantity + 1);
        }
    };

    const decrement = (e) => {
        e.preventDefault();
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const item = {
            name,
            quantity,
            category,
        };
        console.log(item);
        alert(
            `Added item: ${item.name}, quantity: ${item.quantity}, category: ${item.category}`
        );
        setName("");
        setQuantity(1);
        setCategory("produce");
    };

    return (
        <div className='flex flex-col gap-7 h-screen items-center justify-center'>
            <form
                onSubmit={handleSubmit}
                className='flex flex-col gap-5 items-start bg-zinc-800 border-2 border-zinc-500 p-5 rounded'
            >
                <div className='flex flex-col gap-2'>
                    <label htmlFor='item-name' className='text-lg text-white'>
                        Item Name
                    </label>
                    <input
                        type='text'
                        name='item-name'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder='Item Name'
                        className='w-96 h-12 text-lg p-3 text-black border border-gray-300 rounded'
                        required
                    />
                </div>

                <div className='flex flex-col gap-2'>
                    <h2 className='text-lg text-white'>
                        Quantity:{" "}
                        <span className='text-xl font-bold'>{quantity}</span>
                    </h2>
                    <div className='flex items-center gap-5'>
                        <button
                            onClick={decrement}
                            disabled={quantity === 1}
                            className='w-24 h-12 flex items-center justify-center bg-teal-500 text-white rounded font-bold text-3xl transition-all duration-300 ease-in-out hover:bg-teal-600 disabled:opacity-50 disabled:cursor-not-allowed'
                            type='button'
                        >
                            -
                        </button>
                        <button
                            onClick={increment}
                            className='w-24 h-12 flex items-center justify-center bg-teal-500 text-white rounded font-bold text-3xl transition-all duration-300 ease-in-out hover:bg-teal-600 disabled:opacity-50 disabled:cursor-not-allowed'
                            disabled={quantity === 20}
                            type='button'
                        >
                            +
                        </button>
                    </div>
                </div>

                <div className='flex flex-col gap-2'>
                    <label htmlFor='category' className='text-lg text-white'>
                        Category
                    </label>

                    <select
                        name='category'
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        className='w-96 h-12 text-lg p-3 border border-gray-300 rounded text-black'
                        required
                    >
                        <option
                            key={"produce"}
                            value={"produce"}
                            className='text-black'
                        >
                            Produce
                        </option>
                        <option
                            key={"dairy"}
                            value={"dairy"}
                            className='text-black'
                        >
                            Dairy
                        </option>
                        <option
                            key={"bakery"}
                            value={"bakery"}
                            className='text-black'
                        >
                            Bakery
                        </option>
                        <option
                            key={"meat"}
                            value={"meat"}
                            className='text-black'
                        >
                            Meat
                        </option>
                        <option
                            key={"frozen foods"}
                            value={"frozen foods"}
                            className='text-black'
                        >
                            Frozen Foods
                        </option>
                        <option
                            key={"canned goods"}
                            value={"canned goods"}
                            className='text-black'
                        >
                            Canned Goods
                        </option>
                        <option
                            key={"dry goods"}
                            value={"dry goods"}
                            className='text-black'
                        >
                            Dry Goods
                        </option>
                        <option
                            key={"beverages"}
                            value={"beverages"}
                            className='text-black'
                        >
                            Beverages
                        </option>
                        <option
                            key={"snacks"}
                            value={"snacks"}
                            className='text-black'
                        >
                            Snacks
                        </option>
                        <option
                            key={"household"}
                            value={"household"}
                            className='text-black'
                        >
                            Household
                        </option>
                        <option
                            key={"other"}
                            value={"other"}
                            className='text-black'
                        >
                            Other
                        </option>
                    </select>
                </div>

                <button className='w-full h-16 flex items-center justify-center bg-teal-500 text-white rounded font-bold text-lg transition-all duration-300 ease-in-out hover:bg-teal-600 disabled:opacity-50 disabled:cursor-not-allowed'>
                    Submit
                </button>
            </form>
        </div>
    );
};

export default NewItem;
