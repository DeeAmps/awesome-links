import { PrismaClient } from '@prisma/client';
import { NextApiRequest, NextApiResponse } from 'next';

export interface Context {
  prisma: PrismaClient;
}

export const createContext = async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<Context> => ({
  prisma: new PrismaClient(),
});
