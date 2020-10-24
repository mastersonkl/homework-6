$(document).ready(function () {
    var buttonSpace = $(".buttonSpace");
    var dashboard = $(".dashboard");
    var forecast = $(".forecast");
  
    $("#button").on("click", function () {
      var city = $("#search").val().trim();
      var key = "d4509dfb81dd238fb34f3ecd8571fb73";
      var queryURL =
        "https://api.openweathermap.org/data/2.5/forecast?q=" +
        city +
        "&appid=" +
        key;
  
      $.ajax({
        url: queryURL,
        method: "GET",
      }).then(function (response) {
        console.log(response);
        mainDash();
        renderButton();
  
        // main dashboard weather
        function mainDash() {

          // city name and date
          var todaysDate = response.list[0].dt_txt;
          var formatDate = moment(todaysDate).format("MMMM Do YYYY");
          var cityName = $("<p class = 'dashtext'>").text(
            response.city.name + "  (" + formatDate + ")"
          );
          // temp and converts to fahrenheit
          var minidash = $("<p class = 'temp'>");
          var k = response.list[0].main.temp;
          var temp = 1.8 * (k - 273) + 32;
          var formatTemp = temp.toFixed(1);
          minidash.text("Temperature: " + formatTemp);
          $(".dashtext").append(minidash);


          //humidity
          var humLine = $("<p class = 'humidity'>");
          var humidity = response.list[0].main.humidity;
          humLine.text("Humidity: " + humidity);
          console.log(humidity);

          // windspeed
          var windLine = $("<p class = 'wind'>");
          var windSpeed = response.list[0].wind.speed;
          windLine.text("Wind Speed: " + windSpeed);
  
   
  
          dashboard.append(cityName, minidash, humLine, windLine);
        }
  
    


      });
    });
  }); 