import { useState } from 'react';
import Item from './item';
const PackingList = ({ items, onToggleItem, onDeleteItem, onClearList }) => {
    const [sortBy, setSortBy] = useState('id');
    let sortedItems = [];
    if (sortBy === 'title') {
        sortedItems = [...items].sort((a, b) => a.title.localeCompare(b.title));
    } else {
        sortedItems = [...items].sort((a, b) => a[sortBy] - b[sortBy]);
    }
    const clearListHandler = () => {
        if (items.length) onClearList();
    };
    return (
        <div className='list'>
            <ul>
                {sortedItems.map((item) => (
                    <Item
                        item={item}
                        onToggleItem={onToggleItem}
                        onDeleteItem={onDeleteItem}
                        key={`item-${item.id}`}
                    />
                ))}
            </ul>
            <div className='actions'>
                <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                >
                    <option value='id'>Sort by order</option>
                    <option value='quantity'>Sort by Quantity</option>
                    <option value='title'>Sort by title</option>
                    <option value='packed'>Sort by packed status</option>
                </select>
                <button
                    disabled={!items.length}
                    onClick={clearListHandler}
                >
                    Clear list
                </button>
            </div>
        </div>
    );
};

export default PackingList;
