$(function(){

    var urlParams = new URLSearchParams(window.location.search);
    console.log(urlParams.get(id)); //get id from querystring

    var id = urlParams.get('id');
    var endpoint = "http://jsonplaceholder.typicode.com/albums/"+id;

    $.get(endpoint, function (data, status) {
            console.log(status);
            console.log(data);
            $('#albumid').val(data.id);
            $('#albumname').val(data.title);


    });


});
