const { prisma } = require('./database/generated/prisma-client')
const { GraphQLServer } = require('graphql-yoga')

/* My implementation */

const resolvers = {
  Query: {
    async topics(root, args, context) {
      return await context.prisma.topics({orderBy: args.orderBy})
    }
  },
  Mutation: {
    async newTopic(root, args, context) {
      return await context.prisma.createTopic({
        content: args.content
      })
    },
    async upVote(root, args, context) {
      const [topic] = await context.prisma.topics({
        where: {
          id: args.id
        }
      })
      return await context.prisma.updateTopic({
        data: {
          votes: ++topic.votes
        },
        where: {
          id: args.id
        }
      })
    },
    async downVote(root, args, context) {
      const [topic] = await context.prisma.topics({
        where: {
          id: args.id
        }
      })
      return await context.prisma.updateTopic({
        data: {
          votes: --topic.votes
        },
        where: {
          id: args.id
        }
      })
    }
  }
}

/* My implementation */

new GraphQLServer({
  typeDefs: 'src/server/schema.graphql',
  resolvers,
  context: {
    prisma
  }
}).start(() => console.log('Server is running on http://localhost:4000'))