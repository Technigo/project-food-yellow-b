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
    const averageCost = list.restaurant.average_cost_for_two// Try to show dollar signs instead of numbers
    const photo = list.restaurant.thumb
    const rating = list.restaurant.user_rating.rating_text
   
    document.getElementById("restaurants").innerHTML += `<div class="restaurant">  
        <img src="${photo}" alt="${name} photo">
        <h2>${name}</h2>
        <p><span class="rating">Rating: ${rating}</span> <span class="average-cost"> Average cost: ${averageCost}</span></p>
        <p class="address">${address}</p>
        </div>` // Add placeholder img where empty
       }


let ascendingPrice = false 

const sortByPrice = () => {
    const priceAscending = "&sort=cost&order=asc" 
    const priceDescending = "&sort=cost&order=desc"
    if (ascendingPrice === false){
        fetch (url + priceAscending, {headers:{"user-key": apiKey}})
        .then(res => res.json())
        .then(json => { 
            const restaurants = json.restaurants
            document.getElementById("restaurants").innerHTML = "";
            restaurants.forEach(displayRestaurants)
        })  
        ascendingPrice = true
        sortButton.innerHTML = "Sort by descending price"
    } else {
        fetch (url + priceDescending, {headers:{"user-key": apiKey}})
        .then(res => res.json())
        .then(json => { 
            const restaurants = json.restaurants
            document.getElementById("restaurants").innerHTML = "";
            restaurants.forEach(displayRestaurants)
        })
        ascendingPrice = false
        sortButton.innerHTML = "Sort by ascending price"
    }
}

const sortButton = document.getElementById("sortPrice")
sortButton.addEventListener("click", () => {
    sortByPrice()
})