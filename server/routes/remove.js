module.exports = function(db, app, ObjectId) {
  app.post('/api/delete', async function(req, res) {
    if (!req.body) return res.sendStatus(400);

    try {
      const productID = req.body.productid;
      const objectid = new ObjectId(productID);
      const collection = db.collection('products');

      const result = await collection.deleteOne({ _id: objectid });
      if (result.deletedCount === 0) return res.status(404).send({ error: 'Product not found' });

      const data = await collection.find({}).toArray();
      res.send(data);
    } catch (err) {
      res.status(500).send({ error: err.message });
    }
  });
};
