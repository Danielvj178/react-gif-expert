
import React from 'react'
import { useState } from 'react'

export const AddCategory = ({ newCategory }) => {
    
    const [inputValue, setinputValue] = useState('');

    const handleChange = ({target}) => {
        setinputValue(target.value);
    }
 
    const handleSubmit = (e) => {
        e.preventDefault();
        const value = inputValue.trim(); 
        if(value.length <= 1) return;

        // Second way
        newCategory(value);

        // First way
        //setCategories((categories) => [inputValue, ...categories]);
        setinputValue('');
    }

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                placeholder='Search gifs'
                value={inputValue}
                onChange={handleChange}
            />
        </form>
    )
}   
