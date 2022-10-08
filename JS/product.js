// Products //
fetch("/JS/product.json")
.then((r) => r.json())
.then((r) => {
    console.log(r);
    const products = r.products; 
    let productContainer =
    document.querySelector(".product-container");
    r.forEach((element) => {
        productContainer.innerHTML +=
         `<img src=${element.image} alt="" />
       <p class="product"> ${element.name} <br> </p>
      <p class="price"> ${element.price}</p> <br>
       <p class="description">${element.description}</p>`;
        
    }); 
})

// Navbar // 
