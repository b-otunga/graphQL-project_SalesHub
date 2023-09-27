const mongoose = require('mongoose');
require('dotenv').config(); 
const { ApolloServer } = require('apollo-server');
const GQLschema = require('./GQLschema.js');
const { typeDefs, resolvers } = GQLschema;

const port = 5020
 
const server = new ApolloServer({
  typeDefs,
  resolvers,
}); 

mongoose.connect(
  process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true
  }
)
.then(() => {console.log("DB Successfully connected");
return server.listen({port})
}).then((res) => {console.log(`Server listening on ${res.url}`)})
.catch((err) => {console.log(err);})




