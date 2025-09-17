module.exports = async function(db,ObjectID) {
  const products = db.collection('products');
  await products.deleteOne({ id: 1 });
  console.log("Product deleted");
}
