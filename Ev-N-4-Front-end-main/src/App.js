import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* Encabezado */}
      <header className="App-header">
        <h1>Tienda E-Commerce de Comida</h1>
        <nav>
          <ul>
            <li><a href="#about">Sobre Nosotros</a></li>
            <li><a href="#menu">Menú</a></li>
          </ul>
        </nav>
      </header>

      {/* Sección de Información */}
      <section id="about" className="about-section">
        <h2>Sobre Nosotros</h2>
        <p>
          Bienvenido a nuestra tienda de comida en línea. Ofrecemos una gran variedad de comidas
          deliciosas, preparadas con ingredientes frescos y de alta calidad. Nuestro objetivo es 
          brindar a nuestros clientes una experiencia culinaria única desde la comodidad de su hogar.
        </p>
      </section>

      {/* Sección de Menú */}
      <section id="menu" className="menu-section">
        <h2>Menú de Tipos de Comida</h2>
        <div className="menu-grid">
          <div className="menu-item">
            <h3>Comida Italiana</h3>
            <p>Pizza, pasta, lasaña y más.</p>
          </div>
          <div className="menu-item">
            <h3>Comida Mexicana</h3>
            <p>Tacos, burritos, nachos y guacamole.</p>
          </div>
          <div className="menu-item">
            <h3>Comida Japonesa</h3>
            <p>Sushi, ramen, tempura y más.</p>
          </div>
          <div className="menu-item">
            <h3>Postres</h3>
            <p>Pasteles, helados y postres deliciosos.</p>
          </div>
        </div>
      </section>

      {/* Pie de página */}
      <footer className="App-footer">
        <p>&copy; 2024 Tienda E-Commerce de Comida. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}

export default App;
