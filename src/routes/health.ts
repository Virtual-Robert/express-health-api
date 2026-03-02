import { Router } from 'express';

const router = Router();

router.get('/health', (_req, res) => {
  const memoryMB = Math.round((process.memoryUsage().rss / 1024 / 1024) * 100) / 100;

  res.setHeader('Cache-Control', 'no-cache');
  res.json({
    status: 'ok',
    timestamp: new Date().toISOString(),
    uptime: Math.floor(process.uptime()),
    memoryMB,
  });
});

export default router;
