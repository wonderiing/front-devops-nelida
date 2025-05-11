<template>
  <div class="landing-container">
    <!-- Header -->
    <header class="header">
      <div class="logo-container">
        <h1 class="logo">WNDR</h1>
      </div>
      <nav class="navigation">
        <ul class="nav-links">
          <li><a href="#destinos">Destinos</a></li>
          <li><a href="#propiedades">Propiedades</a></li>
          <li><a href="#experiencias">Experiencias</a></li>
          <li><a href="#contacto">Contacto</a></li>
          <li><RouterLink :to="{name: 'admin-log'}" href="#contacto">Login Admin</RouterLink></li>
        </ul>
      </nav>
      <div class="auth-buttons">
        <RouterLink  :to="{name: 'login'}" class="btn-login">Iniciar Sesión</RouterLink>
        <RouterLink :to="{name: 'register'}" class="btn-signup">Registrarse</RouterLink>
      </div>
    </header>

    <!-- Hero Section -->
    <section class="hero-section">
      <div class="hero-content">
        <h2 class="hero-title">Encuentra tu próximo hogar lejos de casa</h2>
        <p class="hero-subtitle">Descubre alojamientos únicos y experiencias memorables en todo el mundo</p>
        <div class="search-box">
          <div class="search-input">
            <input type="text" placeholder="¿A dónde quieres ir?" />
            <input type="date" placeholder="Llegada" />
            <input type="date" placeholder="Salida" />
            <input type="number" placeholder="Huéspedes" min="1" />
          </div>
          <button class="search-button">Buscar</button>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section class="features-section" id="destinos">
      <h2 class="section-title">Destinos populares</h2>
      <div class="features-container">
        <div class="feature-card">
          <div class="feature-img img-beach"></div>
          <h3>Playas paradisíacas</h3>
          <p>Disfruta de las mejores vistas al mar y arenas blancas</p>
        </div>
        <div class="feature-card">
          <div class="feature-img img-mountain"></div>
          <h3>Montañas y naturaleza</h3>
          <p>Escápate a la tranquilidad y el aire fresco</p>
        </div>
        <div class="feature-card">
          <div class="feature-img img-city"></div>
          <h3>Ciudades vibrantes</h3>
          <p>Vive la cultura y el ritmo urbano</p>
        </div>
        <div class="feature-card">
          <div class="feature-img img-countryside"></div>
          <h3>Campo y relax</h3>
          <p>Desconecta en casas rurales con encanto</p>
        </div>
      </div>
    </section>

    <!-- Properties Section -->
    <section class="properties-section" id="propiedades">
      <h2 class="section-title">Propiedades destacadas</h2>
      <div class="properties-container">
        <div class="property-card">
          <div class="property-img"></div>
          <div class="property-info">
            <h3>Villa con piscina</h3>
            <p class="property-location">Marbella, España</p>
            <div class="property-details">
              <span>4 dormitorios</span>
              <span>Piscina privada</span>
              <span>Vista al mar</span>
            </div>
            <div class="property-price">
              <span>€220</span> / noche
            </div>
          </div>
        </div>
        <div class="property-card">
          <div class="property-img"></div>
          <div class="property-info">
            <h3>Apartamento céntrico</h3>
            <p class="property-location">Barcelona, España</p>
            <div class="property-details">
              <span>2 dormitorios</span>
              <span>Terraza</span>
              <span>WiFi</span>
            </div>
            <div class="property-price">
              <span>€120</span> / noche
            </div>
          </div>
        </div>
        <div class="property-card">
          <div class="property-img"></div>
          <div class="property-info">
            <h3>Cabaña en el bosque</h3>
            <p class="property-location">Asturias, España</p>
            <div class="property-details">
              <span>3 dormitorios</span>
              <span>Chimenea</span>
              <span>Jardín</span>
            </div>
            <div class="property-price">
              <span>€95</span> / noche
            </div>
          </div>
        </div>
      </div>
      <div class="cta-container">
        <button class="cta-button">Ver más propiedades</button>
      </div>
    </section>

    <!-- How it works -->
    <section class="how-it-works" id="experiencias">
      <h2 class="section-title">Cómo funciona</h2>
      <div class="steps-container">
        <div class="step">
          <div class="step-number">1</div>
          <div class="step-content">
            <h3>Busca</h3>
            <p>Explora nuestra amplia selección de propiedades filtradas según tus preferencias</p>
          </div>
        </div>
        <div class="step">
          <div class="step-number">2</div>
          <div class="step-content">
            <h3>Reserva</h3>
            <p>Reserva con facilidad, sin comisiones ocultas y con confirmación instantánea</p>
          </div>
        </div>
        <div class="step">
          <div class="step-number">3</div>
          <div class="step-content">
            <h3>Disfruta</h3>
            <p>Vive una experiencia única con nuestro servicio de atención personalizada 24/7</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Testimonials -->
    <section class="testimonials-section">
      <h2 class="section-title">Lo que dicen nuestros clientes</h2>
      <div class="testimonials-container">
        <div class="testimonial">
          <div class="testimonial-text">
            "Increíble servicio. La casa era exactamente como en las fotos. ¡Volveremos seguro!"
          </div>
          <div class="testimonial-author">
            <div class="author-img"></div>
            <div class="author-info">
              <p class="author-name">María López</p>
              <p class="author-status">Madrid, España</p>
            </div>
          </div>
        </div>
        <div class="testimonial">
          <div class="testimonial-text">
            "La mejor web para encontrar alojamiento. Proceso de reserva sencillo y atención excelente."
          </div>
          <div class="testimonial-author">
            <div class="author-img"></div>
            <div class="author-info">
              <p class="author-name">Juan García</p>
              <p class="author-status">Valencia, España</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Newsletter -->
    <section class="newsletter-section" id="contacto">
      <div class="newsletter-container">
        <h2>Recibe ofertas exclusivas</h2>
        <p>Suscríbete a nuestra newsletter y recibe las mejores ofertas en tu bandeja de entrada</p>
        <div class="newsletter-form">
          <input type="email" placeholder="Tu correo electrónico" />
          <button>Suscribirse</button>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="footer">
      <div class="footer-content">
        <div class="footer-col">
          <h3>StayEasy</h3>
          <p>Tu portal de confianza para encontrar los mejores alojamientos en todo el mundo.</p>
          <div class="social-icons">
            <a href="#" class="social-icon">FB</a>
            <a href="#" class="social-icon">IG</a>
            <a href="#" class="social-icon">TW</a>
          </div>
        </div>
        <div class="footer-col">
          <h3>Enlaces rápidos</h3>
          <ul>
            <li><a href="#destinos">Destinos</a></li>
            <li><a href="#propiedades">Propiedades</a></li>
            <li><a href="#experiencias">Experiencias</a></li>
            <li><a href="#contacto">Contacto</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h3>Soporte</h3>
          <ul>
            <li><a href="#">FAQ</a></li>
            <li><a href="#">Centro de ayuda</a></li>
            <li><a href="#">Políticas</a></li>
            <li><a href="#">Términos de uso</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h3>Contacto</h3>
          <ul>
            <li>info@stayeasy.com</li>
            <li>+34 912 345 678</li>
            <li>Calle Gran Vía 123, Madrid</li>
          </ul>
        </div>
      </div>
      <div class="footer-bottom">
        <p>© 2025 StayEasy. Todos los derechos reservados.</p>
      </div>
    </footer>
  </div>
