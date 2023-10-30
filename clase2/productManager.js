class ProductManager {
  constructor() {
    this.products = [];
    this.nextId = 1;
  }

  addProduct(productData) {
    // Validar que todos los campos sean obligatorios
    const { title, description, price, thumbnail, code, stock } = productData;
    if (!title || !description || !price || !thumbnail || !code || !stock) {
      console.error("Todos los campos son obligatorios.");
      return;
    }

    // Validar que no se repita el campo "code"
    if (this.products.some(product => product.code === code)) {
      console.error("El código del producto ya existe.");
      return;
    }

    // Agregar el producto con un id autoincrementable
    const product = {
      id: this.nextId,
      title,
      description,
      price,
      thumbnail,
      code,
      stock,
    };
    this.products.push(product);
    this.nextId++;
  }

  getProducts() {
    return this.products;
  }

  getProductById(id) {
    const product = this.products.find(product => product.id === id);
    if (product) {
      return product;
    } else {
      console.error("Producto no encontrado");
    }
  }
}

// Ejemplo de uso
const productManager = new ProductManager();

productManager.addProduct({
  title: "Laptop",
  description: "Potente laptop para trabajo y juegos",
  price: 999.99,
  thumbnail: "laptop.jpg",
  code: "123",
  stock: 10,
});

productManager.addProduct({
  title: "Teclado mecánico",
  description: "Teclado mecánico para jugadores",
  price: 49.99,
  thumbnail: "teclado.jpg",
  code: "456",
  stock: 20,
});

console.log(productManager.getProducts());

const product = productManager.getProductById(1);
console.log(product);