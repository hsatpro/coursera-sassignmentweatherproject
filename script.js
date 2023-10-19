document.addEventListener("DOMContentLoaded", () => {
    const searchButton = document.getElementById("searchButton");
        const refreshButton = document.getElementById("refreshButton");
    const cityInput = document.getElementById("cityInput");
    const weatherInfo = document.getElementById("weatherInfo");
    const weatherIcon = document.getElementById("weatherIcon");



    searchButton.addEventListener("click", () => {
        const city = cityInput.value;
        if (city) {
            searchButton.disabled = true;
            searchButton.textContent = "Searching...";
            getWeatherData(city);
        }
    });

    function getWeatherData(city) {
        const apiKey = "763e05f34a680863ff440cbcedab324c"; // Replace with your API key
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
        const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`;

        // Fetch current weather data
        fetch(apiUrl)
            .then((response) => response.json())
            .then((data) => {
                const temperature = data.main.temp;
                const windSpeed = data.wind.speed;
                const humidity = data.main.humidity;
                const weatherDescription = data.weather[0].description;
                const iconCode = data.weather[0].icon;

                weatherInfo.innerHTML = `
                    Temperature: ${temperature}°C
                    Wind Speed: ${windSpeed} m/s
                    Humidity: ${humidity}%
                    Weather: ${weatherDescription}
                `;
                weatherIcon.innerHTML = `<img src="https://openweathermap.org/img/wn/${iconCode}.png" alt="Weather Icon">`;


                

// Search button click event
searchButton.addEventListener("click", () => {
    const city = cityInput.value;
    if (city) {
        searchButton.disabled = true;
        searchButton.textContent = "Searching...";
        getWeatherData(city);
    }
});
// Refresh button click event
refreshButton.addEventListener("click", () => {
    cityInput.value = ""; // Clear the input field
    searchButton.disabled = false;
    searchButton.textContent = "Search";
});
function getWeatherData(city) {
    // ... (the rest of your getWeatherData function remains the same)
}





                // Fetch 5-day forecast data
                fetch(forecastUrl)
                    .then((response) => response.json())
                    .then((forecastData) => {
                        const forecastList = forecastData.list;
                        // Process and display the 5-day forecast data as needed
                        // You can loop through forecastList and extract the required details
                    })
                    .catch((error) => {
                        console.error("Error fetching 5-day forecast data:", error);
                    });

                searchButton.style.backgroundColor = "#FF5733"; // Change the button color to red
                searchButton.textContent = "Show Details";
                searchButton.addEventListener("click", () => {
                    // Show more details or perform additional actions here
                });
            })
            .catch((error) => {
                console.error("Error fetching weather data:", error);
                searchButton.disabled = false;
                searchButton.textContent = "Search";
                searchButton.style.backgroundColor = "#007BFF"; // Change the button color back to blue
            });
    }
});



