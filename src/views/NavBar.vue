<template>
  <nav class="navbar">
    <div class="navbar-container">
      <div class="navbar-logo">WNDR</div>
      <ul class="navbar-links">
        <li><RouterLink :to="{name: 'balance'}" class="nav-link">Balance</RouterLink></li>
        <li><RouterLink :to="{name: 'reservas'}" class="nav-link">Reservas</RouterLink></li>
        <li><RouterLink :to="{name: 'airbnbs'}" class="nav-link">Ver Airbnbs</RouterLink></li>

        <!-- Solo se muestra si el usuario es superuser -->
        <li v-if="isSuperUser">
          <RouterLink :to="{name: 'admin-log'}" class="nav-link">Admin</RouterLink>
        </li>

        <li><a @click="deleteToken" class="nav-link">Logout</a></li>
      </ul>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useRouter } from 'vue-router'
import { RouterLink } from 'vue-router'

const isSuperUser = ref(localStorage.getItem('superuser') === 'true')

const updateSuperUser = () => {
  isSuperUser.value = localStorage.getItem('superuser') === 'true'
}

onMounted(() => {
  updateSuperUser()
  window.addEventListener('storage', updateSuperUser)
})

onUnmounted(() => {
  window.removeEventListener('storage', updateSuperUser)
})

const router = useRouter()

const deleteToken = () => {
  localStorage.removeItem('token')
  localStorage.removeItem('username')
  localStorage.removeItem('superuser')
  updateSuperUser() 
  router.replace({ name: 'home' })
}
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