</template>

<script setup>
// Aquí puedes agregar las importaciones, refs, reactive, etc.
import { ref, onMounted } from 'vue';

// Variables reactivas para el componente
const searchDestination = ref('');
const arrivalDate = ref('');
const departureDate = ref('');
const guests = ref(1);

// Método para manejar la búsqueda
const handleSearch = () => {
  console.log('Búsqueda realizada con los siguientes parámetros:');
  console.log({
    destino: searchDestination.value,
    llegada: arrivalDate.value,
    salida: departureDate.value,
    huespedes: guests.value
  });
  // Aquí iría la lógica para realizar la búsqueda o redireccionar
};

// Lifecycle hooks
onMounted(() => {
  console.log('Componente montado');
  // Aquí podrías cargar datos iniciales, configurar listeners, etc.
});
</script>

<style>
/* Estilos generales */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

body {
  background-color: #f8f8f8;
  color: #333;
  line-height: 1.6;
}

.landing-container {
  width: 100%;
  max-width: 100%;
  overflow-x: hidden;
}

a {
  text-decoration: none;
  color: inherit;
}

ul {
  list-style: none;
}

button {
  cursor: pointer;
  border: none;
  outline: none;
}

/* Header */
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 5%;
  background-color: #fff;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 100;
}

.logo {
  color: #FF5A5F;
  font-size: 1.8rem;
  font-weight: 700;
}

