
const multer = require("multer");
const pify = require("pify"); //needed to promisify upload-export


//initialize multer storage for file upload
var storage = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, "./media-upload");
    }, filename: (req, file, callback) => {
        callback(null, file.fieldname + "_" + Date.now() + "_" + file.originalname);
    }
})


//export upload-function needed for incoming requests
//as middleware
var upload = pify(multer({
    storage: storage
}).single("media"));

exports.upload = upload;