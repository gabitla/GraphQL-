const { ApolloServer, gql } = require('apollo-server');

const typeDefs = gql`
  type Query {
    users: [User]
  }
  type User {
    id: ID
    name: String
  }
`;

const resolvers = {
  Query: {
    users: () => [{ id: 1, name: "Gabriela Lizbeth Tumbaco Alulema" }],
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`🚀 Servidor corriendo ${url}`);
});
