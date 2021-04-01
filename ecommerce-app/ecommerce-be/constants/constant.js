exports.PORT = 8080;


// status code
exports.OK = 200;
exports.UNAUTHORIZED_USER = 403;
exports.SERVER_ERR = 500;
exports.BAD_REQUEST = 400;
exports.ALREADY_EXISTS = 409;

exports.constants = {

    jwt: {
        expirationTime: '5min',
        secretKey: 'P@^&*!@ad4',
        algorithmType: "HMAC"
    }
}



