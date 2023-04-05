// ---------Nvbar------->>
let navIcon = document.getElementById('nav-icon');
let navCrossIcon = document.getElementById('nav-cross-icon');
let navbar = document.getElementById('navbar');
// let fix = document.getElementById('head');

navCrossIcon.classList.add('none');

navIcon.addEventListener('click', () => {
    navIcon.classList.add('none');
    navCrossIcon.classList.remove('none');
    navbar.classList.add('position');
    navbar.classList.add('block');
    // fix.classList.add('zIndex');
});

navCrossIcon.addEventListener('click', () => {
    navCrossIcon.classList.add('none');
    navIcon.classList.remove('none');
    navbar.classList.remove('position');
    navbar.classList.remove('block');
    // fix.classList.remove('zIndex');
});

// ---------Book Table----------->>
let name = document.getElementById('name');
let phone = document.getElementById('phone');
req_name = false;
req_phone = false;

name.addEventListener('blur', () => {
    let regex = /^[a-zA-Z](\s?[a-zA-Z(0-9)?]){0,25}$/
    let str = name.value;

    if (regex.test(str)) {
        req_name = true;
        name.classList.remove('red');
    } else {
        req_name = false;
        name.classList.add('red');
    }
});

phone.addEventListener('blur', () => {
    let regex = /^[0-9]{10}$/
    let str = phone.value;

    if (regex.test(str)) {
        req_phone = true;
        phone.classList.remove('red');
    } else {
        req_phone = false;
        phone.classList.add('red');
    }
});

let successMsg = document.getElementById('success_msg');
let errorMsg = document.getElementById('error_msg');
let submitMsg = document.getElementById('submit_msg');

successMsg.classList.add('none');
errorMsg.classList.add('none');
submitMsg.classList.add('none');

let submit = document.getElementById('submit');

submit.addEventListener('click', (e) => {
    e.preventDefault();
    if (req_name == true && req_phone == true) {
        submitMsg.classList.remove('none');
        successMsg.classList.remove('none');
        errorMsg.classList.add('none');

        setTimeout(() => {
            submitMsg.classList.add('none');
            successMsg.classList.add('none');
        }, 4000);
    }
    else {
        submitMsg.classList.remove('none');
        errorMsg.classList.remove('none');
        successMsg.classList.add('none');

        setTimeout(() => {
            submitMsg.classList.add('none');
            errorMsg.classList.add('none');
        }, 4000);
    }

    name.value = "";
    this.phone.value = "";
    req_name = false;
    req_phone = false;
});

// -------Get Membership--------->>
let email = document.getElementById('email');
req_email = false;

email.addEventListener('blur', () => {
    let regex = /^(\w+)@(\w+)\.([[a-zA-Z]){0,9}$/;
    let str = email.value;

    if (regex.test(str)) {
        req_email = true;
        email.classList.remove('red');
    } else {
        req_email = false;
        email.classList.add('red');
    }
});

let getMemberShip = document.getElementById('getMemberShip');
let invalidGmail = document.getElementById('invalidGmail');
getMemberShip.classList.add('none');
invalidGmail.classList.add('none');

let joinBtn = document.getElementById('joinBtn');

joinBtn.addEventListener('click', () =>{
    if(email.value == null){
        invalidGmail.classList.remove('none');
    }
    else if(req_email == true){
        getMemberShip.classList.remove('none');
    }
    else{
        invalidGmail.classList.remove('none');
    }

    setTimeout(() => {
        getMemberShip.classList.add('none');
    }, 3000);

    setTimeout(() => {
        invalidGmail.classList.add('none');
    }, 3000);

    this.email.value = " ";
    req_email = false;
});

// ---------MENU IMAGE--------->>

// let offerImg = document.getElementById('offer-image');

// offerImg.addEventListener('hover', ()=>{
    // offerImg.classList.add('scale');
// })