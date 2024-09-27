"use client";

import { useState } from "react";
import Item from "./item";
import items from "./items.json";

function ItemList() {
    const [sortBy, setSortBy] = useState("name");
    const [groupByCategory, setGroupByCategory] = useState(false);

    const sortedItems = [...items].sort((a, b) => {
        if (sortBy === "name") {
            return a.name.localeCompare(b.name);
        } else if (sortBy === "category") {
            return a.category.localeCompare(b.category);
        }
    });

    const groupedItems = sortedItems.reduce((acc, item) => {
        if (!acc[item.category]) {
            acc[item.category] = [];
        }
        acc[item.category].push(item);
        return acc;
    }, {});

    const renderItems = () => {
        if (groupByCategory) {
            return Object.entries(groupedItems)
                .sort(([catA], [catB]) => catA.localeCompare(catB))
                .map(([category, items]) => (
                    <li key={category} className='mb-4'>
                        <h2 className='text-xl font-bold mb-2 capitalize'>
                            {category}
                        </h2>
                        <ul className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                            {items.map((item) => (
                                <li key={item.id}>
                                    <Item {...item} />
                                </li>
                            ))}
                        </ul>
                    </li>
                ));
        } else {
            return sortedItems.map((item) => (
                <li key={item.id}>
                    <Item {...item} />
                </li>
            ));
        }
    };

    return (
        <div>
            <div className='mb-4 flex gap-2'>
                <button
                    onClick={() => setSortBy("name")}
                    className={`px-4 py-2 rounded ${
                        sortBy === "name"
                            ? "bg-blue-500 text-white"
                            : "bg-gray-200 text-black"
                    }`}
                >
                    Sort by Name
                </button>
                <button
                    onClick={() => setSortBy("category")}
                    className={`px-4 py-2 rounded ${
                        sortBy === "category"
                            ? "bg-blue-500 text-white"
                            : "bg-gray-200 text-black"
                    }`}
                >
                    Sort by Category
                </button>
                <button
                    onClick={() => setGroupByCategory(!groupByCategory)}
                    className={`px-4 py-2 rounded ${
                        groupByCategory
                            ? "bg-green-500 text-white"
                            : "bg-gray-200 text-black"
                    }`}
                >
                    {groupByCategory ? "Ungroup" : "Group by Category"}
                </button>
            </div>
            <ul
                className={
                    groupByCategory
                        ? ""
                        : "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
                }
            >
                {renderItems()}
            </ul>
        </div>
    );
}

export default ItemList;
