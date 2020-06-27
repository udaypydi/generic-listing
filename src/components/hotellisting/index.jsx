import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import Loader from 'uielements/loader/loader.component';
import { hotels as hotelsList, hotelPrices, selectedHotel } from 'atoms';
import { findMinPrice } from './hotellist.utils';
import { fetchHotels, fetchHotelPrices } from './hotellisting.api';
import HotelCard from './hotelcard';


function HotelListing(props) {
  const [hotels, setHotels] = useRecoilState(hotelsList);
  const [price, setHotelPrice] = useRecoilState(hotelPrices);
  const [clickedHotel, setClickedHotel] = useRecoilState(selectedHotel);
  const [isDataReady, setIsDataReady] = useState(false);

  useEffect(() => {
    fetchHotels()
      .then((json) => {
        setHotels(json.data);
        fetchHotelPrices()
          .then((priceJson) => {
            priceJson.data.forEach((prices) => {
              const hotelPrice = findMinPrice(prices.price);
              setHotelPrice((hotelPrices) => ({
                ...hotelPrices,
                [prices.id]: hotelPrice,
              }));
              setIsDataReady(true);
            });
          });
      });
  }, []);

  function navigateToHotelDescription(hotel) {
    const { history } = props;
    setClickedHotel(hotel);
    history.push(`/hotel/${hotel.id}`);
  }

  return (
    <div className="w-full flex items-center flex-col">
      {
                isDataReady && hotels.map((hotel) => (
                  <HotelCard
                    hotel={{ ...hotel, price: price[hotel.id] }}
                    isSoldOut={!price[hotel.id]}
                    onCardClick={navigateToHotelDescription}
                  />
                ))
            }
      {
                !isDataReady && <Loader />
            }
    </div>
  );
}

export default withRouter(HotelListing);
