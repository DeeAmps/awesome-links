import { Context } from './context';

export const resolvers = {
  Query: {
    links: (_parent, _args, ctx: Context) => ctx.prisma.link.findMany(),
  },
};
