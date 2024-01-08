import * as React from 'react';
import { PropertyCard } from '../components/PropertyCard';
import { useNavigate } from 'react-router-dom';

export interface IFavouritPageProps {
    setFavourits: any;
    favourits: any
}

export function FavouritPage ({
    favourits,
    setFavourits,
}: IFavouritPageProps) {

    let navigate = useNavigate();
    
  return (
    <div>
      {favourits.length ?
         favourits.map((row:any) => {
            return <PropertyCard
                    id={row.id}
                    onClick={() => navigate(`/property/:${row.id}`)}
                />
        })
      :
      <h1>No Favourits added yet</h1>}
    </div>
  );
}
