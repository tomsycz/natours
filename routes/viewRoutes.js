const express = require('express');
const viewController = require('../controllers/viewsController');
const authController = require('../controllers/authController');
const bookingController = require('../controllers/bookingController');

const router = express.Router();

router.get('/me', authController.protect, viewController.getAccount);
router.get('/my-tours', authController.protect, viewController.getMyTours);

router.post(
  '/submit-user-data',
  authController.protect,
  viewController.updateUserData
);

router.get(
  '/',
  // bookingController.createBookingCheckout,
  authController.isLoggedIn,
  viewController.getOverview
);
router.use(authController.isLoggedIn); // APPLIES TO ALL ROUTES BELLOW -> MIDDLEWARE THAT PROJECTS WHAT TO DISPLAY IN THE HEADER (LOG IN/LOG OUT...)
router.get('/tour/:slug', viewController.getTour);
router.get('/login', viewController.logIn);

module.exports = router;
