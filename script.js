let cart = [];

function addToCart(name, price){
  cart.push({name, price});
  updateCart();
}

function updateCart(){

  let cartItems = document.getElementById("cart-items");
  let total = 0;

  cartItems.innerHTML = "";

  cart.forEach((item, index) => {

    total += item.price;

    cartItems.innerHTML += `
      <div style="display:flex;justify-content:space-between;margin:10px 0;">
        <span>${item.name}</span>
        <span>${item.price} MAD</span>
        <button onclick="removeItem(${index})">❌</button>
      </div>
    `;
  });

  document.getElementById("total").innerText = total;
  document.getElementById("cart-count").innerText = cart.length;
}

function removeItem(index){
  cart.splice(index,1);
  updateCart();
}

function checkout(){

  if(cart.length === 0){
    alert("Panier vide !");
    return;
  }

  let message = "Commande Boughaf Restaurant:%0A";

  let total = 0;

  cart.forEach(item => {
    message += `- ${item.name} : ${item.price} MAD%0A`;
    total += item.price;
  });

  message += `%0ATotal: ${total} MAD`;

  let phone = "212781192367";

  window.open(`https://wa.me/${phone}?text=${message}`, "_blank");
}
