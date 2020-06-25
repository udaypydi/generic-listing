export function findMinPrice(hotel) {
  const keys = Object.keys(hotel);
  let hotelPrice = hotel[keys[0]];
  Object.keys(hotel).forEach((price) => {
    if (hotel[price] && (hotelPrice > hotel[price] || !hotelPrice)) {
      hotelPrice = hotel[price];
    }
  });

  return hotelPrice;
}
