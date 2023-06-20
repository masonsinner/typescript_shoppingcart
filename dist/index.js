import { User } from './user';
import { Shop } from './shop';
var users = [];
var shop = new Shop();
var loginDiv = document.getElementById('login');
var shopDiv = document.getElementById('shop');
var cartDiv = document.getElementById('cart');
var cartItemsDiv = document.getElementById('cartItems');
var loginBannerDiv = document.getElementById('loginBanner');
var loginForm = document.getElementById('loginForm');
var loginUsernameInput = document.getElementById('loginUsernameInput');
var loginPasswordInput = document.getElementById('loginPasswordInput');
var loginButton = document.getElementById('loginButton');
var shopItemsDiv = document.getElementById('shopItems');
var logoutButton = document.getElementById('logoutButton');
var logoutLink = document.getElementById('logout-link');
logoutLink.addEventListener('click', function () {
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
var user = null;
var user1 = new User('Masonsinner', 22, 'shadowscope13@gmail.com', 'a');
users.push(user1);
loginForm.addEventListener('submit', function (e) {
    e.preventDefault();
    var username = loginUsernameInput.value;
    var password = loginPasswordInput.value;
    var existingUser = users.find(function (u) { return u.getName() === username; });
    if (existingUser) {
        var loginSuccessful = existingUser.login(password);
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
        }
        else {
            displayLoginBanner(false);
            alert('Invalid password. Please try again.');
        }
    }
    else {
        displayLoginBanner(false);
        alert('Invalid username. Please try again.');
    }
});
function displayShopItems() {
    shopItemsDiv.innerHTML = '';
    var items = shop.getItems();
    var _loop_1 = function (item) {
        var itemDiv = document.createElement('div');
        itemDiv.classList.add('item');
        var itemName = document.createElement('p');
        itemName.innerText = item.getName();
        var itemPrice = document.createElement('p');
        itemPrice.innerText = "".concat(item.getPrice(), " coins");
        var addToCartButton = document.createElement('button');
        addToCartButton.innerText = 'Add to Cart';
        addToCartButton.addEventListener('click', function () {
            if (user) {
                user.addToCart(item);
                if (user.getCart().length === 1) {
                    cartDiv.style.display = 'block';
                }
                displayCartItems();
            }
            else {
                alert('Please log in to add items to your cart.');
            }
        });
        itemDiv.appendChild(itemName);
        itemDiv.appendChild(itemPrice);
        itemDiv.appendChild(addToCartButton);
        shopItemsDiv.appendChild(itemDiv);
    };
    for (var _i = 0, items_1 = items; _i < items_1.length; _i++) {
        var item = items_1[_i];
        _loop_1(item);
    }
}
function displayCartItems() {
    cartItemsDiv.innerHTML = '';
    var cartItems = user === null || user === void 0 ? void 0 : user.getCart();
    if (cartItems) {
        var _loop_2 = function (item) {
            var itemDiv = document.createElement('div');
            itemDiv.classList.add('cart-item');
            var itemName = document.createElement('p');
            itemName.innerText = item.getName();
            var itemPrice = document.createElement('p');
            itemPrice.innerText = "".concat(item.getPrice(), " coins");
            var removeButton = document.createElement('button');
            removeButton.innerText = 'Remove';
            removeButton.addEventListener('click', function () {
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
        };
        for (var _i = 0, cartItems_1 = cartItems; _i < cartItems_1.length; _i++) {
            var item = cartItems_1[_i];
            _loop_2(item);
        }
    }
}
function displayLoginBanner(loginSuccessful) {
    loginBannerDiv.innerHTML = '';
    var bannerText = document.createElement('p');
    bannerText.innerText = loginSuccessful ? 'Login successful!' : 'Login unsuccessful.';
    loginBannerDiv.appendChild(bannerText);
}
var cartLink = document.getElementById('cart-link');
var shopLink = document.getElementById('shop-link');
cartLink.addEventListener('click', function (event) {
    event.preventDefault();
    if (user) {
        shopDiv.style.display = 'none';
        cartDiv.style.display = 'block';
        loginDiv.style.display = 'none';
    }
    else {
        alert('Please log in to view your cart.');
    }
});
shopLink.addEventListener('click', function (event) {
    event.preventDefault();
    if (user) {
        shopDiv.style.display = 'block';
        cartDiv.style.display = 'none';
        loginDiv.style.display = 'none';
    }
    else {
        alert('Please log in to view the shop.');
    }
});
function updateNavbar() {
    if (user) {
        logoutButton.style.display = 'block';
        logoutLink.style.display = 'inline';
    }
    else {
        logoutButton.style.display = 'none';
        logoutLink.style.display = 'none';
    }
}
updateNavbar();
displayShopItems();
displayCartItems();
displayLoginBanner(false);
