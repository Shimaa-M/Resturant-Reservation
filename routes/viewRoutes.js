/* eslint-disable prettier/prettier */
const express = require('express');
const viewsController = require('../controllers/viewsController');
const authController = require('../controllers/authController');

const router = express.Router();
//router.use(viewsController.alerts);
const app = express();
app.disable('etag');
router.get('/', authController.isLoggedIn, viewsController.getHome);
router.get('/reserve', authController.isLoggedIn, viewsController.getReserveForm);
router.get('/login', authController.isLoggedIn, viewsController.getLoginForm);
 router.get('/signup',  viewsController.getSignupForm);
 router.get('/logout', authController.logout);
// router.get('/forgotpassword',  viewsController.getforgotPassForm);

 router.get('/admin-reservations', authController.protect,authController.restrictTo('admin'), viewsController.getAdminReservation);
 router.get('/my-reservations', authController.protect, viewsController.getMyReservation);


module.exports = router;
