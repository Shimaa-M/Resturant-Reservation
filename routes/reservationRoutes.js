/* eslint-disable prettier/prettier */
const express = require('express');
const reservationController = require('../controllers/reservationController');
const authController = require('../controllers/authController');

const router = express.Router();



router.use(authController.protect);
router
  .route('/reserve')
  .post(reservationController.setTourUserIds,reservationController.createReservation)
  .get(authController.restrictTo('admin'),reservationController.getAllReservations);


 router
  
//   .route('/:id')
//   .get(reservationController.getBooking)
//   .patch(reservationController.updateBooking)
//   .delete(reservationController.deleteBooking);

module.exports = router;
