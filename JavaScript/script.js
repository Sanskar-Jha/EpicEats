// Add menu items
const menu = [
    {
        name: "Apple",
        price: 5,
        img: "../Images/Menu/apples.jpg",
        category: "Breakfast",
        quantity: 1
    },
    {
        name: "Biscuit",
        price: 2,
        img: "../Images/Menu/biscuit.jpg",
        category: "Lunch",
        quantity: 1
    },
    {
        name: "Burger",
        price: 25,
        img: "../Images/Menu/burger.jpg",
        category: "Lunch",
        quantity: 1
    },
    {
        name: "Chole Bhature",
        price: 35,
        img: "../Images/Menu/chole_bhature.jpg",
        category: "Dinner",
        quantity: 1
    },
    {
        name: "Donut",
        price: 5,
        img: "../Images/Menu/donut.jpg",
        category: "Breakfast",
        quantity: 1
    },
    {
        name: "Dosa",
        price: 49,
        img: "../Images/Menu/dosa.jpg",
        category: "Lunch",
        quantity: 1
    },
    {
        name: "Egg Bites",
        price: 9,
        img: "../Images/Menu/egg_bites.jpg",
        category: "Breakfast",
        quantity: 1
    },
    {
        name: "Egg Bread",
        price: 9,
        img: "../Images/Menu/egg_bread.jpg",
        category: "Lunch",
        quantity: 1
    },
    {
        name: "Franche Fries",
        price: 12,
        img: "../Images/Menu/franche_fries.jpg",
        category: "Lunch",
        quantity: 1
    },
    {
        name: "Idli",
        price: 15,
        img: "../Images/Menu/idli.jpg",
        category: "Breakfast",
        quantity: 1
    },
    {
        name: "Grapes Juice",
        price: 3,
        img: "../Images/Menu/grapes.jpg",
        category: "juice",
        quantity: 1
    },
    {
        name: "Juice",
        price: 9,
        img: "../Images/Menu/juice.jpg",
        category: "Juice",
        quantity: 1
    },
    {
        name: "Juice",
        price: 9,
        img: "../Images/Menu/juice1.jpg",
        category: "Juice",
        quantity: 1
    },
    {
        name: "Juice",
        price: 9,
        img: "../Images/Menu/juice2.jpg",
        category: "Juice",
        quantity: 1
    },
    {
        name: "Lemon Juice",
        price: 9,
        img: "../Images/Menu/lemon_juice.jpg",
        category: "Juice",
        quantity: 1
    },
    {
        name: "Orange Juice",
        price: 9,
        img: "../Images/Menu/orange_juice.jpg",
        category: "Juice",
        quantity: 1
    },
    {
        name: "Watermelon Juice",
        price: 9,
        img: "../Images/Menu/watermelon_juice.jpg",
        category: "Juice",
        quantity: 1
    },
    {
        name: "Mix Juice",
        price: 11,
        img: "../Images/Menu/mix_juice.jpg",
        category: "Special",
        quantity: 1
    },
    {
        name: "Milk",
        price: 3,
        img: "../Images/Menu/milk.jpg",
        category: "Breakfast",
        quantity: 1
    },
    {
        name: "Milk",
        price: 3,
        img: "../Images/Menu/milk1.jpg",
        category: "Breakfast",
        quantity: 1
    },
    {
        name: "Noodles",
        price: 29,
        img: "../Images/Menu/noodles.jpg",
        category: "Lunch",
        quantity: 1
    },
    {
        name: "Palak Bread",
        price: 15,
        img: "../Images/Menu/palak_bread.jpg",
        category: "Special",
        quantity: 1
    },
    {
        name: "Pav Bhaji",
        price: 19,
        img: "../Images/Menu/pav_bhaji.jpg",
        category: "Dinner",
        quantity: 1
    },
    {
        name: "Pizza",
        price: 99,
        img: "../Images/Menu/pizza.jpg",
        category: "Lunch",
        quantity: 1
    },
    {
        name: "Roll Roti",
        price: 15,
        img: "../Images/Menu/roll_roti.jpg",
        category: "Special",
        quantity: 1
    },
    {
        name: "Salad",
        price: 5,
        img: "../Images/Menu/salad.jpg",
        category: "Lunch",
        quantity: 1
    },
    {
        name: "Strawberry",
        price: 2,
        img: "../Images/Menu/strawberry.jpg",
        category: "Juice",
        quantity: 1
    },
    {
        name: "Sweets",
        price: 11,
        img: "../Images/Menu/sweets.jpg",
        category: "Special",
        quantity: 1
    },
    {
        name: "Tea",
        price: 2,
        img: "../Images/Menu/tea.jpg",
        category: "Breakfast",
        quantity: 1
    }
]

