import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function PropertyDetails() {
  const { propertyId } = useParams();

  const [property, setProperty] = useState(null);

  useEffect(() => {
    axios.get(`https://my-api-endpoint.com/properties/${propertyId}`)
      .then((response) => {
        setProperty(response.data);
      })
      .catch((error) => {
        console.error('Error fetching property details:', error);
      });
  }, [propertyId]);

  if (!property) {
    return <div>Loading...</div>;
  }

  return (
    <div className="property-details">
      <h1>{property.property_name}</h1>
      <img src={property.image_url} alt={property.property_name} />

      <div>
        <p>Price: ${property.total_contract_price}</p>
        <p>Lot Area: {property.lot_area} sqm</p>
        <p>Location: {property.street_name}, {property.barangay}, {property.city}, {property.province}</p>
        <p>Block Number: {property.block_number}</p>
        <p>Lot Number: {property.lot_number}</p>
        <p>Price Per Month: ${property.price_per_month}</p>
        <p>Listing Status: {property.listing_status}</p>
        </div>
    </div>
  );
}

export default PropertyDetails;