const weatherForm = document.querySelector(".weather-form");
const locationInput = document.querySelector(".location-input");
const messageOne = document.querySelector("#location");
const messageTwo = document.querySelector("#forecast");

weatherForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const location = locationInput.value;

  messageOne.textContent = "Loading...";
  messageTwo.textContent = "";

  fetch(
    `http://localhost:3000/weather?address=${encodeURIComponent(location)}`
  ).then((response) => {
    response.json().then((data) => {
      if (data.error) {
        messageOne.textContent = data.error;
      } else {
        messageOne.textContent = data.location;
        messageTwo.textContent = data.forecast;
      }
    });
  });
});
