let div = document.querySelector(".container");
let contain = document.querySelector(".sub-container");
let carted = document.getElementById("cart");
let innerDiv = document.querySelector(".cart-items");
let img = []



function foodApi() {

  fetch("https://foodish-api.com/api/")
    .then((response) => response.json())
    .then((result) => {
      div.innerHTML = `<form>
        <button type="submit">Change Food/Refresh</button>
        </form>
        <img src="${result.image}" alt="pic">
        <button value="${result.image}"id="order" onclick='cartItems(event.target.value)' >ADD to Cart</button>
        `;
      
          
        

      // cart
      carted.addEventListener("click", () => {
        if(!contain.style.display == "block"){
          contain.style.display = "block";
          innerDiv.style.display = "block";}
        contain.innerHTML = `<h1>&larr;</h1>`;
          let leftArrow = document.querySelector(".sub-container h1");
          
        leftArrow.addEventListener("click", () => {
          contain.style.display = "none";
        });
          
      });
        
    })
    .catch((err) => console.log(err));
}
foodApi();

function cartItems(e = '') {
  innerDiv.innerHTML = `
    <img src="${e}" alt="Add anything to display here" ><br>
    <button id="minus">-</button>
    `;
  contain.append(innerDiv)
  let minusBtn = document.getElementById("minus");
  minusBtn.onclick = () => {
    minusBtn.parentElement.innerHTML = ''
  }
  
}

cartItems()

