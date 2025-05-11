<template>
  <div class="balance-form-container">
    <h2>Añadir Balance</h2>

    <!-- Mostrar el balance actual del usuario -->
    <div class="current-balance">
      <p>Balance Actual: ${{ currentBalance }}</p>
    </div>

    <form @submit.prevent="addBalance">
      <div class="form-group">
        <label for="balance">Cantidad a agregar:</label>
        <input
          type="number"
          id="balance"
          v-model="balance"
          placeholder="Ingrese la cantidad"
          required
        />
      </div>
      
      <div class="form-group">
        <label for="cardNumber">Número de tarjeta (ficticio):</label>
        <input
          type="text"
          id="cardNumber"
          v-model="cardNumber"
          placeholder="1234 5678 9876 5432"
          required
        />
      </div>

      <div class="form-group">
        <label for="expiryDate">Fecha de expiración:</label>
        <input
          type="text"
          id="expiryDate"
          v-model="expiryDate"
          placeholder="MM/YY"
          required
        />
      </div>

      <div class="form-group">
        <label for="cvv">CVV:</label>
        <input
          type="text"
          id="cvv"
          v-model="cvv"
          placeholder="123"
          required
        />
      </div>

      <div class="form-group">
        <label for="pin">PIN (ficticio):</label>
        <input
          type="password"
          id="pin"
          v-model="pin"
          placeholder="****"
          required
        />
      </div>

      <button type="submit" class="submit-button">Añadir Balance</button>
    </form>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

// Datos del formulario
const balance = ref('')
const cardNumber = ref('')
const expiryDate = ref('')
const cvv = ref('')
const pin = ref('')

// Estado para almacenar el balance actual
const currentBalance = ref(0)

// Obtener el balance actual del usuario al montar el componente
onMounted(async () => {
  const token = localStorage.getItem('token') // Obtener el token del localStorage
  if (!token) {
    alert('No has iniciado sesión')
    return
  }

  try {
    const response = await fetch('http://127.0.0.1:8000/api/usuarios/my/', {
      method: 'GET',
      headers: {
        'Authorization': `Token ${token}`,
      },
    })

    if (response.ok) {
      const data = await response.json()
      currentBalance.value = data.balance // Asumimos que el balance está en la respuesta
    } else {
      console.error('Error al obtener el balance:', response.status)
      alert('Error al obtener el balance')
    }
  } catch (error) {
    console.error('Error en la solicitud:', error)
    alert('Error en la solicitud')
  }
})

// Función para enviar el balance al endpoint
const addBalance = async () => {
  const token = localStorage.getItem('token') // Obtener el token del localStorage
  if (!token) {
    alert('No has iniciado sesión')
    return
  }

  try {
    const response = await fetch('http://127.0.0.1:8000/api/usuarios/balance/', {
      method: 'POST',
      headers: {
        'Authorization': `Token ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        balance: balance.value, // Enviar el balance
      }),
    })

    if (response.ok) {
      const data = await response.json()
      console.log(data)
      alert(`Balance añadido exitosamente: $${balance.value}`)
      resetForm() // Limpiar el formulario después de agregar el balance
    } else {
      console.error('Error al agregar balance:', response.status)
      alert('Error al agregar balance')
    }
  } catch (error) {
    console.error('Error en la solicitud:', error)
    alert('Error en la solicitud')
  }
}

// Limpiar los campos del formulario
const resetForm = () => {
  balance.value = ''
  cardNumber.value = ''
  expiryDate.value = ''
  cvv.value = ''
  pin.value = ''
}
</script>

<style scoped>
.balance-form-container {
  max-width: 500px;
  margin: 2rem auto;
  padding: 2rem;
  background-color: #ffedf0; /* Color de fondo rosa pastel */
  border-radius: 10px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
  font-family: system-ui, sans-serif; /* Usar system-ui como fuente */
}

h2 {
  text-align: center;
  margin-bottom: 2rem;
  font-size: 1.8rem;
  color: #d22f2f; /* Rojo pastel para el título */
}

.current-balance {
  text-align: center;
  margin-bottom: 1.5rem;
}

.current-balance p {
  font-size: 1.5rem;
  font-weight: bold;
}

.form-group {
  margin-bottom: 1.5rem;
}

label {
  display: block;
  font-size: 1.1rem;
  color: #9b2d2d; /* Rojo pastel para las etiquetas */
  margin-bottom: 0.6rem;
}

input {
  width: 100%;
  padding: 12px;
  font-size: 1.1rem;
  border: 1px solid #ffccd1; /* Borde rosa claro */
  border-radius: 8px;
  box-sizing: border-box;
  background-color: #fff; /* Fondo blanco para los inputs */
  color: #555;
}

input:focus {
  border-color: #e91e63; /* Resaltado con color rosa al estar en foco */
  outline: none;
}

.submit-button {
  background-color: #ff4f5a; /* Rojo pastel para el botón */
  color: white;
  padding: 12px 20px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  width: 100%;
  font-size: 1.2rem;
  margin-top: 1.5rem;
  transition: background-color 0.3s ease;
}

.submit-button:hover {
  background-color: #e91e63; /* Rosa más fuerte al pasar el cursor */
}

.submit-button:active {
  background-color: #d22f2f; /* Rojo más fuerte cuando se hace clic */
}
</style>
