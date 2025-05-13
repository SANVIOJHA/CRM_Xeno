
import React, { useState } from 'react';
import { addCustomer } from '../services/api';

const CustomerForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newCustomer = { name, email };
        await addCustomer(newCustomer);
        setName('');
        setEmail('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>Name:</label>
            <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
            />
            <br />
            <label>Email:</label>
            <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
            />
            <br />
            <button type="submit">Add Customer</button>
        </form>
    );
};

export default CustomerForm;
