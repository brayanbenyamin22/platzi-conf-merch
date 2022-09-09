/* require('dotenv').config()
console.log(process.env.PAYPAL_PAYMENT_CLIENT_ID);  */

const pass = {
    paypalPaymentClientID: String(process.env.REACT_APP_PAYPAL_PAYMENT_CLIENT_ID),
    googleMapsApiKey: String(process.env.REACT_APP_GOOGLE_MAPS_API_KEY)
}

export default pass;