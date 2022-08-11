var btn = document.getElementById("btn");
var imageCon = document.getElementById("animal-info");
var img = document.getElementById("imgg");

var ourRequest = new XMLHttpRequest();
ourRequest.open('GET','https://jsonplaceholder.typicode.com/photos?utm_source=Mailerlite&utm_medium=E-mail&utm_campaign=Test%20Series&utm_term=2022-08-09');
ourRequest.onload = function() {
           var ourData = JSON.parse(ourRequest.responseText);
           console.log(ourData[0]);
           //console.log(ourRequest.responseText); 
           renderHTML(ourData);    
    };
ourRequest.send(); 

function renderHTML(data){
            var htmlString = "this is a test";
            var htmlS = "this is a test";
            imageCon.insertAdjacentHTML('beforeend',htmlString);
            for(  i=0; i<5;i++){
                htmlString += "<p>" + data[i].title +"</p>";
                htmlS += "<img src = '>" + data[i].url+ "<'>";

            }
            imageCon.insertAdjacentHTML('beforeend',htmlString);
            imagg.insertAdjacentHTML('beforeend',htmlS);
}