$(document).ready(function () {
    var dashboard = $(".dashboard");
    var forecast = $(".forecast");
  
    $("#button").on("click", function () {
      var cityName = $("#search").val().trim();
      var key = "d4509dfb81dd238fb34f3ecd8571fb73";
      var queryURL =
        "https://api.openweathermap.org/data/2.5/forecast?q=" +
        cityName +
        "&appid=" +
        key;
  
      $.ajax({
        url: queryURL,
        method: "GET",
      }).then(function (response) {
        console.log(cityName);
        console.log(response);
      });
    });
  }); 