import React, { useState, useEffect } from 'react';
import hotelImage from 'assets/img/hotel.jpg';
import { findMinPrice } from './hotellist.utils';

function HotelListing(props) {
    const [hotels, setHotels] = useState([]);
    const [price, setHotelPrice] = useState({});

    useEffect(() => {
        fetch('http://www.mocky.io/v2/5a7f23442e00005000b56873')
            .then(res => res.json())
            .then(json => {
                setHotels(json.data);
                fetch('http://www.mocky.io/v2/5a7f24f02e00005200b56875')
                    .then(response => response.json())
                    .then(priceJson => {
                        priceJson.data.forEach(prices => {
                            const hotelPrice = findMinPrice(prices.price);
                            setHotelPrice(hotelPrices => ({ 
                                ...hotelPrices, 
                                [prices.id] : hotelPrice 
                            }));
                        });
                    });
            });
    }, []);

    return (
        <div className="bg-gray-100 h-screen flex items-center flex-col">
            {
                hotels.map(hotel => (
                    <div 
                        className="w-2/3 bg-white shadow-sm m-2 border border-solid flex flex-1 justify-between hover:shadow-md"
                    >
                        <img src={hotelImage} alt="HOTEL" />
                        <div className="flex-col ml-4 w-2/3 p-2">
                            <p className="text-2xl font-bold cursor-pointer hover:text-green-500">{hotel.name}</p>
                            <p className="text-gray-500 font-bold">
                            {hotel.locality ? `${hotel.locality}, ` : ''}{hotel.city}</p>
                        </div>
                        <p className="text-xl font-bold text-left w-1/6 p-2">{price[hotel.id]}</p>
                    </div>
                ))
            }
        </div>
    )
}

export default HotelListing;
