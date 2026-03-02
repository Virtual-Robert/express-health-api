import { describe, it, expect } from 'vitest';
import request from 'supertest';
import app from '../index';

describe('GET /health', () => {
  it('returns 200 with correct JSON shape', async () => {
    const res = await request(app).get('/health');

    expect(res.status).toBe(200);
    expect(res.headers['cache-control']).toBe('no-cache');

    const body = res.body;
    expect(body.status).toBe('ok');
    expect(typeof body.timestamp).toBe('string');
    expect(new Date(body.timestamp).toISOString()).toBe(body.timestamp);
    expect(typeof body.uptime).toBe('number');
    expect(body.uptime).toBeGreaterThanOrEqual(0);
    expect(typeof body.memoryMB).toBe('number');
    expect(body.memoryMB).toBeGreaterThan(0);
  });
});
