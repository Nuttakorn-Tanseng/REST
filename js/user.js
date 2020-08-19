$(function(){

    var endpoint = "http://jsonplaceholder.typicode.com/users";

    $.get(endpoint, function (data, status) {
            console.log(status);
            console.log(data);

            if(status == 'success'){
                for(index in data){
                    var user = data[index];
                    
                    var row = `<tr>
                    <td scope="row">${user.id}</td>
                    <td>${user.name}</td>
                    <td>${user.username}</td>
                    <td>${user.email}</td>
                    <td>
                        <a class="btn-primary " href="userdetail.html?id=${user.id}"> 
                            View Detail
                        </a>    
                    </td>

                    </tr>`;

                    $('#userlist').append(row);
                }
            }
    });

});


