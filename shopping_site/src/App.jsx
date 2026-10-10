import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {

  const [cart, setCart] = useState([]);

  const products = [
    {
      id: 1,
      name: "T-Shirt",
      price: 599,
      emoji: "👕"
    },
    {
      id: 2,
      name: "Sneakers",
      price: 1499,
      emoji: "👟"
    },
    {
      id: 3,
      name: "Smart Watch",
      price: 1999,
      emoji: "⌚"
    }
  ];

  function addToCart(product) {
    setCart([...cart, product]);
  }

  function removeFromCart(index) {
    const newCart = [...cart];
    newCart.splice(index, 1);
    setCart(newCart);
  }

  const total = cart.reduce(
    (sum, item) => sum + item.price,
    0
  );

  return (
    <>
      <Header cartCount={cart.length} />

      <section className="hero">
        <h1>Welcome to Shopping Site</h1>
        <p>Shop your favourite products at the best prices.</p>
        <button>Shop Now</button>
      </section>


      {/* Products */}

      <section className="products">

        <h2>Our Products</h2>

        <div className="product-container">

          {products.map((product) => (

            <div className="product-card" key={product.id}>

              <div className="product-img">
                {product.emoji}
              </div>

              <h3>{product.name}</h3>

              <p>₹{product.price}</p>

              <button
                onClick={() => addToCart(product)}
              >
                Add to Cart
              </button>

            </div>

          ))}

        </div>

      </section>


      {/* Cart */}

      <section className="cart">

        <h2>🛒 Your Cart</h2>

        {cart.length === 0 ? (

          <p>Your cart is empty.</p>

        ) : (

          <>
            {cart.map((item, index) => (

              <div className="cart-item" key={index}>

                <span>
                  {item.emoji} {item.name}
                </span>

                <span>₹{item.price}</span>

                <button
                  onClick={() => removeFromCart(index)}
                >
                  Remove
                </button>

              </div>

            ))}

            <h3>Total: ₹{total}</h3>

            <button className="checkout">
              Proceed to Checkout
            </button>

          </>

        )}

      </section>

      <Footer />
    </>
  );
}

export default App;