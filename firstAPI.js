function unWrapApi() {
  const URL = "https://dog.ceo/api/breeds/image/random";
  fetch(URL)
    .then((response) => response.json())
    .then((result) => {
      renderName(result.message);
    })
    .catch((err) => console.log(err));
}
unWrapApi();

function renderName(arr) {
    let div = document.querySelector(".container")
    div.innerHTML = `<button type="submit">Change pic</button>
    <img src="${arr}" alt="pic">`;
    let downloadBtn = document.querySelector(".otherBtn");
    downloadBtn.innerHTML = `<button><a href="${arr}" download target="_blank">Download</a></button>`;
}

fetch("https://api.ebird.org/v2/data/obs/{{regionCode}}")
    .then(response => response.json())
    .then(result => console.log(result))
    .catch(err=>console.log(err));