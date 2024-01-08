export interface Property {
    id: string;
    type: string;
    bedrooms: number;
    price: number;
    added: {
        month: string;
        day: number;
        year: number;
    };
    location: string
    // ... other fields
}

export interface SearchCriteria {
    type: string;
    minPrice: number;
    maxPrice: number;
    minBedrooms: number;
    maxBedrooms: number;
    startDate: Date | null;
    endDate: Date | null;
    postcodeArea: string;
}