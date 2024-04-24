const userFound = JSON.parse(localStorage.getItem("userInfo"));

let cart = JSON.parse(localStorage.getItem("cart")) || [];

function updateCartCount() {
  const cartCount = document.getElementById("cartCount");
  cartCount.textContent = cart.length;
}

function calculateTotalAmount() {
  let total = 0;
  if (cart.length > 0) {
    cart.forEach((element) => {
      total = total + element.discountedPrice;
    });
  }
  return total;
}

if (!userFound) {
  window.location.href = "login.html";
} else {
  // add cart data to this div
  let cartContainer = document.getElementById("cartContainer");

  let productInfoDiv = document.createElement("div");
  productInfoDiv.classList.add("productInfoDiv");

  let priceInfoDiv = document.createElement("div");
  priceInfoDiv.classList.add("priceInfoDiv");

  let couponDiv = document.createElement("div");
  couponDiv.classList.add("couponDiv");

  let totalItems = document.createElement("h2");
  totalItems.id = "totalItems";
  totalItems.textContent = `Total items in cart: ${cart.length}`;

  let totalAmount = document.createElement("h2");
  totalAmount.id = "totalAmount";
  function updateTotalAmount() {
    totalAmount.textContent = `Total Amount: ${calculateTotalAmount()}`;
  }

  let enterCouponDiv = document.createElement("div");
  enterCouponDiv.classList.add("enterCouponDiv");

  let enterCoupon = document.createElement("input");
  enterCoupon.classList.add("enterCoupon");
  enterCoupon.placeholder = "Enter Coupon code";

  let applyCoupon = document.createElement("button");
  applyCoupon.classList.add("applyCoupon");
  applyCoupon.textContent = "Apply Coupon";

  applyCoupon.addEventListener("click", applyCuoponCode);

  function applyCuoponCode() {
    let enteredCoupon = enterCoupon.value.trim();

    if (cart.length < 1) {
      alert("Please add a product to your cart & try again");
      return;
    }

    if (enteredCoupon === "") {
      alert("Please enter a Coupon code");
      return;
    }

    if (enteredCoupon === "Masai15") {
      let totalAmount = calculateTotalAmount();
      let discountedAmount = totalAmount * 0.15;
      totalAmount -= discountedAmount;
      updateBillAmount(totalAmount);
      alert("Coupon applied successfully!");
    } else {
      alert("Invalid Coupon code");
    }
  }

  enterCouponDiv.appendChild(enterCoupon);
  enterCouponDiv.appendChild(applyCoupon);

  let billAmountDiv = document.createElement("h1");
  billAmountDiv.classList.add("billAmountDiv");
  billAmountDiv.textContent = "Bill Amount: " + calculateTotalAmount();

  document.body.appendChild(billAmountDiv);

  function updateBillAmount(amount) {
    billAmountDiv.textContent = "Bill Amount: " + amount;
  }

  priceInfoDiv.appendChild(totalItems);
  priceInfoDiv.appendChild(totalAmount);
  couponDiv.appendChild(enterCouponDiv);
  couponDiv.appendChild(billAmountDiv);

  productInfoDiv.appendChild(priceInfoDiv);
  productInfoDiv.appendChild(couponDiv);

  

  cartContainer.appendChild(productInfoDiv);

  updateCartCount();
  updateTotalAmount();
}
