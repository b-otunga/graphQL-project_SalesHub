const { gql } = require("apollo-server");
const dealerSchema = require("./MDBschema");

const resolvers = {
    Query: {
      dealers: async () => {
        return await dealerSchema.find();
      },

    oneDealer: async (_, {dealerCode}) => {
        return dealerSchema.find({dealerCode})
    }
    },
    Mutation: {
      async createDealer(
        _,
        { DealerInput: { dealerName, dealerCode, location } }
      ) {
        const dealer = new dealerSchema({
          dealerName: dealerName,
          dealerCode: dealerCode,
          location: location,
          createdOn: new Date().toISOString()
        });
        const result = await dealer.save();
        return result;
      },
    },
  
  };
  
  module.exports = { resolvers};
  