document.addEventListener('DOMContentLoaded', function () {
const loginLink = document.querySelector('.login-link');
const wrapper = document.querySelector('.wrapper');
const close = document.querySelector('.icon-close');
const registerLink = document.querySelector('.register-link');
const btn = document.querySelector('.btnlogin-popup');


registerLink.addEventListener('click', ()=> {
    wrapper.classList.add('active');
});

loginLink.addEventListener('click', ()=> {
    wrapper.classList.remove('active');
});

btn.addEventListener('click', ()=> {
    wrapper.classList.add('active-popup');
});

close.addEventListener('click', ()=> {
    wrapper.classList.remove('active-popup');
});

});