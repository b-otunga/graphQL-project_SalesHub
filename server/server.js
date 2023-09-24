const mongoose = require('mongoose');
const { ApolloServer } = require('apollo-server');
const GQLschema = require('./GQLschema.js');
const { typeDefs, resolvers } = GQLschema;

const port = 5020
 
const server = new ApolloServer({
  typeDefs,
  resolvers,
}); 

mongoose.connect(
  "mongodb+srv://Bill:procedure1@nodeprojects.mtiiga4.mongodb.net/Sales-Portal?retryWrites=true&w=majority", {
      useNewUrlParser: true,
      useUnifiedTopology: true
  }
)
.then(() => {console.log("DB Successfully connected");
return server.listen({port})
}).then((res) => {console.log(`Server listening on ${res.url}`)})
.catch((err) => {console.log(err);})




