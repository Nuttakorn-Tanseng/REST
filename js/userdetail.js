$(function(){

    var urlParams = new URLSearchParams(window.location.search);
    console.log(urlParams.get(id)); //get id from querystring

    var id = urlParams.get('id');
    var endpoint = "http://jsonplaceholder.typicode.com/users/"+id;

    $.get(endpoint, function (data, status) {
            console.log(status);
            console.log(data);
            $('#userid').val(data.id);
            $('#name').val(data.name);
            $('#username').val(data.username);

            var mapUrl = 'https://maps.google.com/maps?q=${data.address.gro.lat},$'
            $('#map').attr("src",mapUrl);


    });


});
