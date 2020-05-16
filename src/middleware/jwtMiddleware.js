const exjwt = require('express-jwt');


const jwtMW = exjwt({
    secret: 'Supersecret'
});


exports.jwtMW = jwtMW;
