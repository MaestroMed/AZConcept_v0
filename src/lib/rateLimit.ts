/**
 * Simple in-memory sliding-window rate limiter for Next.js route handlers.
 * Keyed by IP (derived from headers).
 * NOT suitable for serverless + horizontal scaling — for that, swap to
 * Upstash / Vercel KV / Redis. But for low-traffic marketing site with
 * a single Vercel region, this is enough to stop form-spam bots.
 */

type Bucket = { count: number; resetAt: number };

const BUCKETS: Map<string, Bucket> = new Map();

export interface RateLimitResult {
  allowed: boolean;
  remaining: number;
  retryAfter: number;
}

export function rateLimit(
  key: string,
  { max = 5, windowMs = 10 * 60 * 1000 }: { max?: number; windowMs?: number } = {}
): RateLimitResult {
  const now = Date.now();
  const bucket = BUCKETS.get(key);

  if (!bucket || bucket.resetAt <= now) {
    BUCKETS.set(key, { count: 1, resetAt: now + windowMs });
    return { allowed: true, remaining: max - 1, retryAfter: 0 };
  }

  bucket.count += 1;
  const remaining = Math.max(0, max - bucket.count);
  const retryAfter = Math.ceil((bucket.resetAt - now) / 1000);

  if (bucket.count > max) {
    return { allowed: false, remaining: 0, retryAfter };
  }
  return { allowed: true, remaining, retryAfter };
}

/** Extract a best-effort IP identifier from a Request. */
export function getIp(request: Request): string {
  const h = request.headers;
  const xff = h.get("x-forwarded-for");
  if (xff) return xff.split(",")[0]!.trim();
  const real = h.get("x-real-ip");
  if (real) return real.trim();
  return "unknown";
}
