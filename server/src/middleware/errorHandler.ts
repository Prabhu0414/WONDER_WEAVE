import type { Request, Response, NextFunction } from 'express';
import env from "../config/env";

export function errorHandler(err: any, _req: Request, res: Response, _next: NextFunction) {
    // Log concise error in production
    if (env.NODE_ENV === 'production') {
        // eslint-disable-next-line no-console
        console.error(`[ERROR] ${err?.message || 'Unknown error'}`);
    } else {
        // eslint-disable-next-line no-console
        console.error(err);
    }
    const status = err?.status || 500;
    const body: Record<string, unknown> = {
        error: {
            message: err?.message || 'Internal Server Error',
        }
    };
    if (env.NODE_ENV !== 'production' && err?.details) {
        (body.error as any).details = err.details;
    }
    res.status(status).json(body);
}