const {MongoClient} = require('mongodb');
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);

const dbName = 'mydb';
async function main() {
    await client.connect();
    console.log('Connected successfully to server');
    const db = client.db(dbName);
    const collection = db.collection('products');

    await collection.drop().catch(()=> console.log("No table to drop"));

    require('./add')(db);
    require('./read')(db);
    require('./update')(db);
    require('./remove')(db);
}   

main();