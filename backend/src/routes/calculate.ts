import { Router } from 'express';
import ResolutionService from '../services/ResolutionService';

const calculateRouter = Router();

interface request {
  lines: number;
  columns: number;
  airports: number;
  clouds: number;
}

calculateRouter.post('/', (req, res) => {
  const resolutionService = new ResolutionService();

  const { lines, columns, airports, clouds } = req.body;

  const result = resolutionService.execute({
    lines,
    columns,
    airports,
    clouds,
  });

  return res.json(result);
});

export default calculateRouter;
