function Item({ name, quantity, category }) {
    return (
        <div className='bg-zinc-800 shadow shadow-zinc-950 border border-zinc-950 rounded p-4 hover:scale-105 hover:border-none transition-all duration-300'>
            <h2 className='text-lg font-semibold mb-2 capitalize'>{name}</h2>
            <p className='text-zinc-100 text-sm pt-2'>
                Quantity: <span className='font-medium'>{quantity}</span>
            </p>
            <p className='text-zinc-100 text-sm pt-1'>
                Category:{" "}
                <span className='font-medium capitalize'>{category}</span>
            </p>
        </div>
    );
}

export default Item;
