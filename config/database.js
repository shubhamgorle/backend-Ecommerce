const mongoose = require("mongoose");
// process.env.DB_URI 
const DB_URI = process.env.DB_URI || "mongodb+srv://temporory09:ykSZtNRAZs8JU9as@ecommerce.quz7w.mongodb.net/Ecommerce?retryWrites=true&w=majority"
const connectDatabase = async() => {
    await mongoose.connect(DB_URI).then((data) => {
        console.log(`mongodb connected with server ${data.connection.host}-${process.env.PORT} `);
    }).catch((error) => {
        console.log(error)
    })
}
module.exports = connectDatabase;