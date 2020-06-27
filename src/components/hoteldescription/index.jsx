import React, { useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';
import { selectedHotel } from 'atoms';
import hotelImage from 'assets/img/hotel.jpg';
import HotelTag from 'components/hoteltags';
import Button from 'uielements/button';
import { fetchHotelDetails } from './hoteldescription.api';

function HotelDescription(props) {
  const [policies, setHotelPolicies] = useState([]);
  const [essentials, setEssentials] = useState([]);
  const hotel = useRecoilValue(selectedHotel);

  useEffect(() => {
    fetchHotelDetails()
      .then((json) => {
        setHotelPolicies(json.data.policies);
        setEssentials(json.data.essentials);
      });
  }, []);

  return (
    <>
        <div
        className="w-3/4 bg-white shadow-sm m-2 border border-solid flex"
        >
        <img src={hotelImage} className="h-auto w-1/2" />
        <div className="px-5">
            <p className="text-xl font-bold my-2">{hotel.name}</p>
            <p className="text text-gray-600 my-2">
            {hotel.locality}
            ,
            {' '}
            {hotel.city}
            </p>
            <HotelTag tag="Free Early Check-In" />
            {
                hotel.price ? (
                    <p className="text-3xl font-bold my-2">
                    &#8377;
                    {hotel.price} <span className="text-xl text-green-700">Refundable</span>
                    </p>
                ) : <p className="text-red-500 text-base my-2">SOLD OUT</p>
            }
            {
                        hotel.price && (
                        <Button
                        buttonText="Book Now"
                        disabled={!hotel.price}
                        customClass="bg-green-500 text-white p-3 hover:bg-green-700 focus:outline-none my-2"
                        />
                        )
                    }

        </div>
        </div>
        <div className="w-3/4 bg-white shadow-sm flex">
            <p className="p-4 cursor-pointer text-gray-500 hover:bg-gray-300">Policies</p>
            <p className="p-4 cursor-pointer text-gray-500 hover:bg-gray-300">Essentials</p>
        </div>
    </>
  );
}

export default HotelDescription;
