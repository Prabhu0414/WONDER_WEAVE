import { z } from "zod";

const envSchema = z.object({
    NODE_ENV: z.enum(["development", "test", "production"]).default("development"),
    PORT: z.string().optional(),
    MONGO_URI: z.string().min(1, "MONGO_URI is required"),
    JWT_SECRET: z.string().min(1, "JWT_SECRET is required"),
    CORS_ORIGIN: z.string().optional(), // comma-separated origins
});

const parsed = envSchema.safeParse(process.env as Record<string, unknown>);

if (!parsed.success) {
    // Aggregate readable errors
    const issues = parsed.error.issues.map(i => `${i.path.join(".")}: ${i.message}`).join(", ");
    throw new Error(`Invalid environment configuration: ${issues}`);
}

const env = parsed.data;

export default env;

