const previewLinks = document.getElementsByClassName('preview-link')
// const doc = document.getElementsByClassName('preview-link').addEventListener("mouseover", hoverMouse)
for (const link of previewLinks) {
    link.addEventListener("mouseover", hoverMouse);
    link.addEventListener("mouseout", hidePreview); 
  }

  const previewDiv = document.createElement('div');
  previewDiv.classList.add('preview-container');

  document.body.appendChild(previewDiv);
  
  function hoverMouse(event) {
    const link = event.currentTarget;
    
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    var requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow"
    };
  
    fetch("https://v1.nocodeapi.com/minalouise/link_preview/JArWrIzvAjngbMhY?url=" + link.href, requestOptions)
      .then(response => response.text())
      .then(result => {
        const data = JSON.parse(result);
        const imageUrl = data.image;

        if(imageUrl){
            const imgElement = document.createElement('img');
            imgElement.src = imageUrl;

            const previewDiv = document.querySelector('.preview-container')
            previewDiv.innerHTML = ''
            previewDiv.appendChild(imgElement);
        }else{
            const previewDiv = document.querySelector('.preview-container')
            previewDiv.innerHTML = 'No img found'
        }
      })
      .catch(error => console.log('error:', error));
  }

  function hidePreview() {
    const previewDiv = document.querySelector('.preview-container')
    previewDiv.innerHTML = '';
  }
