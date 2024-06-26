// data to map
const hairCareData = [
  {
    img: "https://cdn.shopify.com/s/files/1/1454/5188/products/Cappuccino-Coffee-Shampoo.jpg?v=1644475260&width=550",
    id: 301,
    originalPrice: 499,
    discountedPrice: 424,
    name: "Anti-Dandruff Cappuccino Shampoo with Natural AHA - 250ml",
  },
  {
    img: "https://cdn.shopify.com/s/files/1/1454/5188/products/1_13872b7d-0760-471f-8011-983191fa1b61.jpg?v=1634705420&width=550",
    id: 302,
    originalPrice: 1029,
    discountedPrice: 875,
    name: "Coffee Hair Boost & Hair Fall Control Kit",
  },
  {
    img: "https://cdn.shopify.com/s/files/1/1454/5188/products/1_e1dd14f3-fb54-4622-bd1e-4ebaebf937fd.jpg?v=1637243621&width=550",
    id: 303,
    originalPrice: 689,
    discountedPrice: 586,
    name: "De-stress Hair Oiling Routine",
  },
  {
    img: "https://cdn.shopify.com/s/files/1/1454/5188/products/1_ec1f3313-1406-417f-86cf-b5f7a3d8520d.jpg?v=1636548356&width=550",
    id: 304,
    originalPrice: 1229,
    discountedPrice: 1045,
    name: "Cappuccino- Anti-Dandruff Kit",
  },
  {
    img: "https://cdn.shopify.com/s/files/1/1454/5188/products/8_2.jpg?v=1646893970&width=550",
    id: 305,
    originalPrice: 599,
    discountedPrice: 509,
    name: "Intense Damage Repair Latte Hair Mask with Coconut Milk & Shea Butter - 200g",
  },
  {
    img: "https://cdn.shopify.com/s/files/1/1454/5188/products/8_3.jpg?v=1646903997&width=550",
    id: 306,
    originalPrice: 399,
    discountedPrice: 339,
    name: "Damage Repair Latte Leave-In Hair Cream with Coconut Milk - 50ml",
  },
];

function updateCartCount() {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const cartCount = document.getElementById("cartCount");
  cartCount.textContent = cart.length;
}

function addToCart(item) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.push(item);
  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartCount();
}

const userFound = JSON.parse(localStorage.getItem("userInfo"));

if (!userFound) {
  window.location.href = "login.html";
} else {
  // append to this div
  let hairCareContainer = document.getElementById("hairCareContainer");

  const productDivs = hairCareData.map((item) => {
    let productDiv = document.createElement("div");
    productDiv.classList.add("product");

    let imgContainer = document.createElement("div");
    imgContainer.classList.add("img-container");

    let img = document.createElement("img");
    img.classList.add("productImg");
    img.src = item.img;
    img.alt = item.name;

    let productName = document.createElement("p");
    productName.classList.add("productName");
    productName.textContent = item.name;

    let priceContainer = document.createElement("div");
    priceContainer.classList.add("price-container");

    let originalPrice = document.createElement("p");
    originalPrice.classList.add("originalPrice");
    originalPrice.textContent = item.originalPrice;

    let discountedPrice = document.createElement("p");
    discountedPrice.classList.add("discountedPrice");
    discountedPrice.textContent = item.discountedPrice;

    let addToCartDiv = document.createElement("button");
    addToCartDiv.textContent = "Add to Cart";
    addToCartDiv.classList.add("add-to-cart");

    addToCartDiv.addEventListener("click", () => {
      addToCart(item);
    });

    imgContainer.appendChild(img);
    priceContainer.appendChild(discountedPrice);
    priceContainer.appendChild(originalPrice);

    productDiv.appendChild(imgContainer);
    productDiv.appendChild(productName);
    productDiv.appendChild(priceContainer);
    productDiv.appendChild(addToCartDiv);

    return productDiv;
  });

  productDivs.forEach((productDiv) => {
    hairCareContainer.appendChild(productDiv);
  });

  updateCartCount();
}
