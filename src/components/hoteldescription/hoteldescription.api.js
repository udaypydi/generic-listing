export function fetchHotelDetails() {
  return fetch('http://www.mocky.io/v2/5a7f265b2e00005d00b56877')
    .then((res) => res.json())
    .catch((err) => console.error(err));
}
