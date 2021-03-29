/* eslint-disable */

import axios from 'axios';
import { showAlert } from './alerts';
const stripe = Stripe(
  'pk_test_51IIyzELvS3CXtm12hNYfDijrfYDSJPWdXnnlvnx99zTGsNEXISXN2d5dIZ9lskRlBMwbIDAtNzRufPoq0bzAgz3E005N8pRWEN'
);

export const bookTour = async (tourId, dateId) => {
  try {
    // 1) Get checkout session from API
      console.log(tourId, dateId)
    const session = await axios(
      `/api/v1/bookings/checkout-session/${tourId}/${dateId}`
    );
    console.log(session);
    // 2) Create checkout form + charge credit card
    await stripe.redirectToCheckout({
      sessionId: session.data.session.id,
    });
  } catch (err) {
    console.log(err);
    showAlert('error', err);
  }
};
