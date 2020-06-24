import React, { useState, useEffect } from 'react';

function HotelListing(props) {
    const [hotels, setHotels] = useState([]);

    useEffect(() => {
        fetch('http://www.mocky.io/v2/5a7f23442e00005000b56873')
            .then(res => res.json())
            .then(json => {
                setHotels(json.data);
            })
    }, []);

    return (
        <div>
            {
                hotels.map(hotel => (
                    <div>
                        <p>{hotel.name}</p>
                    </div>
                ))
            }
        </div>
    )
}

export default HotelListing;
