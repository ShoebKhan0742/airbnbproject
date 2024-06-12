const mongoose = require("mongoose");
const Listing = require("../models/listing.js");
const initData = require("./data.js");

main()
    .then(() => {
        console.log('Connected to DB');
        initDB();
    })
    .catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/wonderlust');
}

const initDB = async() =>{
    try {
        await Listing.deleteMany({});
        initData.data = initData.data.map((obj) => ({...obj, owner:"665d67b7d367a2a0a96f3ef7"}));
        await Listing.insertMany(initData.data);
        console.log('Data initialized');
    } catch (error) {
        console.error('Error initializing data:', error);
    }
}







