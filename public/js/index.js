/* eslint-disable */
import '@babel/polyfill';

import {signup, login, logout,confirmToken,reserve,deleteReservation} from './login';
import { showAlert } from './alerts';


// DOM ELEMENTS

const signupForm = document.querySelector('.form--signup');
const tokenForm = document.querySelector('.form--token');
const loginForm = document.querySelector('.form--login');
const logOutBtn = document.querySelector('.nav__el--logout');
const deleteBtn = document.querySelector('nav__search-btn');
const userDataForm = document.querySelector('.user-view__form-container');

// DELEGATION

if (loginForm)
  loginForm.addEventListener('submit', e => {
    e.preventDefault();
    console.log('Welcome');
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    login(email, password);
  });

  if (tokenForm)
  tokenForm.addEventListener('submit', e => {
    e.preventDefault();
    const validToken = document.getElementById('token').value;
    confirmToken(validToken);
  });



  if (signupForm)
  signupForm.addEventListener('submit', e => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const mobile = document.getElementById('mobile').value;
    const password = document.getElementById('password').value;
    const passwordConfirm = document.getElementById('passwordConfirm').value;
    signup(name,email,mobile, password,passwordConfirm);
  });



if (logOutBtn) logOutBtn.addEventListener('click', logout);

if (deleteBtn) deleteBtn.addEventListener('click',e=> {
  e.preventDefault();
  const id=e.value;
  console.log(`id: ${id}`)
  deleteReservation()
});

if (userDataForm)
  userDataForm.addEventListener('submit',async e => {
    e.preventDefault();
    console.log(e.value);

    const guests = document.getElementById('guests').value;
    const menu = document.getElementById('menu').value;
    const kids = document.getElementById('kids').value;
    const bookedAt = document.getElementById('bookedAt').value;  
    reserve(guests,bookedAt,menu,kids );
  });

const alertMessage = document.querySelector('body').dataset.alert;
if (alertMessage) showAlert('success', alertMessage, 20);
