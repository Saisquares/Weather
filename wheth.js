const Url = "https://api.openweathermap.org";
const apiKey = "1b44d4c1200af962fad436dd56ad03be";

function funcOn() {
  
  let userInput = document.getElementById("inputLocation").value;
  if(userInput == ""){
    return;
  }
  let city = document.getElementById("locationName");
  city.innerText = `${userInput}`;
  city.style.textTransform = "uppercase";
  let newCity = city.innerText;
  

  const url = `${Url}/data/2.5/weather?q=${newCity}&units=metric&appid=${apiKey}`;
  fetch(url)
    .then((response) => response.json())
    .then((result) => {
      if(result.cod == '404'){
        city.innerText  = "NOT FOUND";
      }
      const temp = document.getElementById("temp");
      const humid = document.getElementById("humid");
      const main = document.getElementById("main");
      const windElement = document.getElementById("wind");
      temp.innerText = result.main.temp.toFixed();
      humid.innerText = result.main.humidity.toFixed();

      main.innerText = result.weather[0].description;
      main.style.textTransform = "capitalize";
      windElement.innerText = result.wind.speed;

      
      const currentDate = new Date();
      const day = currentDate.getDay();
      const date = currentDate.getDate();
      const month = currentDate.toLocaleString('default', { month: 'long' });
      const days = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ];
      

      let Docday = document.getElementById("day")
      let Docdate = document.getElementById("date")
      let DocMonth = document.getElementById("month")
      Docday.innerText = days[day]
      Docdate.innerText = date
      DocMonth.innerText = month

      
      let img = document.getElementById("img");
      if (result.weather[0].main === "Clouds") {
        img.src = "./cloudy.png";
      } else if (result.weather[0].main === "Clear") {
        img.src = "./clear.png";
      } else if (result.weather[0].main === ("Haze") || result.weather[0].main === ("Mist") ) {
        img.src = "./mist.png";
       } 
       else if (result.weather[0].description === "light intensity drizzle") {
        img.src = "./rain.png";
      }
       else if (result.weather[0].main === "Rain") {
        img.src = "./rain.png";
      }
    })
    .catch((error) => {
      console.log(error)
      
    }
    );
}
