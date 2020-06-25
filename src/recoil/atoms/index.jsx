import { atom } from 'recoil';

export const hotels = atom({
  key: 'hotelsList',
  default: [],
});

export const hotelPrices = atom({
  key: 'hotelPrices',
  default: [],
});

export const selectedHotel = atom({
  key: 'selectedHotel',
  default: {},
});
