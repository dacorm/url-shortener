import React, {Dispatch, SetStateAction, useState} from 'react';

interface InputSortenerProps {
    setInputValue: Dispatch<SetStateAction<string>>;
}

const InputSortener = ({ setInputValue }: InputSortenerProps) => {
    const [value, setValue] = useState('');

    const handleClick = () => {
        setInputValue(value);
        setValue('');
    }

    return (
        <div className='inputContainer'>
            <h1>URL <span>shortener</span></h1>
            <div>
                <input
                    type='text'
                    placeholder='Paste a link to shorten'
                    value={value}
                    onChange={(e) => {
                        setValue(e.target.value)
                    }}
                />
                <button onClick={handleClick}>shorten</button>
            </div>
        </div>
    )
}

export default InputSortener