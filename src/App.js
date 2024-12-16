import React, { useState } from "react";
import "./App.css";

function App() {
  const [menuItems, setMenuItems] = useState([
    { id: 1, name: "Pizza Margherita", price: 10 },
    { id: 2, name: "Spaghetti Carbonara", price: 12 },
    { id: 3, name: "Tiramisu", price: 6 },
    { id: 4, name: "Sushi", price: 15 },
    { id: 5, name: "Tacos", price: 8 },
    { id: 6, name: 'Hamburguesa Clásica', description: 'Hamburguesa con queso, lechuga y tomate.', price: 5.99 },
    { id: 7, name: 'Papas Fritas', description: 'Porción de papas fritas crujientes.', price: 2.99 },
    { id: 8, name: 'Pizza Napolitana', description: 'Pizza con tomate, albahaca y mozzarella.', price: 8.99 },
  ]);

  const [cart, setCart] = useState([]);
  const [user, setUser ] = useState({ name: "", email: "" });

  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const handleRegister = (e) => {
    e.preventDefault();
    alert(`Usuario registrado: ${user.name}, ${user.email}`);
    setUser ({ name: "", email: "" });
  };

  return (
    <div className="App">
      <header>
        <h1>Local Gastronomico</h1>
        <form onSubmit={handleRegister} className="register-form">
          <input
            type="text"
            placeholder="Nombre"
            value={user.name}
            onChange={(e) => setUser ({ ...user, name: e.target.value })}
            required
          />
          <input
            type="email"
            placeholder="Correo Electrónico"
            value={user.email}
            onChange={(e) => setUser ({ ...user, email: e.target.value })}
            required
          />
          <button type="submit">Registrarse</button>
        </form>
      </header>

      <main>
        <section className="menu-section">
          <h2>Menú</h2>
          <div className="menu-grid">
            {menuItems.map((item) => (
              <div key={item.id} className="menu-item">
                <h3>{item.name}</h3>
                <p>Precio: ${item.price}</p>
                <button onClick={() => addToCart(item)}>Agregar al carrito</button>
              </div>
            ))}
          </div>
        </section>

        <section className="cart-section">
          <h2>Carrito de Compras</h2>
          {cart.length > 0 ? (
            cart.map((item) => (
              <div key={item.id} className="cart-item">
                <p>{item.name}</p>
                <p>${item.price}</p>
                <button onClick={() => removeFromCart(item.id)}>Eliminar</button>
              </div>
            ))
          ) : (
            <p>Tu carrito está vacío</p>
          )}
          {cart.length > 0 && (
            <h3>Total: ${cart.reduce((acc, item) => acc + item.price, 0)}</h3>
          )}
        </section>
      </main>

      <footer>
        <p>&copy; 2024 Local Gastronomico. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}

export default App;