const { prisma } = require('./database/generated/prisma-client')
const { GraphQLServer } = require('graphql-yoga')

const resolvers = {
  Query: {
    async topics(root, args, context) {
      return await context.prisma.topics()
    }
  },
  Mutation: {
    async newTopic(root, args, context) {      
      return await context.prisma.createTopic({
        content: args.content
      })
    }
  }
}

const server = new GraphQLServer({
  typeDefs: 'src/server/schema.graphql',
  resolvers,
  context: {
    prisma
  }
})
server.start(() => console.log('Server is running on http://localhost:4000'))
