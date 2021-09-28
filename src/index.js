import { GraphQLServer, PubSub } from 'graphql-yoga';
import { Query } from './Resolvers/Query.mjs';
import { Todo } from './Resolvers/Todo.mjs';
import { User } from './Resolvers/User.mjs';
import { db } from './Datas/db.mjs'
import { Mutation } from './Resolvers/Mutations.mjs';
import { Subscription } from './Resolvers/Subscription.mjs';

//DEFINITION DE NOTRE SCHEMA

//NOTRE CONTRAT
const typeDefs = "src/Schema/shema.graphql"

//Instancier notre Subscription
const pubsub = new PubSub();

//IMPLEMENTER NOTRE CONTRAT
const resolvers = {
  Query,
  Mutation,
  Subscription,
  Todo,
  User
}

const server = new GraphQLServer({ 
  typeDefs, 
  resolvers, 
  context:{ 
    db,
    pubsub
  }
})

server.start(() => console.log('Server is running on localhost:4000'))