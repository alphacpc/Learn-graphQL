import { GraphQLServer } from 'graphql-yoga';
import { Query } from './Resolvers/Query.mjs';
import { Todo } from './Resolvers/Todo.mjs';
import { User } from './Resolvers/User.mjs';
import { db } from './Datas/db.mjs'
import { Mutation } from './Resolvers/Mutations.mjs';

//DEFINITION DE NOTRE SCHEMA
//NOTRE CONTRAT
const typeDefs = "src/Schema/shema.graphql"


//IMPLEMENTER NOTRE CONTRAT
const resolvers = {
  Query,
  Todo,
  User,
  Mutation
}

const server = new GraphQLServer({ 
  typeDefs, 
  resolvers, 
  context:{ 
    db
  }
})

server.start(() => console.log('Server is running on localhost:4000'))