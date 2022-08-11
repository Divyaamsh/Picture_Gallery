const xhr = new XMLHttpRequest()

let api = "https://jsonplaceholder.typicode.com/photos?utm_source=Mailerlite&utm_medium=E-mail&utm_campaign=Test%20Series&utm_term=2022-08-09"

xhr.open('GET', api)

xhr.onreadystatechange = () => {
    if(xhr.readyState == 4 && xhr.status === 200)
    {
        const response = JSON.parse(xhr.responseText)
        let max = response.length - 1
        console.log(max)
        
        var output = ' '
        var htmlString = "this is a test";
        //See the latest pictures created
        for(let i = 30; i >= 0; i--)
        {
            output += `<a href = ${response[i].thumbnailUrl} target = "_blank"><img style = "margin: 1em" src = ${response[i].thumbnailUrl} alt = ${response[i].title}/></a>`
           
        }
    
        document.querySelector('#picture-container').innerHTML = output
    }
}

xhr.send()

//Handle Image uploads




  document.getElementById('user-input').addEventListener('submit', (e) => {
    
    e.preventDefault()

    var title = $('#title').val();
    var url = $('#img').val();
    var desc = $('#description').val();
    var output = ``
    output += `<a href = ${url} target = "_blank"><img style = "margin: 1em; width: 150px; height: 150px" src = ${url} alt = ${title}/></a>`
    document.querySelector('#user-pictures').innerHTML = output

  });
