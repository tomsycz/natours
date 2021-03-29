const express = require('express');
const bookingController = require('../controllers/bookingController');
const authController = require('../controllers/authController');

const router = express.Router({ mergeParams: true }); // mergeParams in this case gives us access to :tourId and :userId from tourRoutes.js

router
  .route('/checkout-session/:tourId/:dateId')
  .get(authController.protect, bookingController.getCheckoutSession);

router.use(
  authController.protect,
  authController.restrictTo('admin', 'lead-guide')
);

router
  .route('/') //operates routes: /api/v1/bookings && /api/v1/tours/:tourId/bookings (tourRoues.js) && /api/v1/users/:userId/bookings (userRoutes.js)
  .get(bookingController.getAllBookings)
  .post(bookingController.createBooking);

router
  .route('/:id')
  .get(bookingController.getBooking)
  .delete(bookingController.deleteBooking)
  .patch(bookingController.updateBooking);

module.exports = router;
