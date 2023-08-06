import { Router } from 'express';
const router = Router();
import { User } from '../models';
import bcrypt from 'bcrypt'; 

router.post('/register', async (req, res) => {
    try {
        const hashedPassword = await bcrypt.hash(req.body.password,10);

        const newUser = await User.create({
            username: req.body.username,
            password: hashedPassword,
        });

        res.status(201).json(newUser);
    } catch (err) {
        res.status(400).json(err);
    }
});

router.post('/login', async (req, res) => {
    try {
        const user = await User.fineOne({where: {username: req.body.username}});
        if (!user) {
            res.status(404).json({message: 'User not found'});
            return;
        }

        const passwordMatch = await bcrypt.compare(req.body.password, user.password);

        if (passwordMatch) {
            res.status(200).json({message: 'Login successful'});
        } else {
            res.status(401).json({message: 'incorrect password'});
        }
    } catch (err) {
        res.status(500).json(err);
    }
});

router.post('/logout', (req, res) => {
    req.session.destroy(() => {
        res.status(204).end();
    });
});

module.exports = router;