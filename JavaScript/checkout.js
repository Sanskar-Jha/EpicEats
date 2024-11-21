// Fetch cart data from sessionStorage
const checkoutItems = JSON.parse(sessionStorage.getItem("cart"));

// No. of items in a cart
document.getElementById("checkout-item-count").innerHTML = `<small>${checkoutItems.length} ${(checkoutItems.length <= 1) ? "item" : "items"}</small>`;

let total = 0;
let deliveryCharges = 0;
document.getElementById("invalid-code").style.display = "none";

// Display order details
checkoutItems.forEach(checkoutItem => {
    total += checkoutItem.price * checkoutItem.quantity;
    document.getElementById("checkout-items").innerHTML += `<tr class="border-bottom">
                                                                <td>
                                                                    <div class="d-flex align-items-center">
                                                                        <div>
                                                                            <img class="pic" src="${checkoutItem.img}" alt="${checkoutItem.name}">
                                                                        </div>
                                                                        <div class="ps-3 d-flex flex-column justify-content">
                                                                            <p class="fw-bold">${checkoutItem.name}</p>
                                                                        </div>
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <div class="d-flex">
                                                                        <p class="pe-3"><span class="red">₹${checkoutItem.price}</span></p>
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <div class="d-flex align-items-center">
                                                                        <span class="pe-3 text-muted">${checkoutItem.quantity} Quantity</span>
                                                                    </div>
                                                                </td>
                                                            </tr>`;
});

// Display order summary
const totalPrice = document.getElementById("total-price");
const deliveryCharge = document.getElementById("delivery-charges");
const couponApplied = document.getElementById("coupon-applied");
const finalAmount = document.getElementById("final-amount");

totalPrice.innerText = '₹' + total;
deliveryCharge.innerText = '₹' + deliveryCharges;
finalAmount.innerText = '₹' + (total + deliveryCharges);

// Apply Coupon
document.getElementById("hide-coupon").style.display = "none";
document.getElementById("coupon-btn").addEventListener("click", () => {
    const couponVal = document.getElementById("coupon").value;

    if (couponVal == "EPICEATS100") {
        document.getElementById("hide-coupon").style.display = "flex";
        totalPrice.innerText = '₹' + total;
        deliveryCharge.innerText = '₹' + 49;
        couponApplied.innerText = '₹-' + total;
        finalAmount.innerText = '₹' + 49;
    }

    else if (couponVal == "EPICEATS50") {
        document.getElementById("hide-coupon").style.display = "flex";
        totalPrice.innerText = '₹' + total;
        deliveryCharge.innerText = '₹' + 10;
        couponApplied.innerText = '₹-' + (total / 2);
        finalAmount.innerText = '₹' + (total - (total / 2) + 10);
    }

    else {
        setTimeout(() => {
            document.getElementById("invalid-code").style.display = "none";
        }, 5000);
        document.getElementById("invalid-code").style.display = "block";
        document.getElementById("hide-coupon").style.display = "none";
        totalPrice.innerText = '₹' + total;
        deliveryCharge.innerText = '₹' + deliveryCharges;
        finalAmount.innerText = '₹' + (total + deliveryCharges);
    }
});

// Payment will be completed within 15 minutes
const paymentLineOpen = document.getElementById("payment-line-open");
let arrTimeLeft = [14, 59];

function deadLine() {
    paymentLineOpen.innerHTML = `<span>${arrTimeLeft[0]}:${arrTimeLeft[1]}</span>`;
    arrTimeLeft[1]--;

    if (arrTimeLeft[1] == 0) {
        arrTimeLeft[1] = 59;
        arrTimeLeft[0]--;
    }

    if (arrTimeLeft[0] == 0) {
        window.location = "index.html"
    }
}

setInterval(() => {
    deadLine();
}, 1000);

// Check out button
const checkoutBtn = document.getElementById("checkout-btn");

checkoutBtn.addEventListener("click", () => {
    checkoutBtn.classList.add("loader");
    setTimeout(() => {
        checkoutBtn.classList.remove("loader");
        checkoutBtn.classList.add("checkout-complete");
    }, 3000);

    setTimeout(() => {
        checkoutBtn.classList.remove("checkout-complete");
    }, 5000);
});

// Super fast delivery
const radioBtns = document.querySelectorAll("input[name='delivery']");

radioBtns.forEach(radioBtn => {
    radioBtn.addEventListener("click", () => {
        const checked = document.querySelector("input[name='delivery']:checked").value;
        const selected = parseInt(checked, 10);
        let couponValue = 0;

        if (couponValue == "EPICEATS100") {
            couponValue = total;
        }
        else if (couponValue == "EPICEATS50") {
            couponValue = total / 2;
        }
        else {
            couponValue = 0;
        }

        totalPrice.innerText = '₹' + total;
        deliveryCharge.innerText = '₹' + selected;
        couponApplied.innterText = '₹' + couponValue;
        finalAmount.innerText = '₹' + (total + selected - couponValue);
    });
});
