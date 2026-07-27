const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
const morgan = require('morgan');
const cors = require('cors');
const axios = require('axios');
const app = express();
const {PORT,flightCityServicePORT,authServicePORT,bookingServicePORT} = require('./config/serverConfig');

app.use(cors());
app.use(morgan('combined'));

/* ---------------- PROXIES ---------------- */

// Flights ---> (send in req.params : arrivalCity, departureCity) {working well}
app.use(
  '/flights',
  createProxyMiddleware({
    target: `http://localhost:${flightCityServicePORT}`,
    changeOrigin: true,
    pathRewrite: {
      '^/' : '/api/v1/flights'
    }
  })
);

// City search ---> (send in req.params : name) {working well}
app.use(
  '/city',
  createProxyMiddleware({
    target: `http://localhost:${flightCityServicePORT}`,
    changeOrigin: true,
    pathRewrite: {
      '^/': '/api/v1/city'
    }
  })
);

// Signup ---> (send in req.body : email , password) {working well}
app.use(
  '/signup',
  createProxyMiddleware({
    target: `http://localhost:${authServicePORT}`,
    changeOrigin: true,
    pathRewrite: {
      '^/': '/api/v1/user/signup'
    }
  })
);


// Login ---> (send in req.body : email , password : getting in data : token) {working well}
app.use(
  '/login',
  createProxyMiddleware({
    target: `http://localhost:${authServicePORT}`,
    changeOrigin: true,
    pathRewrite: {
      '^/': '/api/v1/user/login'
    }
  })
);

// Auth middleware
const isAuthenticated = async (req, res, next) => {
  try {
    const response = await axios.get(
      `http://localhost:${authServicePORT}/api/v1/user/isAuthenticated`,
      {
        headers: { 'x-access-token': req.headers['x-access-token'] }
      }
    );

    if (response.data.success) next();
    else res.status(401).json({ message: 'Unauthorized' });
  } catch (err) {
    res.status(401).json({ message: 'Unauthorized' });
  }
};

// Booking (protected)  ---> (send in req.body : flightId , noOfSeats and send in headers : x-access-token for authentication) {working well}
app.use(
  '/booking',
  isAuthenticated,
  createProxyMiddleware({
    target: `http://localhost:${bookingServicePORT}`,
    changeOrigin: true,
    pathRewrite : {
      '^/' : '/api/v1/booking'
    }
  })
);

app.listen(PORT, () => {
  console.log(`API Gateway running on port ${PORT}`);
});