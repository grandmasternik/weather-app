let searchText;

const $location = $("#location");
const $temperature = $("#temperature");
const $feelsLike = $("#feelslike");
const $weather = $("#weather");
const $windSpeed = $("#windSpeed");

function handleGetData(event) {

    event.preventDefault();
    
    searchText = $("#searchForm").val();
    
  $.ajax({
      url: `https://api.openweathermap.org/data/2.5/weather?q=${searchText}&appid=9e2e79e449de63b165683ac1fcb83225&units=imperial`,
    })
    .then(
      function (data) {
        $location.text(data["name"]);
        $temperature.text(data["main"]["temp"]);
        $feelsLike.text(data["main"]["feels_like"]);
        $weather.text(data["weather"][0]["description"]);
            $windSpeed.text(data['wind']['speed']);
      },
      function (error) {
        console.log("bad request: ", error);
      }
    );
}
$("form").on('submit', handleGetData);