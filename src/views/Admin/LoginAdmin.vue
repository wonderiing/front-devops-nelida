<template>
  <div class="login-container">
    <form class="login-form" @submit.prevent="handleLogin">
      <h2 class="login-title">Iniciar Sesión Admin</h2>

      <label for="email" class="login-label">Usuario</label>
      <input
        type="text"
        id="email"
        v-model="email"
        required
        class="login-input"
      />

      <label for="password" class="login-label">Contraseña</label>
      <input
        type="password"
        id="password"
        v-model="password"
        required
        class="login-input"
      />

      <button type="submit" class="login-button">Ingresar</button>

      <p v-if="error" class="error-message">{{ error }}</p>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const email = ref('')
const password = ref('')
const error = ref(null)
const router = useRouter()

const handleLogin = async () => {
  error.value = null

  try {
    const response = await fetch("http://127.0.0.1:8000/api/usuarios/super/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: email.value,
        password: password.value,
      }),
    })

    if (!response.ok) {
      const errorData = await response.json()
      error.value = errorData.detail || "Credenciales incorrectas"
      return
    }

    const data = await response.json()
    const { token, is_superuser } = data

    if (is_superuser) {
      localStorage.setItem('token', token)
      localStorage.setItem('username', email.value)
      localStorage.setItem('superuser', true)
      router.replace({ name: 'admin' }) // Redirigir al panel de administración si es superusuario
    } else {
      error.value = "No tienes permisos de administrador."
    }
  } catch (err) {
    console.error("Error al iniciar sesión:", err)
    error.value = "Error al conectar con el servidor."
  }
}
</script>

<style scoped>
.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f4f4f4;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
}

.login-form {
  background: #fff;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 400px;
}

.login-title {
  margin-bottom: 1.5rem;
  text-align: center;
  color: #333;
  font-size: 1.5rem;
}

.login-label {
  display: block;
  margin-bottom: 0.5rem;
  color: #444;
  font-weight: 500;
}

.login-input {
  width: 100%;
  padding: 10px 12px;
  margin-bottom: 1.2rem;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 1rem;
}

.login-button {
  width: 100%;
  background-color: rgb(220, 53, 69); /* rojo */
  color: white;
  border: none;
  padding: 12px;
  font-size: 1rem;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.2s ease;
}

.login-button:hover {
  background-color: rgb(200, 45, 60);
}

.error-message {
  margin-top: 1rem;
  color: rgb(220, 53, 69);
  text-align: center;
  font-weight: 500;
}
</style>
