const {
    login,
    signup,
} = require("../database/user");

const {
    getRatingsForUser
} = require("../database/rating");

const {
    getLocationByUserId
} = require('../database/location');

const { location } = require('../models/location');

const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');


/**
 * login function that sends back an JWT-Token to get access to authenticated API-Endpoints 
 */
exports.login = async (req, res) => {
    await login(req.body.mail, req.body.password).then(result => {
        result = result[0];
        const passwortInput = req.body.password;
        const hashSaved = result.password;

        bcrypt.compare(passwortInput, hashSaved, (err, success) => {
            if (success) { //passwords match
                const token = jwt.sign({ id: result.id, name: result.name, mail: result.mail, role: result.role }, 'Supersecret', { expiresIn: 129600 });
                const user = { id: result.id, name: result.name, mail: result.mail, role: result.role, token: token }
                res.status(200).json(user);
            } else { //paswords dont match
                res.status(401).json({ error: "Wrong Password" });

            }
        });
    }).catch(error => {
        console.log(error);
        res.status(500).json(error);
    });
}

exports.signup = async (req, res) => {

    bcrypt.hash(req.body.password, 12, async (err, enc) => {
        req.body.password = enc;
        await signup(req.body).then(async result => {
            result = result[0];
            const token = jwt.sign({ id: result.id, name: result.name, mail: result.mail, role: result.role }, 'Supersecret', { expiresIn: 129600 });
            result.token = token;
            res.status(200).json(result);

        }).catch(err => {
            res.status(500).json(err);
        });
    })


}

exports.get_ratings_for_user = async (req, res) => {
    await getRatingsForUser(req.params.userId).then(result => {
        let ratings = [];

        result.forEach(item => {
            let rating = {
                "id": item.id,
                "value": item.value,
                "comment": item.comment,
                "createdUser": {
                    "id": item.userId,
                    "name": item.name
                },
                "createdTime": item.created_time,
                "updateTime": item.update_time
            };
            ratings.push(rating);
        });

        res.status(200).json(ratings);
    }).catch(err => {
        res.status(500).json(err);
    });
}

exports.get_location_by_user_id = async (req, res) => {
    console.log(req.params);
    await getLocationByUserId(req.params.userId).then(result => {
        let locations = [];
        result.forEach(async (item) => {
            locations.push(location(item));
        });
        res.status(200).json(locations);
    }).catch(error => {
        res.status(500).json(error);
    });

};

