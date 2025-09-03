import type { Request, Response, NextFunction } from 'express';
import type { ZodSchema } from 'zod';

export function validateQuery(schema: ZodSchema) {
  return (req: Request, res: Response, next: NextFunction) => {
    const parsed = schema.safeParse(req.query);
    if (!parsed.success) {
      return res.status(400).json({ error: { message: 'Invalid query', details: parsed.error.flatten() } });
    }
    // attach sanitized data
    (req as any).validatedQuery = parsed.data;
    next();
  };
}

export function validateBody(schema: ZodSchema) {
  return (req: Request, res: Response, next: NextFunction) => {
    const parsed = schema.safeParse(req.body);
    if (!parsed.success) {
      return res.status(400).json({ error: { message: 'Invalid body', details: parsed.error.flatten() } });
    }
    (req as any).validatedBody = parsed.data;
    next();
  };
}
