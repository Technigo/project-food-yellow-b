const apiKey = "02f77aaf16680fcc867e3e427767f11f"

const cityId = 306 // San Francisco
const cuisineId = 959 // Donuts

const url = `https://developers.zomato.com/api/v2.1/search?entity_id=${cityId}&cuisines=${cuisineId}`

fetch(url, { headers: { "user-key": apiKey } })
    .then(res => res.json())
    .then(json => {
        json.restaurants.forEach(resto => {
            const name = resto.restaurant.name
            const address = resto.restaurant.location.address
            const priceSymbol = "$";
            const priceRange = priceSymbol.repeat(resto.restaurant.price_range) // Try to show dollar signs instead of numbers
            const photo = resto.restaurant.thumb
            const rating = resto.restaurant.user_rating.rating_text
            document.getElementById("restaurants").innerHTML += `<div class="restaurant">  
            <img src="${photo}" alt="${name} photo">
            <h2>${name}</h2>
            <p><span class="rating">Rating: ${rating}</span> <span class="price-range">Price range: ${priceRange}</span></p>
            <p class="address">${address}</p>
            </div>` // Add placeholder img where empty
        })
    })




