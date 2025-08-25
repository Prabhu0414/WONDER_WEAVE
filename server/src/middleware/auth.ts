import jwt from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";

const JWT_SECRET = '45769aa5a68d5c8ac8999c4d0d825e6e0891f562979c47686a96ad85c0c11197d15eefc080079201b728a9a17234569012742bsf7015f1836ade4e5d32a13edceb89f4145499e3e22ea24c1d22c98ea902e782bae6e05f61b7e6e077faec0273fd2e7daf84c4426b33fccd7ebbe2e7fd8ee3ea06803baec06c5f1479db8253d82';

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
        const decoded = jwt.verify(token, JWT_SECRET) as {id: string}; 
        req.user = {id: decoded.id};
        next();
    } catch (err) {
        res.status(401).json({ error: "Not authorized, invalid token"});
    }
};