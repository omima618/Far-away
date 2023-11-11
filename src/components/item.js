const Item = ({ item, onToggleItem, onDeleteItem }) => {
    return (
        <li>
            <input
                type='checkbox'
                name='packed'
                checked={item.packed}
                onChange={() => onToggleItem(item.id)}
            />
            <span className={item.packed ? 'is-packed' : ''}>
                {item.quantity} {item.title}
            </span>
            <button onClick={() => onDeleteItem(item.id)}>❌</button>
        </li>
    );
};

export default Item;
