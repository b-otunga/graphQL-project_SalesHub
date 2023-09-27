const mongoose = require('mongoose');
require('dotenv').config(); 
const { ApolloServer } = require('apollo-server');
const { typeDefs} = require("./typeDefs");
const { resolvers} = require("./resolvers");

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




