import { readFileSync } from 'fs';
import { join } from 'path';
import { PortfolioData } from '../types/data';

export async function getPortfolioData(): Promise<PortfolioData> {
  const filePath = join(process.cwd(), 'src', 'data', 'data.json'); // Adjusted path
  const jsonData = readFileSync(filePath, 'utf-8');
  return JSON.parse(jsonData);
}