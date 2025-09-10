import jwt from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";
import env from "../config/env";

export interface AuthRequest extends Request {
    user?: {id: string};
}

export const protect = (req:AuthRequest, res: Response, next:NextFunction) => {
    let token;

    if(req.headers.authorization?.startsWith("Bearer")) {
        token = req.headers.authorization.split(" ")[1];
    }

    if(!token) return res.status(401).json({ error: "Not authorized, no token"});

    try {
        const decoded = jwt.verify(token, env.JWT_SECRET) as {id: string}; 
        req.user = {id: decoded.id};
        next();
    } catch (err) {
        res.status(401).json({ error: "Not authorized, invalid token"});
    }
};