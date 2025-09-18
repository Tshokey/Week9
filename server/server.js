const express = require('express');
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
http = require('http').Server(app);
const { MongoClient, ObjectId } = require("mongodb");
const client = new MongoClient('mongodb://localhost:27017');

app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

async function main() {
    await client.connect();
    const db = client.db('mydb');
    const collection = db.collection('products');
    require('./routes/add.js')(db,app);
    require('./routes/read.js')(db,app);
    require('./routes/update.js')(db,app,ObjectId);
    require('./routes/remove.js')(db,app,ObjectId);
}
main();
app.listen(3000, () => console.log("Server on http://localhost:3000"));