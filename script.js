    $('#btn').click(function(e){e.preventDefault();
            $.ajax({
                type: 'GET',
                url:'http://api.icndb.com/jokes/random',
                async: false,
                jsonpCallback: 'jsonCallback',
                contentType: "application/json",
                dataType: 'jsonp',
                success: function(data)
                {
                    $('#joke').html(data.value.joke);
                }
            })
        });

//Realiza una petició a la API utiliza't la función fetch

    fetch('https://api.openweathermap.org/data/2.5/weather?q=Barcelona&units=metric&appid=0f16f964ace8383ede701e1b56ccaf60')
    .then((res) => res.json())
    .then((data) => {
        console.log(data)
        document.getElementById('weather').innerHTML = `<p> 
        The weather in Barcelona is: 
            ${data.main.temp} °C
        </p>`;
    })
    .catch((err) => console.log(err))
