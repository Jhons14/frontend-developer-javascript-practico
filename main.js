const emailNav = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const hamMenuIcon = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");
const shoppingCartIcon = document.querySelector(".navbar-shopping-cart");
const shoppingCartContainer = document.querySelector("#shoppingCartContainer");
const cardsContainer = document.querySelector(".cards-container");
const productDetailAside = document.querySelector("#productDetail");
const productDetailCloseIcon = document.querySelector(".product-detail-close");
const productDetaiIImg = document.querySelector("#productDetail>img");

emailNav.addEventListener("click", toggleDesktopMenu);
hamMenuIcon.addEventListener("click", toggleMobileMenu);
shoppingCartIcon.addEventListener("click", toggleCarritoAside);
productDetailCloseIcon.addEventListener("click", closeProductDetailAside);

function toggleDesktopMenu() {
  const isShoppingCartContainerClosed =
    shoppingCartContainer.classList.contains("inactive");

  if (!isShoppingCartContainerClosed) {
    shoppingCartContainer.classList.add("inactive");
  }

  closeProductDetailAside();

  desktopMenu.classList.toggle("inactive");
}

function toggleMobileMenu() {
  const isShoppingCartContainerClosed =
    shoppingCartContainer.classList.contains("inactive");
  if (!isShoppingCartContainerClosed) {
    shoppingCartContainer.classList.add("inactive");
  }
  closeProductDetailAside();
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

  closeProductDetailAside();

  shoppingCartContainer.classList.toggle("inactive");
}
function closeProductDetailAside() {
  productDetailAside.classList.add("inactive");
}
function openProductDetailAside() {
  // Es lo mismo que en las demas funciones pero sin condicional, se pudo notar que en caso de que la clase 'inactive' se agregue dos veces, esta no se repetira ni afectara el funcionameinto de la funcion
  cardsContainer.sty;
  desktopMenu.classList.add("inactive");
  mobileMenu.classList.add("inactive");
  shoppingCartContainer.classList.add("inactive");
  productDetailAside.classList.remove("inactive");
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
    productImg.addEventListener("click", openProductDetailAside);

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
