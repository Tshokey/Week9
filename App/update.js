module.exports = async function(db, ObjectID) {
  const products = db.collection('products');
  await products.updateOne(
    { id: 2 }, 
    { $set: { price: 799.99, units: 25 } }
  );
  console.log("Product updated");
}
