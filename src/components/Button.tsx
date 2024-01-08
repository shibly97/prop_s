import * as React from 'react';
import './css/Button.css'

export interface IButtonProps {
    label: string,
    onClick: any
}

export default function Button (props: IButtonProps) {
  return (
    <div className='button-cont'>
        <button 
            onClick={props.onClick}
            className='custom-button'
        >
            {props.label}
        </button>
    </div>
  );
}
