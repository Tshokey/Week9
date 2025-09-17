module.exports = async function(db) {
  const products = db.collection('products');
  const items = [
    { id: 1, name: "Laptop", description: "15 inch in size and space grey in colour", price: 1200.50, units: 2 },
    { id: 2, name: "Phone", description: "Samsung Smartphone with 256 GB storage", price: 899.99, units: 20 },
    { id: 3, name: "Tablet", description: "10 inch in size and pink in colour", price: 499.00, units: 14 }
  ];
  await products.insertMany(items);
  console.log("inserted products");
}
