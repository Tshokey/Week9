module.exports = function(db, app, ObjectId) {
  app.post('/api/update', async function(req, res) {
    if (!req.body) return res.sendStatus(400);

    try {
      const product = req.body;
      const objectid = new ObjectId(product._id);
      const collection = db.collection('products');

      const result = await collection.updateOne(
        { _id: objectid },
        { $set: {
            name: product.name,
            description: product.description,
            price: product.price,
            units: product.units
          } }
      );

      res.send({ modifiedCount: result.modifiedCount });
    } catch (err) {
      res.status(500).send({ error: err.message });
    }
  });
};
