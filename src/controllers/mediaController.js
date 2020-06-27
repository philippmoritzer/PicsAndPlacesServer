const { insertMedia, deleteMedia
} = require("../database/media");


const { upload } = require('../middleware/multerMilddeware');

/**
 * POST - Insert - Protected Route
 * Inserts mediaFile by providing data
 * Uses multerMiddleware-upload()-Method for handling file upload
 * req.body for requirements see example Postman-Request in data-Folder
 * Response Status 200, 500
 */
exports.insert_media = async (req, res) => {
    const locationId = req.params.locationId
    await upload(req, res).then(async result => {
        let media_response = {
            path: req.file.path.replace("\\", "/"),
            locationId: locationId
        }
        await insertMedia(media_response.locationId, media_response.path).then(result => {
            media_response.id = result.insertId;
            media_response.date = Date.now();
            res.status(200).json(media_response);
        }).catch(err => {
            res.status(500).send(err);
        });
    }).catch(err => {
        res.status(500).send(err);
    });
}


/**
 * DELETE - delete - Protected Route
 * Deletes mediaFile by providing mediaId and locationId
 * :locationId and :mediaId need to be provided in url
 * Response Status 200, 500
 */
exports.delete_media = async (req, res) => {
    await deleteMedia(req.params.mediaId).then(result => {
        res.status(200).json(result);
    }).catch(error => {
        res.status(500).json(error);
    });
}   