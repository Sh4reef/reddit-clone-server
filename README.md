# Simple Digg / Reddit Clone - Server

GraphQL is the rising star of backend technologies. It replaces REST as an API design paradigm and is becoming the new standard for exposing the data and functionality of a server.

The following technologies is being used:
- [graphql-yoga](https://github.com/prisma/graphql-yoga): Fully-featured GraphQL server with focus on easy setup, performance & great developer experience. It is built on top of [Express](https://expressjs.com/), [apollo-server](https://github.com/apollographql/apollo-server), [graphql-js](https://github.com/graphql/graphql-js) and more.
- [Prisma](https://www.prisma.io/): Prisma replaces traditional ORMs. Use the Prisma client to implement your GraphQL resolvers and simplify database access
- [GraphQL Playground](https://github.com/prisma/graphql-playground): “GraphQL IDE” that allows to interactively explore the functionality of a GraphQL API by sending queries and mutations to it. It’s somewhat similar to [Postman](https://www.getpostman.com/) which offers comparable functionality for REST APIs. Among other things, a GraphQL Playground…
  - … auto-generates a comprehensive documentation for all available API operations.
  - … provides an editor where you can write queries, mutations & subscriptions, with auto-completion(!) and syntax highlighting.
  - … lets you easily share your API operations.


## What to expect
Through this app the user can create a new<br/>
topic or upvote and downvote existing topics<br/>
from the GraphQL playground

## Live endpoint
This is a free tier so expect a delay
```
https://mrserver.now.sh/
```

## Launch the server locally
- Clone the repository<br/>
```
git clone https://github.com/Sh4reef/reddit-clone-server.git
cd reddit-clone-server
npm install
npm start
```
- GraphQL playground endpoint
```
http://localhost:4000
```