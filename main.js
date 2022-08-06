const emailNav = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const hamMenuIcon = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");
const shoppingCartIcon = document.querySelector(".navbar-shopping-cart");
const shoppingCartContainer = document.querySelector("#shoppingCartContainer");
const cardsContainer = document.querySelector(".cards-container");

emailNav.addEventListener("click", toggleDesktopMenu);
hamMenuIcon.addEventListener("click", toggleMobileMenu);
shoppingCartIcon.addEventListener("click", toggleCarritoAside);

function toggleDesktopMenu() {
  const isshoppingCartContainerClosed =
    shoppingCartContainer.classList.contains("inactive");
  if (!isshoppingCartContainerClosed) {
    shoppingCartContainer.classList.add("inactive");
  }
  desktopMenu.classList.toggle("inactive");
}
function toggleMobileMenu() {
  const isshoppingCartContainerClosed =
    shoppingCartContainer.classList.contains("inactive");
  if (!isshoppingCartContainerClosed) {
    shoppingCartContainer.classList.add("inactive");
  }
  mobileMenu.classList.toggle("inactive");
}
function toggleCarritoAside() {
  const isDesktopMenuClosed = desktopMenu.classList.contains("inactive");
  const isMobileMenuClosed = mobileMenu.classList.contains("inactive");

  if (!isMobileMenuClosed) {
    mobileMenu.classList.add("inactive");
  }
  if (!isDesktopMenuClosed) {
    desktopMenu.classList.add("inactive");
  }
  shoppingCartContainer.classList.toggle("inactive");
}

const productsList = [];
productsList.push({
  name: "Bike",
  price: 120,
  image:
    "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});
productsList.push({
  name: "SmartTV",
  price: 420,
  image:
    "https://s1.eestatic.com/2020/09/30/omicrono/tecnologia/tecnologia-hardware-imagen_y_sonido_524709269_161351409_1024x576.jpg",
});
productsList.push({
  name: "Washing machine",
  price: 560,
  image:
    "https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/media/image/2022/01/lavadora-secadora-2586449.jpg",
});
productsList.push({
  name: "Bike",
  price: 120,
  image:
    "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});
productsList.push({
  name: "SmartTV",
  price: 420,
  image:
    "https://s1.eestatic.com/2020/09/30/omicrono/tecnologia/tecnologia-hardware-imagen_y_sonido_524709269_161351409_1024x576.jpg",
});
productsList.push({
  name: "Washing machine",
  price: 560,
  image:
    "https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/media/image/2022/01/lavadora-secadora-2586449.jpg",
});

function renderProducts(array) {
  for (product of array) {
    const productCard = document.createElement("div");
    productCard.classList.add("product-card");

    const productImg = document.createElement("img");
    productImg.setAttribute("src", product.image);

    const productInfo = document.createElement("div");
    productInfo.classList.add("product-info");

    const productInfoDiv = document.createElement("div");

    const productPrice = document.createElement("p");
    productPrice.innerText = "$" + product.price;

    const productName = document.createElement("p");
    productName.innerText = product.name;

    const productInfoFigure = document.createElement("figure");

    const productInfoImg = document.createElement("img");
    productInfoImg.setAttribute("src", "./icons/bt_add_to_cart.svg");

    productCard.appendChild(productImg);
    productCard.appendChild(productInfo);

    productInfo.appendChild(productInfoDiv);
    productInfoDiv.appendChild(productPrice);
    productInfoDiv.appendChild(productName);

    productInfo.appendChild(productInfoFigure);
    productInfoFigure.appendChild(productInfoImg);

    cardsContainer.appendChild(productCard);
  }
}

renderProducts(productsList);
