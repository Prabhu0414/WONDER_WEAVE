import { Request, Response } from "express";
import User from "../models/user";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || '';

const generateToken = (id: string) => {
    return jwt.sign({ id }, JWT_SECRET, 
        {expiresIn: "1d"});
};

export const signup = async (req: Request, res: Response) => {
    try {
        console.log("Request body:", req.body);

        const user = await User.create(req.body);
        const token = generateToken(user._id.toString());

        res.status(201).json({
            message: "User regsitered successfully",
            token,
            user: {id: user._id, username: user.username, email: user.email },
        });
    } catch (err: any) {
        res.status(400).json({ error: err.message })
    }
}

export const login = async (req: Request, res: Response) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({ email}).select("+password");

        if(!user) return res.status(400).json({ error: "Invalid credentials" });

        const token = generateToken(user._id.toString());
        
        res.json({
            message: "Login successful",
            token,
            user: {id: user._id, username: user.username, email: user.email },
        });
    } catch (err: any) {
        res.status(500).json({ error: err.message });
    }
}