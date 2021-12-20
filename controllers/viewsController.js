/* eslint-disable prettier/prettier */
const User = require('../models/userModel');
const Reservation = require('../models/reservationModel');
const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');


exports.getMyReservation = catchAsync(async (req, res, next) => {
  // 1) Get reservations data from collection
  const reservations = await Reservation.find({user:req.user.id}).populate({
    path: 'user',
    fields: 'name mobile'
  });
  // 2) Build template
  // 3) Render that template using reservation data from 1)
  res.status(200).render('my-reservations', {
    title: 'My Reservations',
    reservations
  });
});

exports.getAdminReservation = catchAsync(async (req, res, next) => {
  // 1) Get reservations data from collection
  const reservations = await Reservation.find().populate({
    path: 'user',
    fields: 'name mobile'
  });
  // 2) Build template
  // 3) Render that template using reservation data from 1)
  res.status(200).render('admin-reservations', {
    title: 'Manage Reservations',
    reservations
  });
});

exports.getLoginForm = (req, res) => {
  res.status(200).render('login', {
    title: 'Log into your account'
  });
};

exports.getReserveForm = catchAsync(async (req, res, next) => {
  // 1) Get reservations data from collection
  const userId = req.user;
  res.status(200).render('reserve', {
    title: 'Reserve your next visit'
  });
});

exports.getHome = (req, res) => {
  res.status(200).render('home', {
    title: 'Home'
  });
};


//signup form
exports.getSignupForm = (req, res) => {
  res.status(200).render('signup', {
    title: 'Sign Up'
  });
}