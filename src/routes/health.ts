import { Router, Request, Response } from 'express';

const router = Router();

router.get('/health', (_req: Request, res: Response) => {
  const memoryMB = Math.round((process.memoryUsage().rss / 1024 / 1024) * 100) / 100;

  res.setHeader('Cache-Control', 'no-cache');
  res.json({
    status: 'ok',
    timestamp: new Date().toISOString(),
    uptime: Math.round(process.uptime() * 100) / 100,
    memoryMB,
  });
});

export default router;