.navigation {
  flex: 1;
  margin: 0 2rem;
}

.nav-links {
  display: flex;
  justify-content: center;
  gap: 2rem;
}

.nav-links li a {
  font-weight: 500;
  transition: color 0.3s;
}

.nav-links li a:hover {
  color: #FF5A5F;
}

.auth-buttons {
  display: flex;
  gap: 1rem;
}

.btn-login, .btn-signup {
  padding: 0.6rem 1.2rem;
  border-radius: 4px;
  font-weight: 500;
  transition: all 0.3s;
}

.btn-login {
  background-color: transparent;
  color: #333;
  border: 1px solid #ddd;
}

.btn-signup {
  background-color: #FF5A5F;
  color: #fff;
}

.btn-login:hover {
  background-color: #f8f8f8;
}

.btn-signup:hover {
  background-color: #ff4146;
}

/* Hero Section */
.hero-section {
  height: 80vh;
  background-image: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('https://a0.muscache.com/im/pictures/miso/Hosting-22877200/original/ae4438d3-6e23-433f-84f1-ed08fb202626.jpeg');
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  text-align: center;
  padding: 0 5%;
}

.hero-content {
  max-width: 800px;
}

.hero-title {
  font-size: 3rem;
  margin-bottom: 1rem;
  font-weight: 700;
}

.hero-subtitle {
  font-size: 1.2rem;
  margin-bottom: 2rem;
}

.search-box {
  background-color: #fff;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
}

.search-input {
  display: flex;
  border-bottom: 1px solid #eee;
}

.search-input input {
  padding: 1rem;
  border: none;
  flex: 1;
  font-size: 1rem;
  border-right: 1px solid #eee;
}

.search-input input:last-child {
  border-right: none;
}

.search-input input:focus {
  outline: none;
}

.search-button {
  width: 100%;
  padding: 1rem;
  background-color: #FF5A5F;
  color: #fff;
  font-size: 1rem;
  font-weight: 500;
  transition: background-color 0.3s;
}

.search-button:hover {
  background-color: #ff4146;
}

/* Features Section */
.features-section {
  padding: 5rem 5%;
  background-color: #fff;
}

.section-title {
  text-align: center;
  font-size: 2.2rem;
  margin-bottom: 3rem;
  color: #333;
}

.features-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
}

.feature-card {
  background-color: #fff;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s;
}

.feature-card:hover {
  transform: translateY(-10px);
}

.feature-img {
  height: 200px;
  background-color: #ddd;
  background-size: cover;
  background-position: center;
}

.img-beach {
  background-image: url('https://media.gq.com.mx/photos/5c8fe8f0d47f8ca854fd4552/16:9/w_2560%2Cc_limit/GettyImages-913710180.jpg');
}

.img-mountain {
  background-image: url('https://s1.ppllstatics.com/eldiariomontanes/www/multimedia/202112/09/media/DMONTANA/mas/lago-colomers-adobestock.jpg');
}

.img-city {
  background-image: url('https://www.visittheusa.mx/sites/default/files/styles/hero_l/public/images/hero_media_image/2017-04/7010d1e88b80578f3d4e6fc09c2a2379.jpeg?h=84c61102&itok=1hAyAqUn');
}

.img-countryside {
  background-image: url('https://a0.muscache.com/im/pictures/0daad7fa-cbdf-41bc-af2a-6f3bf2bd5de3.jpg?im_w=1920');
}

.feature-card h3 {
  padding: 1rem 1rem 0.5rem 1rem;
  font-size: 1.2rem;
}

.feature-card p {
  padding: 0 1rem 1rem 1rem;
  color: #666;
}

/* Properties Section */
.properties-section {
  padding: 5rem 5%;
  background-color: #f8f8f8;
}

.properties-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
}

