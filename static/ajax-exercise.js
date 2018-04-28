"use strict";


// PART 1: SHOW A FORTUNE

function showInfo(result){
  $('#fortune-text').html(result);
 } 

function showFortune(evt) {
	$.get('/fortune', showInfo);
}

$('#get-fortune-button').on('click', showFortune);



// PART 2: SHOW WEATHER
function showWeather(evt) {
    evt.preventDefault();

    let url = "/weather.json";
    let formData = {"zipcode": $("#zipcode-field").val()};

    $.get(url, formData, replaceForecast);
    
}

$("#weather-form").on('submit', showWeather);




// PART 3: ORDER MELONS

function orderMelons(evt) {
    evt.preventDefault();
    

    let formInputs = $("#order-form").serialize();
    $.post("/order-melons.json", formInputs, function (results) {
        if (results.code == "OK") {
            $('#order-status').html("<p>" + results.msg + "</p>");
        }
        else {
            $('#order-status').addClass("order-error");
            $('#order-status').html("<p><b>" + results.msg + "</b></p>");
        }
    });
}

$("#order-form").on('submit', orderMelons);


