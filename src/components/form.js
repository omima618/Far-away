import { useState } from 'react';

const Form = ({ itemsLength, onAddItem }) => {
    const [formData, setFormData] = useState({ title: '', quantity: 1 });
    const submitHandler = (e) => {
        e.preventDefault();
        if (!formData.title || !formData.quantity) return;
        const newItem = {
            title: formData.title,
            quantity: formData.quantity,
            id: itemsLength + 1,
            packed: false,
        };
        onAddItem(newItem);
        setFormData({ title: '', quantity: 1 });
    };
    return (
        <form
            className='add-form'
            onSubmit={submitHandler}
        >
            <h3>What do you need for your 😍 trip?</h3>
            <div>
                <select
                    name='quantity'
                    value={formData.quantity}
                    onChange={(e) => setFormData((d) => ({ ...d, quantity: +e.target.value }))}
                >
                    {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
                        <option
                            value={num}
                            key={`num-${num}`}
                        >
                            {num}
                        </option>
                    ))}
                </select>
                <input
                    type='text'
                    name='title'
                    placeholder='Item...'
                    value={formData.title}
                    onChange={(e) => setFormData((d) => ({ ...d, title: e.target.value }))}
                />
                <button>Add</button>
            </div>
        </form>
    );
};

export default Form;
