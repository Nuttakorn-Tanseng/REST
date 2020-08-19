$(function(){

    var endpoint = "http://jsonplaceholder.typicode.com/albums";

    $.get(endpoint, function (data, status) {
            console.log(status);
            console.log(data);

            if(status == 'success'){
                for(index in data){
                    var albums = data[index];
                    
                    var row = `<tr>
                    <td scope="row">${albums.userId}</td>
                    <td>${albums.id}</td>
                    <td>${albums.title}</td>
                    <td>
                        <a class="btn-primary " href="albumdetail.html?id=${albums.id}"> 
                            View Detail
                        </a>    
                    </td>

                    </tr>`;

                    $('#albumlist').append(row);
                }
            }
    });

});