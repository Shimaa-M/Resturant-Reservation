/* eslint-disable */
import axios from 'axios';
import crypto from 'crypto';
import { showAlert } from './alerts';

export const login = async (email, password) => {
 
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

export const reserve = async (guests,bookedAt ,menu,kids_ ) => {
  try {
    console.log('helo reserve')
    const res = await axios({
      method: 'POST',
      url: '/api/v1/reservations/reserve',
      data: {
        guests,
        bookedAt,
        menu,
        kids_
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


export const deleteReservation = async (id) => {
  try{
const URL =  `/api/v1/reservations/reserve/${id}`;
const res=await axios.delete(URL,{id});
if (res.data.status === 'success') {
  showAlert('success', 'Successfully deleted!');
  window.setTimeout(() => {
    location.assign('/admin-reservations');
  }, 500);
}
} catch (err) {
showAlert('error', err.message);
}
}



  
