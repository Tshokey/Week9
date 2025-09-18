module.exports = function(db, app) {
  app.get('/api/read', async function(req, res) {
    try {
      const collection = db.collection('products');
      const data = await collection.find({}).toArray();
      res.send(data);
    } catch (err) {
      res.status(500).send({ error: err.message });
    }
  });
};
