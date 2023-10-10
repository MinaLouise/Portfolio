const doc = document.getElementsByClassName('preview-link')



var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");
var requestOptions = {
    method: "get",
    headers: myHeaders,
    redirect: "follow",
    
};

fetch("https://v1.nocodeapi.com/minalouise/link_preview/JArWrIzvAjngbMhY?url=https://minalouise.github.io/GOAT-project/", requestOptions)
    .then(response => response.text())
    .then(result => {
        console.log(result)
        console.log(doc[0])
    })

    .catch(error => console.log('error', error));