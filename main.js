const emailNav = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const hamMenuIcon = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");
const shoppingCartIcon = document.querySelector(".navbar-shopping-cart");
const aside = document.querySelector(".product-detail");
const cardsContainer = document.querySelector(".cards-container");

emailNav.addEventListener("click", toggleDesktopMenu);
hamMenuIcon.addEventListener("click", toggleMobileMenu);
shoppingCartIcon.addEventListener("click", toggleCarritoAside);

function toggleDesktopMenu() {
  const isAsideClosed = aside.classList.contains("inactive");
  if (!isAsideClosed) {
    aside.classList.add("inactive");
  }
  desktopMenu.classList.toggle("inactive");
}
function toggleMobileMenu() {
  const isAsideClosed = aside.classList.contains("inactive");
  if (!isAsideClosed) {
    aside.classList.add("inactive");
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
  aside.classList.toggle("inactive");
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
    "https://olimpica.vtexassets.com/arquivos/ids/777800/Tv-Hyundai-1016Cm-Android-Hyled4022Aim.jpg?v=637813950603230000",
});
productsList.push({
  name: "Washing machine",
  price: 560,
  image:
    "https://www.lg.com/co/images/lavadorasysecadoras/md06184216/gallery/des_12.jpg",
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
    "https://olimpica.vtexassets.com/arquivos/ids/777800/Tv-Hyundai-1016Cm-Android-Hyled4022Aim.jpg?v=637813950603230000",
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
