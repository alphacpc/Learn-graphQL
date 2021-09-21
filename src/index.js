import { GraphQLServer } from 'graphql-yoga'

//DEFINITION DE NOTRE SCHEMA
//NOTRE CONTRAT
const typeDefs = "src/Schema/shema.graphql"
//IMPLEMENTER NOTRE CONTRAT
const resolvers = {
  Query: {
    hello: (_, { name }) => `Hello ${name || 'World'}`,
  },
}

const server = new GraphQLServer({ typeDefs, resolvers })
server.start(() => console.log('Server is running on localhost:4000'))