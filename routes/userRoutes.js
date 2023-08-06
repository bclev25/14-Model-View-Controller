const express = require('express');
const router = express.Router();
const {User} = require('../models');

router.post('/register', async (req, res) => {
    try {
        const userData = await User.create(req.body);
        req.session.save(() => {
            req.session.user_id = userData.id;
            req.session.username = userData.username;
            res.status(200).json(userData);
        });
    } catch (err) {
        res.status(500).json(userData);
    }
});

router.post('/login', async (req, res) => {
    try{
        const userData = await User.findOne({where: {username: req.body.username} });
        if (!userData || !userData.checkPassword(req.body.password)) {
            res.status(400).json({message: 'Incorrect username or password'});
            return;
        }
        req.session.save(() => {
            req.session.user_id = userData.id;
            req.session.username = userData.username;
            res.status(200).json(userData);
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

router.post('/logout', (req, res) => {
    if (req.session) {
        req.session.destroy(() => {
            res.status(204).end();
        });
    } else {
        res.status(404).end();
    }
});

module.exports = router;