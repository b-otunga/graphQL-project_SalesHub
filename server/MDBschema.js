const {model, Schema} = require("mongoose")

const dealerSchema = new Schema(
    {
        dealerName: String,
       dealerCode: Number,
       location: String,
       createdOn: String

    }
)  

module.exports = model("Dealer", dealerSchema)