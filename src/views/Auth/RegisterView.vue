<template>
  <div class="register-container">
    <form class="register-form" @submit.prevent="handleRegister">
      <h2 class="register-title">Crear Cuenta</h2>

      <label for="nombre" class="register-label">Nombre completo</label>
      <input
        type="text"
        id="nombre"
        v-model="nombre"
        required
        class="register-input"
      />

      <label for="username" class="register-label">Nombre de usuario</label>
      <input
        type="text"
        id="username"
        v-model="username"
        required
        class="register-input"
      />

      <label for="email" class="register-label">Correo electrónico</label>
      <input
        type="email"
        id="email"
        v-model="email"
        required
        class="register-input"
      />

      <label for="password" class="register-label">Contraseña</label>
      <input
        type="password"
        id="password"
        v-model="password"
        required
        class="register-input"
      />

      <button type="submit" class="register-button">Registrarse</button>

      <p v-if="error" class="error-message">{{ error }}</p>
      <p v-if="success" class="success-message">¡Registro exitoso!</p>
    </form>
  </div>
</template>

<script>
export default {
  name: "Register",
  data() {
    return {
      nombre: "",
      username: "",
      email: "",
      password: "",
      error: null,
      success: false,
    };
  },
  methods: {
    async handleRegister() {
      this.error = null;
      this.success = false;

      try {
        const response = await fetch("http://127.0.0.1:8000/api/usuarios/register/", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            nombre: this.nombre,
            username: this.username,
            email: this.email,
            password: this.password,
          }),
        });

        if (!response.ok) {
          const errorData = await response.json();
          this.error = errorData.detail || "Error al registrar usuario";
          return;
        }

        this.success = true;
        this.nombre = "";
        this.username = "";
        this.email = "";
        this.password = "";
      } catch (err) {
        console.error("Error al registrar:", err);
        this.error = "Error al conectar con el servidor.";
      }
    },
  },
};
</script>

<style scoped>
.register-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f4f4f4;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
}

.register-form {
  background: #fff;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 400px;
}

.register-title {
  margin-bottom: 1.5rem;
  text-align: center;
  color: #333;
  font-size: 1.5rem;
}

.register-label {
  display: block;
  margin-bottom: 0.5rem;
  color: #444;
  font-weight: 500;
}

.register-input {
  width: 100%;
  padding: 10px 12px;
  margin-bottom: 1.2rem;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 1rem;
}

.register-button {
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

.register-button:hover {
  background-color: rgb(200, 45, 60);
}

.error-message {
  margin-top: 1rem;
  color: rgb(220, 53, 69);
  text-align: center;
  font-weight: 500;
}

.success-message {
  margin-top: 1rem;
  color: green;
  text-align: center;
  font-weight: 500;
}
</style>
