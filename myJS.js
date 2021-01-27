$(document).ready(function(){

    $(".card-header").click(function(){
            $(".card-body").toggle();
    });
$.get("https://jsonplaceholder.typicode.com/posts", function(data, status){

    let tableString = "";
    tableString += "<table class='table-striped table-bordered'><tr><th>Id</th><th>Title</th><th>Body</th></tr>";

    data.forEach(element => {
        tableString +="<tr><td>"+element.id+"</td><td>"+element.title+"</td><td>"+element.body+"</td></tr>";
    });
    
    tableString +="</table>";
    $(".row").html(tableString);

});

});