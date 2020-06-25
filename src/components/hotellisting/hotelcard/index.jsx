import React from 'react';
import PropTypes from 'prop-types';
import hotelImage from 'assets/img/hotel.jpg';
import Button from 'uielements/button';
import HotelTag from 'components/hoteltags';

function HotelCard({ hotel, isSoldOut, onCardClick }) {
    return (
        <div 
            className="w-3/5 bg-white shadow-sm m-2 border border-solid flex flex-1 justify-start hover:shadow-md"
        >
            <img 
                style={{ 
                    filter: isSoldOut ? `grayscale(100%)` : 'none' 
                }} 
                src={hotelImage} alt="HOTEL" 
            />
            <div className="flex-col flex-1 justify-start">
                <div className="flex flex-1 justify-between items-start w-ful p-2">
                    <div className="flex-col ml-4 w-2/3">
                        <p 
                            onClick={onCardClick}
                            className="text-2xl font-bold cursor-pointer hover:text-green-500"
                        >{hotel.name}</p>
                        <p className="text-gray-500 font-bold">
                        {hotel.locality ? `${hotel.locality}, ` : ''}{hotel.city}</p>
                    </div>
                    <div className="text-xl font-bold text-left w-1/6">
                        {!isSoldOut ? <span>&#8377;{hotel.price}</span> : <span                      className="text-red-500 text-base">SOLD OUT</span>
                        }
                    </div>
                </div>
                {
                    !isSoldOut && (
                        <div className="flex flex-1 justify-between items-center w-ful p-2 ml-4">
                            <HotelTag tag="Free Early Check-In" />
                            <Button 
                                buttonText="Quick Book"
                                onClick={onCardClick}
                                customClass="bg-green-500 text-white p-3 hover:bg-green-700 focus:outline-none"
                            />
                        </div>
                    )
                }
                
            </div>
            
        </div>
    )
}

HotelCard.propTypes = {
    hotel: PropTypes.shape({
        name: PropTypes.string,
        locality: PropTypes.string,
        city: PropTypes.string,
        price: PropTypes.number,
    }).isRequired,
    onCardClick: PropTypes.function,
    isSoldOut: PropTypes.bool.isRequired,
}

HotelCard.defaultProps = {
    onCardClick: () => false,
}
export default HotelCard;
