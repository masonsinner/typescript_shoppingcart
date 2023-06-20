import { User } from './user';
import { Shop } from './shop';
import { Item } from './item';

const users: User[] = [];
const shop = new Shop();

const loginDiv = document.getElementById('login') as HTMLDivElement;
const shopDiv = document.getElementById('shop') as HTMLDivElement;
const cartDiv = document.getElementById('cart') as HTMLDivElement;
const cartItemsDiv = document.getElementById('cartItems') as HTMLDivElement;
const loginBannerDiv = document.getElementById('loginBanner') as HTMLDivElement;

const loginForm = document.getElementById('loginForm') as HTMLFormElement;
const loginUsernameInput = document.getElementById('loginUsernameInput') as HTMLInputElement;
const loginPasswordInput = document.getElementById('loginPasswordInput') as HTMLInputElement;
const loginButton = document.getElementById('loginButton') as HTMLButtonElement;

const shopItemsDiv = document.getElementById('shopItems') as HTMLDivElement;

const logoutButton = document.getElementById('logoutButton') as HTMLButtonElement;
const logoutLink = document.getElementById('logout-link') as HTMLAnchorElement;

logoutLink.addEventListener('click', () => {
  if (user) {
    user.logout();
    user = null;
    shopDiv.style.display = 'none';
    cartDiv.style.display = 'none';
    loginDiv.style.display = 'block';
    updateNavbar();
    displayLoginBanner(false);
  }
});

let user: User | null = null;

const user1 = new User('Masonsinner', 22, 'shadowscope13@gmail.com', 'a');
users.push(user1);

loginForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const username = loginUsernameInput.value;
  const password = loginPasswordInput.value;

  const existingUser = users.find((u) => u.getName() === username);
  if (existingUser) {
    const loginSuccessful = existingUser.login(password);
    if (loginSuccessful) {
      user = existingUser;
      loginDiv.style.display = 'none';
      cartDiv.style.display = 'block';
      shopDiv.style.display = 'block';
      updateNavbar();
      displayShopItems();
      displayCartItems();
      displayLoginBanner(true);
      window.history.replaceState(null, '', window.location.pathname);
    } else {
      displayLoginBanner(false);
      alert('Invalid password. Please try again.');
    }
  } else {
    displayLoginBanner(false);
    alert('Invalid username. Please try again.');
  }
});

function displayShopItems(): void {
  shopItemsDiv.innerHTML = '';
  const items = shop.getItems();
  for (const item of items) {
    const itemDiv = document.createElement('div');
    itemDiv.classList.add('item');

    const itemName = document.createElement('p');
    itemName.innerText = item.getName();

    const itemPrice = document.createElement('p');
    itemPrice.innerText = `${item.getPrice()} coins`;

    const addToCartButton = document.createElement('button');
    addToCartButton.innerText = 'Add to Cart';
    addToCartButton.addEventListener('click', () => {
      if (user) {
        user.addToCart(item);
        if (user.getCart().length === 1) {
          cartDiv.style.display = 'block';
        }
        displayCartItems();
      } else {
        alert('Please log in to add items to your cart.');
      }
    });

    itemDiv.appendChild(itemName);
    itemDiv.appendChild(itemPrice);
    itemDiv.appendChild(addToCartButton);

    shopItemsDiv.appendChild(itemDiv);
  }
}

function displayCartItems(): void {
  cartItemsDiv.innerHTML = '';
  const cartItems = user?.getCart();
  if (cartItems) {
    for (const item of cartItems) {
      const itemDiv = document.createElement('div');
      itemDiv.classList.add('cart-item');

      const itemName = document.createElement('p');
      itemName.innerText = item.getName();

      const itemPrice = document.createElement('p');
      itemPrice.innerText = `${item.getPrice()} coins`;

      const removeButton = document.createElement('button');
      removeButton.innerText = 'Remove';
      removeButton.addEventListener('click', () => {
        if (user) {
          user.removeFromCart(item);
          if (user.getCart().length === 0) {
            cartDiv.style.display = 'none';
          }
          displayCartItems();
        }
      });

      itemDiv.appendChild(itemName);
      itemDiv.appendChild(itemPrice);
      itemDiv.appendChild(removeButton);

      cartItemsDiv.appendChild(itemDiv);
    }
  }
}

function displayLoginBanner(loginSuccessful: boolean): void {
  loginBannerDiv.innerHTML = '';
  const bannerText = document.createElement('p');
  bannerText.innerText = loginSuccessful ? 'Login successful!' : 'Login unsuccessful.';
  loginBannerDiv.appendChild(bannerText);
}

const cartLink = document.getElementById('cart-link') as HTMLAnchorElement;
const shopLink = document.getElementById('shop-link') as HTMLAnchorElement;

cartLink.addEventListener('click', (event) => {
  event.preventDefault();
  if (user) {
    shopDiv.style.display = 'none';
    cartDiv.style.display = 'block';
    loginDiv.style.display = 'none';
  } else {
    alert('Please log in to view your cart.');
  }
});

shopLink.addEventListener('click', (event) => {
  event.preventDefault();
  if (user) {
    shopDiv.style.display = 'block';
    cartDiv.style.display = 'none';
    loginDiv.style.display = 'none';
  } else {
    alert('Please log in to view the shop.');
  }
});

function updateNavbar() {
  if (user) {
    logoutButton.style.display = 'block';
    logoutLink.style.display = 'inline';
  } else {
    logoutButton.style.display = 'none';
    logoutLink.style.display = 'none';
  }
}

updateNavbar();
displayShopItems();
displayCartItems();
displayLoginBanner(false);
