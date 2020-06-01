const {
    login,
    signup,
} = require("../database/user");

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
        console.log("HALLO");

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

