import React, { ChangeEvent } from 'react';
import './css/Input.css'

interface CustomInputProps {
    placeholder?: string;
    value: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    name: string;
}

const CustomInput: React.FC<CustomInputProps> = ({
    placeholder,
    value,
    onChange,
    name
}) => {
    return (
        <div className="custom-input-container">
            <input
                className="custom-input"
                type="text"
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                name={name}
            />
        </div>
    );
};

export default CustomInput;