// Fetch all the items in the menu
const menuCard = document.getElementById('menu-card');
menu.forEach(function (item, buttonId) {
    menuCard.innerHTML += `<div class="menu-card-item ${item.category}">
                            <div class="item-img">
                                <img src="${item.img}" alt="${item.name}">
                            </div>
                            <h4 class="item-name">${item.name}</h4>
                            <h5 class="item-price">${item.price} Rs</h5>
                            <button class="add-to-cart" id="${buttonId}" onclick="addToCart(this.id)">Add to Cart</button>
                        </div>`;
});

// Adding items to the cart
const addCartItem = document.getElementById('add-cart-item');
const cartItems = []; // Array to store cart items
const itemNum = document.getElementById('item-num');
itemNum.style.display = 'none';
let cartItemNotificationNum = 0;

function addToCart(buttonId) {
    // Find the corresponding item in the menu array based on index(button)
    const cartData = menu[buttonId];

    itemNum.style.display = 'block';
    itemNum.innerText = ++cartItemNotificationNum;

    if (!cartData) {
        // console.error("Invalid item index:", buttonId);
        return; // Handle invalid item index gracefully
    }

    // Check if item already exists in cart
    // const existingItem = cartItems.find(item => item.id === cartData.id); // Assuming unique IDs

    // if (existingItem) {
    //     existingItem.quantity++; // Increase quantity for existing item
    // } else {
    //     cartItems.push({ ...cartData, quantity: 1 }); // Add new item with quantity 1
    // }

    addCartItem.innerHTML += `<div class="cart-item d-flex align-center">
                                    <div class="cart-item-img">
                                        <img src="${cartData.img}" alt="${cartData.name}">
                                    </div>
                                    <div class="cart-item-data">
                                        <p>${cartData.name}</p>
                                        <p>${cartData.price} Rs</p>

                                        <div class="item-count d-flex justify-between align-center">
                                            <i class="fa-solid fa-plus plus"></i>
                                            <span class="item-quantity">${cartData.quantity}</span>
                                            <i class="fa-solid fa-minus minus"></i>
                                        </div>
                                    </div>

                                    <!-- Delete icon -->
                                    <div class="delete-icon">
                                        <i class="fa-solid fa-trash delete"></i>
                                    </div>
                                </div>`;

    // Add items to cart
    cartItems.push(cartData);
    updateCartDisplay();
}

// Function to update cart display in the UI
function updateCartDisplay() {
    // Clear previous cart items before rendering
    addCartItem.innerHTML = '';

    if (cartItems.length === 0) {
        addCartItem.innerHTML = '<p>Your cart is empty.</p>';
        document.getElementById('checkout').style.display = 'none';
        return;
    }

    document.getElementById('checkout').style.display = 'block';

    // Generate cart item HTML based on cartItems array
    cartItems.forEach(function (cartItem, id) {
        addCartItem.innerHTML += `<div class="cart-item d-flex align-center">
                                    <div class="cart-item-img">
                                    <img src="${cartItem.img}" alt="${cartItem.name}">
                                    </div>
                                    <div class="cart-item-data">
                                    <p>${cartItem.name}</p>
                                    <p>${cartItem.price} Rs</p>
                                    <div class="item-count d-flex justify-between align-center">
                                        <i id="${id}-plus" onclick="addQuantity(this.id)" class="fa-solid fa-plus plus"></i>
                                        <span class="item-quantity">${cartItem.quantity}</span>
                                        <i id="${id}-minus" onclick="subtractQuantity(this.id)" class="fa-solid fa-minus minus"></i>
                                    </div>
                                    </div>
                                    <div class="delete-icon">
                                        <i id="${id}-delete" onclick="cartItemDel(this.id)" class="fa-solid fa-trash delete"></i>
                                    </div>
                                </div>`;
    });
}

// Function to handle increase in quantity
function addQuantity(plusButtonId) {
    const itemId = plusButtonId.split('-')[0]; // Extract item ID from button ID
    if (itemId !== -1) {
        cartItems[itemId].quantity++;
        updateCartDisplay();
    } else {
        // console.error("Couldn't find item with ID:", itemId);
    }
}

// Function to handle decrease in quantity
function subtractQuantity(minusButtonId) {
    const itemId = minusButtonId.split('-')[0];

    if (itemId !== -1) {
        if (cartItems[itemId].quantity > 1) {
            cartItems[itemId].quantity--;
        } else {
            cartItems.splice(itemId, 1); // Remove item from cart if quantity reaches 0
            itemNum.innerText = --cartItemNotificationNum;

            if (itemNum.innerText == 0) {
                itemNum.style.display = 'none';
            }
        }
        updateCartDisplay();
    } else {
        // console.error("Couldn't find item with ID:", itemId);
    }
}

