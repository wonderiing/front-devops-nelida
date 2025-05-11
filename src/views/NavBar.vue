<template>
  <nav class="navbar">
    <div class="navbar-container">
      <div class="navbar-logo">AirbnbApp</div>
      <ul class="navbar-links">
        <li><RouterLink :to="{name: 'balance'}" class="nav-link">Balance</RouterLink></li>
        <li><RouterLink :to="{name: 'reservas'}" class="nav-link">Reservas</RouterLink></li>
        <li><RouterLink :to="{name: 'airbnbs'}" class="nav-link">Ver Airbnbs</RouterLink></li>
      </ul>
      <div class="user-info">
        <span v-if="username">Hola, {{ username }}</span>
        <span v-else>Usuario no identificado</span>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { RouterLink } from 'vue-router';

// Recuperar el nombre de usuario del localStorage
const username = ref(localStorage.getItem('username') || null);
</script>

<style scoped>
.navbar {
  background-color: rgb(220, 53, 69); /* rojo */
  padding: 1rem 2rem;
  color: white;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
}

.navbar-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.navbar-logo {
  font-size: 1.5rem;
  font-weight: bold;
}

.navbar-links {
  list-style: none;
  display: flex;
  gap: 1.5rem;
  margin: 0;
  padding: 0;
}

.nav-link {
  color: white;
  text-decoration: none;
  font-weight: 500;
  transition: opacity 0.2s ease;
}

.nav-link:hover {
  opacity: 0.8;
}

.user-info {
  color: white;
  font-weight: 500;
}
</style>
