const { MongoClient } = require('mongodb');

const uri = "mongodb://127.0.0.1";

const client = new MongoClient(uri);

const main = async () => {
    client.connect
}

main();