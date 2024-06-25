let div = document.querySelector(".container");
let contain = document.querySelector(".sub-container");
let carted = document.getElementById("cart");
let innerDiv = document.querySelector(".cart-items");
let img = [] , count = 0

let image = document.createElement("img");
let br = document.createElement("br");
let minus = document.createElement("button");

function foodApi() {

  fetch("https://foodish-api.com/api/")
    .then((response) => response.json())
    .then((result) => {
      count++;
      div.innerHTML = `<form>
        <button type="submit">Change Food/Refresh</button>
        </form>
        <img src="${result.image}" alt="pic">
        <button value="${result.image}"id="order" onclick='cartItems(event.target.value)' ,${count}>ADD to Cart</button>
        `;
        
          
        

      // cart
      carted.addEventListener("click", () => {
      
          contain.style.display = "block";
          innerDiv.style.display = "block";
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

function lessCount() {
  if (count == 1) {
    innerDiv.remove()
  } else {
    count--;
    innerDiv.innerHTML = `<p>${count}</p>`;
    innerDiv.append(image);
    innerDiv.append(br);
    innerDiv.append(minus);
    contain.append(innerDiv);
    console.log(innerDiv);
  }
}
function cartItems(e = '') {
  if (count <= 0) {
    
  }else{
    innerDiv.innerHTML = `<p>${count++}</p>`;
  }
  
  
  image.setAttribute("alt", "Add anything to display here");
  image.src = e
  minus.setAttribute("id", "minus")
  minus.setAttribute("onclick","lessCount()")
  minus.innerText = '-'
  innerDiv.append(image)
  innerDiv.append(br)
  innerDiv.append(minus)
  
  contain.append(innerDiv)
  
  
}

