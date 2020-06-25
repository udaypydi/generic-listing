export function fetchHotels() {
    return fetch('http://www.mocky.io/v2/5a7f23442e00005000b56873')
    .then(res => res.json())
    .catch(err => console.error(err));
}

export function fetchHotelPrices() {
    return fetch('http://www.mocky.io/v2/5a7f24f02e00005200b56875')
    .then(response => response.json())
    .catch(err => console.error(err));
}