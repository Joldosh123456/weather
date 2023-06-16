const key = "e528702f3ae5f7ef199764dc38cd3eba";
let btn = document.querySelector("#searchBtn");
let town = document.querySelector("#town");
let content = document.querySelector(".content");
async function getWeather() {
  if (town.value == "") {
    alert("Enter town!");
    return;
  } else {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${town.value}&appid=${key}&units=metric`
    );
    // console.log(response)
    if (response.status !== 200) {
      content.innerHTML = `<h2>Town do not found!</h2>`;
    } else {
      const data = await response.json();
      content.innerHTML = `
      <div class = 'contentContainer'>
            <h1>Result</h1>
            <h2>${data.name}</h2>
            <p>${data.main.temp}</p>
            <img  src="https://api.openweathermap.org/img/w/${data.weather[0].icon}.png"/>
            <p> Pressure - ${data.main.pressure} hPa</p>
            <p> Humidity - ${data.main.humidity} %</p>
            <h3> ${data.weather[0].main}</h3>
            <p>${data.weather[0].description}</p>
            
            <p> Clouds- ${data.clouds.all}%</p>
            <p>Wind- ${data.wind.speed} м/с </p>
            </div>
            `;
    }
  }
}
btn.addEventListener("click", getWeather);

let enter = document
  .querySelector("input")
  .addEventListener("keyup", function (e) {
    if (e.keyCode === 13) {
      getWeather();
    }
  });

// document.querySelector('input').addEventListener('keydown', function(e) {
//   if (e.keyCode === 13) {
//     // можете делать все что угодно со значением текстового поля
//     console.log(this.value);
//   }
