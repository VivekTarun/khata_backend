const mongoose = require("mongoose");
const {NODE_ENV, DB_URL} = require('./server.config')

async function connectToDB() {
    try {
        if(NODE_ENV == "development") {
            await mongoose.connect(DB_URL);
            console.log("Successfully connected to Database");
        }
    } catch (error) {
        console.log("Unable to connect to Database");
        console.log(error);
    }
}

module.exports = connectToDB;