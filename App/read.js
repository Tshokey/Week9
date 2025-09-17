module.exports = async function(db) {
  const products = db.collection('products');
  const all = await products.find({}).toArray();
  console.log("Products:", all);
}
