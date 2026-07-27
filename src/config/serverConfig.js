const dotenv = require('dotenv');
dotenv.config();

module.exports = {
    PORT:process.env.PORT,
    flightCityServicePORT:process.env.flightCityServicePORT,
    authServicePORT:process.env.authServicePORT,
    bookingServicePORT:process.env.bookingServicePORT
}