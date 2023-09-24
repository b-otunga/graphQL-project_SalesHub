const { gql } = require('apollo-server');
const dealerSchema = require("./MDBschema");

const typeDefs = gql`
type Dealer {
    dealerName: String,
    dealerCode: Int,
    location: String,
}

input DealerInput{
    dealerName: String,
    dealerCode: Int,
    location: String,  
}

type Query {
  dealer(dealerCode: Int): Dealer!
}

type Mutation {
   createDealer(DealerInput: DealerInput): Dealer! 
}
`

const resolvers = {
       Mutation: {
        async createDealer(_, {DealerInput: {dealerName, dealerCode, location}}){
         const dealer = new dealerSchema({
           dealerName: dealerName,
           dealerCode: dealerCode,
           location: location 
         })  
         const result = await dealer.save()
         return result
        }
       }

}


module.exports = {typeDefs, resolvers}