const {
    login
} = require("../database/user");

const jwt = require('jsonwebtoken');


/**
 * login function that sends back an AWT-Token to get access to authenticated API-Endpoints
 * TODO: check passwords in hash-values
 */
exports.login = async (req, res) => {
    await login(req.body.mail, req.body.password).then(result => {
        result = result[0];
        if (req.body.password == result.password) {
            let token = jwt.sign({ id: result.id, name: result.name, mail: result.mail, role: result.role }, 'Supersecret', { expiresIn: 129600 });
            res.json({ token });
        } else {
            res.status(401).send();
        }
    }).catch(error => {
        res.status(500).send(error);
    });
}

