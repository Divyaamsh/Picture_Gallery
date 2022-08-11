var ourRequest = new XMLHttpRequest();
ourRequest.opean('GET','https://jsonplaceholder.typicode.com/photos?utm_source=Mailerlite&utm_medium=E-mail&utm_campaign=Test%20Series&utm_term=2022-08-09');
ourRequest.onload = function() {
           var ourData = ourRequest.responseText; 
};
ourRequest.send(); 