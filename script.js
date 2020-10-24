$(document).ready(function () {
    var buttonSpace = $(".buttonSpace");
    var dashboard = $(".dashboard");
    var forecast = $(".forecast");
    var citynames = [];
    var clear =
        "https://www.clipartmax.com/png/middle/24-248320_sunny-weather-symbol-transparent.png";
    var cloudy =
        "https://c7.uihere.com/files/46/200/53/t-shirt-cloud-weather-clip-art-vector-cloudy-weather-forecast-icon-material.jpg";
    var rain =
        "https://www.pinclipart.com/picdir/middle/27-270336_clouds-weather-rain-rain-clip-art-png-transparent.png";



    $("#button").on("click", function (event) {
        event.preventDefault();
        var city = $("#search").val().trim();
        var key = "d4509dfb81dd238fb34f3ecd8571fb73";
        var queryURL =
            "https://api.openweathermap.org/data/2.5/forecast?q=" +
            city +
            "&appid=" +
            key;
        citynames.push(city);
        console.log(citynames);

        $.ajax({
            url: queryURL,
            method: "GET",
        }).then(function (response) {
            console.log(response);
            mainDash();
            renderButton();
            getForecast();

            // main dashboard weather
            function mainDash() {
                dashboard.empty();

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


            function renderButton() {
                $(".buttonSpace").empty();
                for (var i = 0; i < citynames.length; i++) {
                    var button = $("<button>").attr("data-name", citynames[i]);
                    button.addClass("button");
                    button.text(citynames[i]);
                    buttonSpace.append(button);
                }
            }
            function getForecast() {
                var divNames = ["div1", "div2", "div3", "div4", "div5"];
                forecast.empty();

                for (var i = 0; i < divNames.length; i++) {
                    var divs = $("<div>");
                    divs.addClass("forecastDiv col-lg-2");
                    divs.attr("ID", divNames[i]);
                    var image = $(
                        "<img data-rain = 'https://www.pinclipart.com/picdir/middle/27-270336_clouds-weather-rain-rain-clip-art-png-transparent.png' data-clear = 'https://www.clipartmax.com/png/middle/24-248320_sunny-weather-symbol-transparent.png' data-cloudy = 'https://c7.uihere.com/files/46/200/53/t-shirt-cloud-weather-clip-art-vector-cloudy-weather-forecast-icon-material.jpg' data-status = 'none'>"
                    );
                    forecast.append(divs);
                    divs.append(image);
                }

            }
            var div1 = $("#div1");
            var formattedDate1 = moment(response.list[7].dt_txt).format("MMMM Do");
            var date1 = $("<p>").text(formattedDate1);
            var k1 = response.list[7].main.temp;
            var temp1 = 1.8 * (k1 - 273) + 32;
            var formatTemp1 = $("<p>").text("Temperature: " + temp1.toFixed(1));
            var hum1 = $("<p>").text("Humidity: " + response.list[7].main.humidity);
            div1.append(date1, formatTemp1, hum1);
            console.log(response.list[7].main.humidity);

            var div2 = $("#div2");
            var formattedDate2 = moment(response.list[15].dt_txt).format("MMMM Do");
            var date2 = $("<p>").text(formattedDate2);
            var k2 = response.list[15].main.temp;
            var temp2 = 1.8 * (k2 - 273) + 32;
            var formatTemp2 = $("<p>").text("Temperature: " + temp2.toFixed(1));
            var hum2 = $("<p>").text(
              "Humidity: " + response.list[15].main.humidity
            );
            div2.append(date2, formatTemp2, hum2);

            var div3 = $("#div3");
            var formattedDate3 = moment(response.list[23].dt_txt).format("MMMM Do");
            var date3 = $("<p>").text(formattedDate3);
            var k3 = response.list[23].main.temp;
            var temp3 = 1.8 * (k3 - 273) + 32;
            var formatTemp3 = $("<p>").text("Temperature: " + temp3.toFixed(1));
            var hum3 = $("<p>").text(
              "Humidity: " + response.list[23].main.humidity
            );
            div3.append(date3, formatTemp3, hum3);

            var div4 = $("#div4");
            var formattedDate4 = moment(response.list[31].dt_txt).format("MMMM Do");
            var date4 = $("<p>").text(formattedDate4);
            var k4 = response.list[31].main.temp;
            var temp4 = 1.8 * (k4 - 273) + 32;
            var formatTemp4 = $("<p>").text("Temperature: " + temp4.toFixed(1));
            var hum4 = $("<p>").text(
              "Humidity: " + response.list[31].main.humidity
            );
            div4.append(date4, formatTemp4, hum4);

            var div5 = $("#div5");
            var formattedDate5 = moment(response.list[39].dt_txt).format("MMMM Do");
            var date5 = $("<p>").text(formattedDate5);
            var k5 = response.list[39].main.temp;
            var temp5 = 1.8 * (k5 - 273) + 32;
            var formatTemp5 = $("<p>").text("Temperature: " + temp5.toFixed(1));
            var hum5 = $("<p>").text(
              "Humidity: " + response.list[39].main.humidity
            );
            div5.append(date5, formatTemp5, hum5);


        });
    });
}); 