const app = require("./app");
const dotenv = require("dotenv");
const connectDatabase = require("./config/database")
const cloudinary = require("cloudinary");
// Handling Uncaught Exception
process.on("uncaughtException", (err)=>{
    console.log(`Error: ${err.message} `);
    console.log(`Shutting down the server due to uncaught Exception`)
    process.exit(1);
})

// config
dotenv.config({path:"config/config.env"});
// connect to database
connectDatabase();

cloudinary.config({
    cloud_name:process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret:process.env.CLOUDINARY_API_SECRET
})


const server = app.listen(process.env.PORT || 5000, () => {
    console.log(`server is working on http://localhost/${process.env.PORT}`)
})

// unhandles Promise Rejection

process.on("unhandledRejection", err=>{
    console.log(`Error: ${err.message}`);
    console.log(`Shutting down the server due to unhndles promise rejection`)
    server.close(()=>{
        process.exit(1);
    })
})