import {cart, addToCart, calculateCartQuantity} from '../data/cart.js';
import {products} from '../data/products.js';
import {formatCurrency} from './utils/money.js';
import dayjs from 'https://unpkg.com/supersimpledev@8.5.0/dayjs/esm/index.js';
import {dateExperiment} from './utils/Ex15.js';
import isSatSun from './utils/Ex15.js';

let productsHTML = '';

products.forEach((product) => {
  productsHTML += `
  <div class="product-container">
    <div class="product-image-container">
      <img class="product-image"
        src="${product.image}">
    </div>

    <div class="product-name limit-text-to-2-lines">
      ${product.name}
    </div>

    <div class="product-rating-container">
      <img class="product-rating-stars"
        src="${product.getStarsUrl()}">
      <div class="product-rating-count link-primary">
        ${product.rating.count}
      </div>
    </div>

    <div class="product-price">
      ${product.getPrice()}
    </div>

    <div class="product-quantity-container">
      <select class="js-quantity-selector-${product.id}">
        <option selected value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
        <option value="10">10</option>
      </select>
    </div>

    <div class="product-spacer"></div>

    <div class="added-to-cart js-added-to-cart-${product.id}">
      <img src="images/icons/checkmark.png">
      Added
    </div>

    <button class="add-to-cart-button button-primary js-add-to-cart"
            data-product-id="${product.id}">
      Add to Cart
    </button>
  </div>`;
});

document.querySelector('.js-products-grid').innerHTML = productsHTML;

function updateCartQuantity() {
  document.querySelector('.js-cart-quantity').innerHTML = calculateCartQuantity();;
}

updateCartQuantity();

document.querySelectorAll('.js-add-to-cart').forEach((button) => {
  let timeoutID;
  button.addEventListener('click', () => {
    const productId = button.dataset.productId;
    const quantity = Number(document.querySelector(`.js-quantity-selector-${productId}`).value);
    addToCart(productId, quantity);
    updateCartQuantity()

    document.querySelector(`.js-added-to-cart-${productId}`).classList.add(`js-added-to-cart-visible`);

    clearTimeout(timeoutID);
    timeoutID = setTimeout(() => {
      document.querySelector(`.js-added-to-cart-${productId}`).classList.remove(`js-added-to-cart-visible`);
    }, 2000);
  });
});

dateExperiment();

let date = dayjs();
console.log(date.format('dddd, MMMM D'));
console.log(isSatSun(date));
date = dayjs().add(2, 'day');
console.log(date.format('dddd, MMMM D'));
console.log(isSatSun(date));
date = dayjs().add(4, 'day');
console.log(date.format('dddd, MMMM D'));
console.log(isSatSun(date));
date = dayjs().add(6, 'day');
console.log(date.format('dddd, MMMM D'));
console.log(isSatSun(date));