function redir(){
    var search = document.getElementById("searchBox").value;
    
    var url = "http://localhost/search/";

    var location = url + search;

    window.location.href=location;
}