// Function to handle delete item from cart
function cartItemDel(delButtonId) {
    if (delButtonId !== -1) {
        cartItems.splice(delButtonId, 1);
        itemNum.innerText = --cartItemNotificationNum;

        if (itemNum.innerText == 0) {
            itemNum.style.display = 'none';
        }
        updateCartDisplay();
    } else {
        // console.error("Couldn't find item with ID:", itemId);
    }
}

updateCartDisplay();

// Menu Cross Icon open
document.getElementById('shopping-cart').addEventListener('click', () => {
    document.getElementById('add-to-cart').style.transform = 'translateX(0rem)';
});

// Menu Cross Icon close
document.getElementById('menu-cross-icon').addEventListener('click', () => {
    document.getElementById('add-to-cart').style.transform = 'translateX(32rem)';
});

// click on checkout button to open contact form
document.getElementById('checkout-btn').addEventListener('click', () => {
    document.getElementById('form-section').style.transform = 'translateY(0rem)';
    document.getElementById('form-section').style.visibility = 'visible';
    document.getElementById('add-to-cart').style.transform = 'translateX(32rem)';
    document.documentElement.style.overflow = 'hidden';
    document.body.scroll = "no";
});

// Menu item filter
const menuBtns = document.querySelectorAll('#menu-btns button');
const cartDatas = document.querySelectorAll('.menu-card-item');

menuBtns.forEach((menuBtn) => {
    menuBtn.addEventListener('click', (e) => {
        const filter = e.target.dataset.filter; //provide button value
        cartDatas.forEach((cartData) => {
            if (cartData.classList.contains(filter)) {
                cartData.style.display = 'block';
            }
            else {
                cartData.style.display = 'none';
            }
        });
    });
});

// Open shopping cart
const shoppingCart = document.getElementById('shopping-cart');
shoppingCart.addEventListener('click', () => {
    document.getElementById('add-cart-item').style.transform = 'translateX(0rem)';
});

// Form Validation
const name = document.getElementById('name');
const phone = document.getElementById('phone');
const email = document.getElementById('email');
const address = document.getElementById('address');
reqName = false;
reqPhone = false;
reqEmail = false;

name.addEventListener('blur', () => {
    let regex = /^[a-zA-Z](s?[a-zA-Z0-9\.\-\']{0,24})?$/;
    let str = name.value;

    if (regex.test(str)) {
        reqName = true;
        name.classList.remove('error');
    } else {
        reqName = false;
        name.classList.add('error');
    }
});

phone.addEventListener('blur', () => {
    let regex = /^\(?(\d{3})\)?[ .-]?\d{3}[ .-]?\d{4}$/;
    let str = phone.value;

    if (regex.test(str)) {
        reqPhone = true;
        phone.classList.remove('error');
    } else {
        reqPhone = false;
        phone.classList.add('error');
    }
});

email.addEventListener('blur', () => {
    let regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    let str = email.value;

    if (regex.test(str)) {
        reqEmail = true;
        email.classList.remove('error');
    } else {
        reqEmail = false;
        email.classList.add('error');
    }
});

// Submit Form
const form = document.getElementById('form');
const submitBtn = document.getElementById('submit-btn');

submitBtn.addEventListener('click', (e) => {
    e.preventDefault();
    if (reqName == true && reqPhone == true && reqEmail == true && address.value != "") {
        submitBtn.innerText = "Done!";
        setTimeout(() => {
            submitBtn.innerText = "Submit";
        }, 3000);

        form.reset();
        reqName = false;
        reqPhone = false;
        reqEmail = false;
    }
    else {
        submitBtn.innerText = "Something went wrong!";
        setTimeout(() => {
            submitBtn.innerText = "Submit";
        }, 3000);
    }
});

// Join community Section
const isJoin = document.getElementById('is-join');
const invalidJoin = document.getElementById('invalid-join');
isJoin.style.display = 'none';
invalidJoin.style.display = 'none';

const joinCommunityBtn = document.getElementById('join-community-btn');
joinCommunityBtn.addEventListener('click', () => {
    if (document.getElementById('join-community-email').value != '') {
        isJoin.style.display = 'block';
    }
    else {
        invalidJoin.style.display = 'block';
    }

    setTimeout(() => {
        isJoin.style.display = 'none';
        invalidJoin.style.display = 'none';
    }, 3000);

    document.getElementById('join-community-email').value = "";
});

// Stop scrolling when Contact form appears
document.getElementById('contact-form').addEventListener('click', () => {
    document.getElementById('form-section').style.transform = 'translateY(0rem)';
    document.getElementById('form-section').style.visibility = 'visible';
    document.documentElement.style.overflow = 'hidden';
    document.body.scroll = "no";
});

// Resume scrolling when Contact form disable
document.getElementById('form-cross-icon').addEventListener('click', () => {
    document.getElementById('form-section').style.transform = 'translateY(-41rem)';
    document.getElementById('form-section').style.visibility = 'hidden';
    document.documentElement.style.overflow = 'scroll';
    document.body.scroll = "yes";
});