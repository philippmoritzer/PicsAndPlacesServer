//initialize multer storage for file upload
const multer = require("multer");
const pify = require("pify");

var storage = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, "./media-upload");
    }, filename: (req, file, callback) => {
        callback(null, file.fieldname + "_" + Date.now() + "_" + file.originalname);
    }
})

var upload = pify(multer({
    storage: storage
}).single("media"));

exports.upload = upload;