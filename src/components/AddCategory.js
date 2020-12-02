import React, { useState } from 'react';
import PropTypes from 'prop-types';


export const AddCategory = ({ setCategories }) => {

    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => {
        // console.log(e.target.value);
        setInputValue(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if(inputValue.trim().length > 2){
            // console.log('Submit hecho.');
            setCategories( categorias => [inputValue, ...categorias]);
    
            setInputValue('');
        }
    }

    return (
        // Al utilizar el form tag como agrupador de todos los demás elementos, no necesito utilizar Fragment
        <form onSubmit={ handleSubmit }>
            {/* <h1>{inputValue}</h1> */}

            <input
                type="text" 
                value={inputValue}
                // onChange={ (e) => { console.log(e); } }
                onChange={ handleInputChange }

            />
        </form>
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}