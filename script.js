getProducts();

function getProducts() {
  fetch(
    "https://dummyjson.com/products?limit=8&select=title,price,description,discountPercentage,thumbnail"
  )
    .then((data) => data.json())
    .then((data) => displayProducts(data.products));
}

function displayProducts(products) {
  const productsList = document.querySelector(".products");
  products.forEach((element) => {
    productsList.innerHTML += `
    <div class="card">
      <div class="image">
        <img src="${element.thumbnail}" alt="product" class="product-image" />
      </div>
      <div class="info">
        <h3 class="title">${element.title}</h3>
        <p class="description">
          ${element.description}
        </p>
        <div class="prices">
          <span class="current-price">${(
            element.price -
            (element.discountPercentage / 100) * element.price
          ).toFixed(0)}$</span>
          <span class="old-price">${element.price}$</span>
        </div>
      </div>
      <div class="actions">
        <button class="add"><span class="cart-icon"><img src="./images/cart.svg"></span><spna>Add to Cart</spna></button>
        <button class="fav"><span class="fav-icon"><img src="./images/Favorite.svg"></span></button>
      </div>
    </div>
    `;
  });
}
