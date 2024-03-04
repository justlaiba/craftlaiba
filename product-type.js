function addToCart() {
  var title = document.getElementById("product-name").innerText;
  var priceString = document.getElementById("product-price").innerText;
  // Extract numeric value from the price string
  var price = parseFloat(priceString.replace(/[^\d.]/g, ""));
  var imageSrc = document.getElementById("product-image").src;

  addItemToCart(title, price, imageSrc);
  updateCartTotal();
}



// ... (remaining JavaScript code) ...

  function addItemToCart(title, price, imageSrc) {
    var cartRow = document.createElement("tr");
    cartRow.classList.add("cart-row");

    var cartItems = document.querySelector(".cart-items");
    var cartItemNames = cartItems.querySelectorAll(".cart-item-title");

    for (var i = 0; i < cartItemNames.length; i++) {
      if (cartItemNames[i].innerText === title) {
        alert("This item is already in the cart!");
        return;
      }
    }

    var cartRowContents = `
  <td class="cart-item cart-column">
    <img class="cart-item-image" src="${imageSrc}" width="50" height="50">
    <span class="cart-item-title">${title}</span>
  </td>
  <td class="cart-item cart-column">
    <span class="cart-price cart-column">$${price.toFixed(2)}</span>
  </td>
  <td class="cart-item cart-column">
    <input class="cart-quantity-input" type="number" value="1" style="width: 50px">
    <button class="btn btn-danger" type="button">Remove</button>
  </td>
  <td class="cart-item cart-column">
    <span class="cart-item-total">$${price.toFixed(2)}</span>
  </td>
`;

    cartRow.innerHTML = cartRowContents;
    cartItems.appendChild(cartRow);

    // Add event listeners for the new quantity input and remove button
    cartRow
      .querySelector(".btn-danger")
      .addEventListener("click", removeCartItem);
    cartRow
      .querySelector(".cart-quantity-input")
      .addEventListener("change", quantityChanged);
  }

  function updateCartTotal() {
    var cartItemContainer = document.querySelector(".cart-items");
    var cartRows = cartItemContainer.querySelectorAll(".cart-row");
    var total = 0;

    for (var i = 0; i < cartRows.length; i++) {
      var cartRow = cartRows[i];
      var priceElement = cartRow.querySelector(".cart-price");
      var quantityElement = cartRow.querySelector(".cart-quantity-input");
      var totalElement = cartRow.querySelector(".cart-item-total");

      var price = parseFloat(priceElement.innerText.replace("$", ""));
      var quantity = quantityElement.value;
      var itemTotal = price * quantity;

      total += itemTotal;

      totalElement.innerText = "$" + itemTotal.toFixed(2);
    }

    document.querySelector(".cart-total-price").innerText =
      "$" + total.toFixed(2);
  }

  const stars = document.querySelectorAll(".rating-star");
  const userRating = document.getElementById("user-rating");

  stars.forEach((star, index) => {
    star.addEventListener("click", () => {
      userRating.textContent = index + 1;
      resetStars();
      highlightStars(index);
    });
  });

  function resetStars() {
    stars.forEach((star) => {
      star.style.color = "black";
    });
  }

  function highlightStars(index) {
    for (let i = 0; i <= index; i++) {
      stars[i].style.color = "orange";
    }
  }