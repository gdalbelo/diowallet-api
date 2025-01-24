import { signup, signin } from "../services/authService.js";

async function Signup(req, res) {
    const body = req.body;

    try {
        const resService = await signup(body);
        return res.status(201).send(resService);
    } catch (err) {
        return res.status(409).send(err.message);
    }
}

async function Signin(req, res) {
    const body = req.body;

    try {
        const token = await signin(body);
        return res.send(token);
    } catch (err) {
        return res.status(401).send(err.message);
    }
};

export { Signup, Signin };