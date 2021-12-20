/* eslint-disable */
import axios from 'axios';
import crypto from 'crypto';
import { showAlert } from './alerts';
import { User } from './../../models/userModel.js';
import { AppError } from './../../utils/appError';
import Reservation from '../../models/reservationModel';

export const login = async (email, password) => {
  console.log('hello');
  try {
    const res = await axios({
      method: 'POST',
      url: '/api/v1/users/login',
      data: {
        email,
        password
      }
    });

    if (res.data.status === 'success') {
      console.log('hi');
      showAlert('success', 'Logged in successfully!');
      window.setTimeout(() => {
        location.assign('/');
      }, 1500);
    }
  } catch (err) {
    showAlert('error', err.response.data.message);
  }
};

export const logout = async () => {
  try {
    const res = await axios({
      method: 'GET',
      url: '/api/v1/users/logout'
    });
    if ((res.data.status = 'success'))
     location.assign('/');
    
  } catch (err) {
    console.log(err.response);
    showAlert('error', 'Error logging out! Try again.');
  }
};


export const signup = async (name ,email,mobile, password,passwordConfirm ) => {
  try {
    const res = await axios({
      method: 'POST',
      url: '/api/v1/users/signup',
      data: {
        name,
        email,
        mobile,
        password,
        passwordConfirm
      }
    });

    if (res.data.status === 'success') {
      showAlert('success', 'Successfully registered!');
      window.setTimeout(() => {
        location.assign('/login');
      }, 1500);
    }
  } catch (err) {
    showAlert('error', err.response.data.message);
  }
};

export const reserve = async (guests,bookedAt ,menu,kids ) => {
  try {
    console.log(`reserved at ${bookedAt}`)
    const res = await axios({
      method: 'POST',
      url: '/api/v1/reservations/reserve',
      data: {
        guests,
        bookedAt,
        menu,
        kids
      }
    });
  
    if (res.data.status === 'success') {
      showAlert('success', 'Successfully reserved!');
      window.setTimeout(() => {
        location.assign('/my-reservations');
      }, 1500);
    }
  } catch (err) {
    showAlert('error', err.response.data.message);
  }
};


export const deleteReservation = async () => {
console.log('welcome delete');
}



  
