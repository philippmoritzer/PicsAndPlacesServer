const exjwt = require('express-jwt');

/**
 * Defining Jwt-Variable with a secret to export as middleware
 */
const jwtMW = exjwt({
    secret: 'Supersecret'
});


exports.jwtMW = jwtMW;
