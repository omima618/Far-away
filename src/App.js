import { useState } from 'react';
import Form from './components/form';
import Logo from './components/logo';
import PackingList from './components/packingList';
import Stats from './components/stats';

const App = () => {
    const [items, setItems] = useState([]);
    const addItemHandler = (item) => {
        setItems((items) => [...items, item]);
    };

    const toggleItemHandler = (changedItemId) => {
        setItems((items) =>
            items.map((item) =>
                item.id === changedItemId ? { ...item, packed: !item.packed } : item
            )
        );
    };

    const deleteItemHandler = (itemId, deleteAll = false) => {
        if (deleteAll) {
            setItems([]);
            return;
        }
        setItems((items) => items.filter((item) => item.id !== itemId));
    };

    const clearListHandler = () => {
        if (window.confirm('Are you sure you want to clear all items?')) {
            setItems([]);
        }
    };
    return (
        <div className='app'>
            <Logo />
            <Form
                itemsLength={items.length}
                onAddItem={addItemHandler}
            />
            <PackingList
                items={items}
                onToggleItem={toggleItemHandler}
                onDeleteItem={deleteItemHandler}
                onClearList={clearListHandler}
            />
            <Stats items={items} />
        </div>
    );
};

export default App;
