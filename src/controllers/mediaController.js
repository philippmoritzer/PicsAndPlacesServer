const { insertMedia, deleteMedia
} = require("../database/media");


const { upload } = require('../middleware/multerMilddeware');


exports.insert_media = async (req, res) => {
    await upload(req, res).then(async result => {
        let media_response = {
            path: req.file.path.replace("\\", "/"),
            locationId: req.body.locationId
        }
        await insertMedia(media_response.locationId, media_response.path).then(result => {
            media_response.id = result.insertId;
            media_response.date = Date.now();
            res.status(200).json(media_response);
        }).catch(err => {
            res.status(500).json(err);
        });
    }).catch(err => {
        res.status(500).json(err);
    });
}


exports.delete_media = async (req, res) => {
    await deleteMedia(req.params.mediaId).then(result => {
        res.status(200).json(result);
    }).catch(error => {
        res.status(500).json(error);
    });
}