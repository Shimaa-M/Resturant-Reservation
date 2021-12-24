/* eslint-disable prettier/prettier */
const express = require('express');
const reservationController = require('../controllers/reservationController');
const authController = require('../controllers/authController');

const router = express.Router();



router.use(authController.protect);
router
  .route('/reserve')
  .post(reservationController.setUserIds,reservationController.createReservation)
  .get(authController.restrictTo('admin'),reservationController.getAllReservations);


 router
  
   .route('/:id')
   .delete(reservationController.deleteReservation);

module.exports = router;
