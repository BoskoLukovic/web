$(document).ready(function(){

    $.get("https://jsonplaceholder.typicode.com/todos", function(data, status){
        let tableString = "";
        tableString +="<table class='table table-striped table-bordered w-100'><tr class='bg-dark text-light'><th class='py-2'>UserId</th><th>Id</th><th>Title</th><th>Completed</th></tr>";

        data.forEach(element => {

            if(element.completed == true){
                tableString +="<tr style='color:green'><td>"+element.userId+"</td><td>"+element.id+"</td><td>"+element.title+"</td><td><button type='button' class='btn badge-success w-100'>Completed</button></td></tr>";   
            }else{
                tableString +="<tr style='color:red'><td>"+element.userId+"</td><td>"+element.id+"</td><td>"+element.title+"</td><td><button type='button' class='btn badge-danger w-100'>Completed</button></td></tr>";   
            }
     
        });
        tableString +="</table>";
        $(".row").html(tableString);
    });

});