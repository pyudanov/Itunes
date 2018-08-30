// $(document).ready(... This is jQuery function that runs when the page is loaded.
// Do you want to load when the page is ready or when some button is clicked?
// Are you waiting for an input from the user???
$(document).ready(function () {
    $('#btn').click(function () {
        $('.items').remove();
        // grabs what is in search bar
        var search = $('#artist').val()
        // clears search bar
        $('#artist').val('');
        $.ajax({
            url: `http://itunes.apple.com/search?term=${search}`,
            dataType: 'JSONP'
        })
            .done(function (data) {
                console.log(data);
                // add code for when response from apple comes back.
                for (let i = 0; i < data.results.length; i++) {
                    // check to see if the trackName (song) matches what's in the input box
                    // change all to lower case so we can avoid case senitivity;
                    if (data.results[i].trackName.toLowerCase() === search.toLowerCase()) {
                        $('#songs').append(`<li class="items"><img src="${data.results[i].artworkUrl60}"><p>${data.results[i].artistName}</p></li>`);

                    }
                }
            })
            .fail(function (data) {
                console.log(data);
                $('#songs').append(data.status);
            })

    })

})

        // End of on ready part