import * as React from 'react';
import { useParams } from 'react-router-dom';

export interface IPropertyPageProps {
    setFavourits: any
}

export function PropertyPage ({
    setFavourits
}: IPropertyPageProps) {

    let { id } = useParams();
    
  return (
    <div>   
      property {id}
    </div>
  );
}