.property-card {
  background-color: #fff;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

.property-img {
  height: 200px;
  background-color: #ddd;
  background-image: url('https://via.placeholder.com/400x200');
  background-size: cover;
  background-position: center;
}

.property-info {
  padding: 1.5rem;
}

.property-info h3 {
  font-size: 1.3rem;
  margin-bottom: 0.5rem;
}

.property-location {
  color: #666;
  font-size: 0.9rem;
  margin-bottom: 1rem;
}

.property-details {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1rem;
}

.property-details span {
  background-color: #f0f0f0;
  padding: 0.3rem 0.6rem;
  border-radius: 4px;
  font-size: 0.8rem;
}

.property-price {
  font-size: 1rem;
  color: #555;
}

.property-price span {
  font-size: 1.3rem;
  font-weight: 700;
  color: #333;
}

.cta-container {
  text-align: center;
}

.cta-button {
  padding: 1rem 2rem;
  background-color: #FF5A5F;
  color: #fff;
  border-radius: 4px;
  font-size: 1rem;
  font-weight: 500;
  transition: background-color 0.3s;
}

.cta-button:hover {
  background-color: #ff4146;
}

/* How it works */
.how-it-works {
  padding: 5rem 5%;
  background-color: #fff;
}

.steps-container {
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: center;
}

.step {
  display: flex;
  align-items: flex-start;
  gap: 1.5rem;
  max-width: 350px;
}

.step-number {
  background-color: #FF5A5F;
  color: #fff;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.3rem;
  font-weight: 700;
  flex-shrink: 0;
}

.step-content h3 {
  margin-bottom: 0.5rem;
  font-size: 1.2rem;
}

.step-content p {
  color: #666;
}

/* Testimonials */
.testimonials-section {
  padding: 5rem 5%;
  background-color: #f8f8f8;
}

.testimonials-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.testimonial {
  background-color: #fff;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

.testimonial-text {
  font-style: italic;
  margin-bottom: 1.5rem;
  color: #555;
  font-size: 1.1rem;
  line-height: 1.7;
}

.testimonial-author {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.author-img {
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  background-color: #ddd;
  background-image: url('https://via.placeholder.com/100x100');
  background-size: cover;
  background-position: center;
}

.author-name {
  font-weight: 600;
  font-size: 1rem;
}

.author-status {
  color: #666;
  font-size: 0.9rem;
}

/* Newsletter */
.newsletter-section {
  padding: 5rem 5%;
  background-color: #FF5A5F;
  color: #fff;
}

.newsletter-container {
  max-width: 600px;
  margin: 0 auto;
  text-align: center;
}

.newsletter-container h2 {
  font-size: 2rem;
  margin-bottom: 1rem;
}

.newsletter-container p {
  margin-bottom: 2rem;
  font-size: 1.1rem;
}

.newsletter-form {
  display: flex;
  overflow: hidden;
  border-radius: 4px;
}

.newsletter-form input {
  flex: 1;
  padding: 1rem;
  border: none;
  font-size: 1rem;
}

.newsletter-form input:focus {
  outline: none;
}

.newsletter-form button {
  padding: 0 2rem;
  background-color: #333;
  color: #fff;
  font-weight: 500;
  transition: background-color 0.3s;
}

.newsletter-form button:hover {
  background-color: #555;
}

/* Footer */
.footer {
  background-color: #333;
  color: #fff;
  padding: 5rem 5% 2rem;
}

.footer-content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 3rem;
  margin-bottom: 3rem;
}

.footer-col h3 {
  margin-bottom: 1.5rem;
  font-size: 1.2rem;
  font-weight: 600;
}

.footer-col p {
  color: #ccc;
  margin-bottom: 1.5rem;
}

.social-icons {
  display: flex;
  gap: 1rem;
}

.social-icon {
  width: 2.5rem;
  height: 2.5rem;
  background-color: #444;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.3s;
}

.social-icon:hover {
  background-color: #FF5A5F;
}

.footer-col ul li {
  margin-bottom: 0.8rem;
}

.footer-col ul li a {
  color: #ccc;
  transition: color 0.3s;
}

.footer-col ul li a:hover {
  color: #FF5A5F;
}

.footer-bottom {
  text-align: center;
  padding-top: 2rem;
  border-top: 1px solid #444;
  color: #aaa;
  font-size: 0.9rem;
}

/* Media Queries */
@media (max-width: 768px) {
  .navigation {
    display: none;
  }
  
  .hero-title {
    font-size: 2.2rem;
  }
  
  .search-input {
    flex-direction: column;
  }
  
  .search-input input {
    border-right: none;
    border-bottom: 1px solid #eee;
  }
  
  .search-input input:last-child {
    border-bottom: none;
  }
  
  .steps-container {
    flex-direction: column;
    align-items: center;
  }
  
  .newsletter-form {
    flex-direction: column;
  }
  
  .newsletter-form input {
    margin-bottom: 1rem;
  }
}
</style>