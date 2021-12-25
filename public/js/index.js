/* eslint-disable */
import '@babel/polyfill';

import {signup, login, logout,confirmToken,reserve,deleteReservation} from './login';
import { showAlert } from './alerts';
const moment = require('moment');


// DOM ELEMENTS

const signupForm = document.querySelector('.form--signup');
const tokenForm = document.querySelector('.form--token');
const loginForm = document.querySelector('.form--login');
const logOutBtn = document.querySelector('.nav__el--logout');
const deleteBtn = document.querySelectorAll('.nav__search-btn');
const userDataForm = document.querySelector('.user-view__form-container');

// DELEGATION

if (loginForm)
  loginForm.addEventListener('submit', e => {
    e.preventDefault();
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
    const mobile = document.getElementById('Mobile').value.toString();
    const password = document.getElementById('password').value;
    const passwordConfirm = document.getElementById('passwordConfirm').value;
    signup(name,email,mobile, password,passwordConfirm);
  });



if (logOutBtn) logOutBtn.addEventListener('click',e=> {
  console.log('logout');
  logout()});

  if (deleteBtn){
  for (const button of deleteBtn) {
    button.addEventListener('click', e => {
      const id=button.value;
      deleteReservation(id);
    });
  }
}


if (userDataForm)
  userDataForm.addEventListener('submit',async e => {
    e.preventDefault();
    const guests = document.getElementById('guests').value;
    const bookedAt_= document.getElementById('bookedAt').value;
    const bookedAt= moment(bookedAt_).format("MM/DD/YYYY HH:mm:ss")
    const menu_ = document.getElementById('menu-selections').innerText;
    const menu= menu_.slice(0,menu_.length-1);
    const kids = document.getElementById('kids').value;
    
    console.log(bookedAt);
    reserve(guests,bookedAt,menu,kids);
  });

const alertMessage = document.querySelector('body').dataset.alert;
if (alertMessage) showAlert('success', alertMessage, 20);
