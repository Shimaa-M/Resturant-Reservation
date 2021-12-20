/* eslint-disable prettier/prettier */
const Reservation = require('../models/reservationModel');
const catchAsync = require('../utils/catchAsync');

exports.setTourUserIds = (req, res, next) => {
  // Allow nested routes
  if (!req.body.user) req.body.user = req.user.id;
  next();
};

exports.createReservation= catchAsync(async (req, res, next) => {
    const newReservation = await Reservation.create(req.body);
  const userId = req.user._id
  console.log(`current user ${userId}`);
    res.status(201).json({
      status: 'success',
      data: {
        reservation: newReservation
       
      }
    });
  });
  exports.getAllReservations = catchAsync(async (req, res, next) => {
    const reservations = await Reservation.find().populate({
      path: 'user',
      fields: 'name mobile'
    });
    // SEND RESPONSE
    res.status(200).json({
      status: 'success',
      results: reservations.length,
      data: {
        reservations,
  
      }
    });
  });
