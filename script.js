const apiKey = "02f77aaf16680fcc867e3e427767f11f"

const cityId = 306 // San Francisco
const cuisineId = 959 // Donuts

const url = `https://developers.zomato.com/api/v2.1/search?entity_id=${cityId}&cuisines=${cuisineId}`

fetch(url, { headers: { "user-key": apiKey } })
    .then(res => res.json())
    .then(json => {
        const restaurants = json.restaurants

        restaurants.forEach(displayRestaurants)
    })

const displayRestaurants = (list) => {
    const name = list.restaurant.name
    const address = list.restaurant.location.address
    const priceSymbol = "$";
    const priceRange = priceSymbol.repeat(list.restaurant.price_range) // Try to show dollar signs instead of numbers
    const photo = list.restaurant.thumb
    const rating = list.restaurant.user_rating.rating_text
    document.getElementById("restaurants").innerHTML += `<div class="restaurant">  
        <img src="${photo}" alt="${name} photo">
        <h2>${name}</h2>
        <p><span class="rating">Rating: ${rating}</span> <span class="price-range">Price range: ${priceRange}</span></p>
        <p class="address">${address}</p>
        </div>` // Add placeholder img where empty
}




