import * as React from 'react';
import './css/PropertyCard.css'

export interface IPropertyCardProps {
    data: any
    onClick: any
}

export function PropertyCard ({
    data,
    onClick
}: IPropertyCardProps) {
  return (
    <div className='property-card' onClick={() => onClick()}>
        <div className='img-container'>
            <img src={data.coverImage}/>
        </div>
        <div className='card-description'>
            <p>{data.type} | {data.location}</p>
        </div>
    </div>
  );
}
