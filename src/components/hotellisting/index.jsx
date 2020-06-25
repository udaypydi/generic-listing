import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import Loader from 'uielements/loader/loader.component';
import { findMinPrice } from './hotellist.utils';
import { fetchHotels, fetchHotelPrices } from './hotellisting.api';
import HotelCard from './hotelcard';

function HotelListing(props) {
    const [hotels, setHotels] = useState([]);
    const [price, setHotelPrice] = useState({});
    const [isDataReady, setIsDataReady] = useState(false);

    useEffect(() => {
        fetchHotels()
            .then(json => {
                setHotels(json.data);
                fetchHotelPrices()
                    .then(priceJson => {
                        priceJson.data.forEach(prices => {
                            const hotelPrice = findMinPrice(prices.price);
                            setHotelPrice(hotelPrices => ({ 
                                ...hotelPrices, 
                                [prices.id] : hotelPrice 
                            }));
                            setIsDataReady(true);
                        });
                    });
            });
    }, []);

    function navigateToHotelDescription() {
        const { history } = props;
        history.push('/hotel');
    }

    return (
        <div className="bg-gray-100 h-screen flex items-center flex-col">
            {
                isDataReady && hotels.map(hotel => (
                    <HotelCard 
                        hotel={{ ...hotel, price: price[hotel.id]}} 
                        isSoldOut={!price[hotel.id]} 
                        onCardClick={navigateToHotelDescription}
                    />
                ))
            }
            {
                !isDataReady && <Loader />
            }
        </div>
    )
}

export default withRouter(HotelListing);
