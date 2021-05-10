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

      