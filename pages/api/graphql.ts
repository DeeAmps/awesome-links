import { ApolloServer } from 'apollo-server-micro';
import { typeDefs } from '../../graphql/schema';
import { resolvers } from '../../graphql/resolvers';
import Cors from 'micro-cors';
import { NextApiRequest, NextApiResponse } from 'next';
import { createContext } from '../../graphql/context';

const cors = Cors({
  allowMethods: ['GET', 'POST', 'OPTIONS'],
  allowHeaders: ['Content-Type', 'Authorization'],
});

const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
  context: createContext,
});

const startServer = apolloServer.start();

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'OPTIONS') {
    res.end();
    return;
  }

  await startServer;

  await apolloServer.createHandler({
    path: '/api/graphql',
  })(req, res);
};

export const config = {
  api: {
    bodyParser: false,
  },
};

export default cors(handler);
