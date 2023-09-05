const inputBox = document.querySelector(".input-box");
        const searchBtn = document.getElementById("searchBtn");
        const weatherIcon = document.querySelector(".weather-icon");

        async function checkWeather(city){
            const apiKey = "22b36585cbc1f2f46e0c111777812817";
            const apiUrl = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=${apiKey}`;
            const response = await fetch(`${apiUrl}`);

            if(response.status == 404){
                document.querySelector(".error").style.display = "block";
                document.querySelector(".weather").style.display = "none";
            }
            else{
                var data = await response.json();
                if(data.weather[0].main =="Clouds"){
                    weatherIcon.src = "images/clouds.png";
                }
                else if(data.weather[0].main =="Clear"){
                    weatherIcon.src = "images/clear.png";
                }
                else if(data.weather[0].main =="Drizzle"){
                    weatherIcon.src = "images/drizzle.png";
                }
                else if(data.weather[0].main =="Mist"){
                    weatherIcon.src = "images/mist.png";
                }
                else if(data.weather[0].main =="Rain"){
                    weatherIcon.src = "images/rain.png";
                }
                else if(data.weather[0].main =="Snow"){
                    weatherIcon.src = "images/snow.png";
                }
                document.querySelector(".weather").style.display = "block";
                document.querySelector(".error").style.display = "none";

            }
            
            document.querySelector(".temp").innerHTML = `${Math.round(data.main.temp)}°C`;
            document.querySelector(".city").innerHTML = `${data.name}`;
            document.querySelector(".humidity").innerHTML = `${data.main.humidity}%`;
            document.querySelector(".wind").innerHTML = `${data.wind.speed} Km/h`;
        }
        searchBtn.addEventListener("click",()=>{
            checkWeather(inputBox.value);
        });