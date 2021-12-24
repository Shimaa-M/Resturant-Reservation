/* eslint-disable prettier/prettier */
const Reservation = require('../models/reservationModel');
const catchAsync = require('../utils/catchAsync');

exports.setUserIds = (req, res, next) => {
  // Allow nested routes
  if (!req.body.user) req.body.user = req.user.id;
  next();
};

exports.createReservation= catchAsync(async (req, res, next) => {
     await Reservation.create({
      guests: req.body.guests,
      user: req.user._id,
      bookedAt: req.body.bookedAt,
      menu: req.body.menu,
      kids: req.body.kids 
    });
     const userId = req.user._id
     console.log(`kids ${kids}`)
    res.status(201).json({status: 'success'});
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
  exports.deleteReservation = catchAsync(async (req, res, next) => {
    
    const reservation = await Reservation.findByIdAndDelete(req.params.id);
  
    if (!reservation) {
      return next(new AppError('No reservation found with that ID', 404));
    }
  
    res.status(204).json({
      status: 'success',
      data: null
    });
    
  });
