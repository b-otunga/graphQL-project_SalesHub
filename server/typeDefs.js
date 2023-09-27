const { gql } = require("apollo-server");
const dealerSchema = require("./MDBschema");

const typeDefs = gql`
  type Dealer {
    dealerName: String
    dealerCode: Int
    location: String
  }

  input DealerInput {
    dealerName: String!
    dealerCode: Int!
    location: String!
  }

  type Query {
    dealers: [Dealer]
    oneDealer(dealerCode: Int): [Dealer]
  }

  type Mutation {
    createDealer(DealerInput: DealerInput): Dealer!
  }
`;

module.exports = { typeDefs};