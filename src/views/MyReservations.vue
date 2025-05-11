<template>
  <div class="reservations-container">
    <h2>Mis Reservaciones</h2>
    <div v-if="reservations.length === 0">
      <p>No tienes reservaciones registradas.</p>
    </div>
    <div class="cards-container">
      <div class="card" v-for="reservation in reservations" :key="reservation.id">
        <div v-if="reservation.airbnb.image">
          <img :src="`http://127.0.0.1:8000${reservation.airbnb.image}`" alt="Imagen de Airbnb" class="card-img" />
        </div>
        <div v-else>
          <p>No hay imagen disponible</p> <!-- Mensaje si no hay imagen -->
        </div>

        <div class="card-body">
          <h3 class="card-title">{{ reservation.airbnb.title }}</h3>
          <p class="card-location"><strong>Ubicación:</strong> {{ reservation.airbnb.location }}</p>
          <p class="card-description"><strong>Descripción:</strong> {{ reservation.airbnb.description }}</p>
          <p class="card-price"><strong>Precio por noche:</strong> ${{ reservation.airbnb.price_per_night }}</p>
          <p><strong>Fecha de inicio:</strong> {{ reservation.start_date }}</p>
          <p><strong>Fecha de fin:</strong> {{ reservation.end_date }}</p>
          <p><strong>Precio total:</strong> ${{ reservation.total_price }}</p>
          <p><strong>Reservado el:</strong> {{ formatDate(reservation.created_at) }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const reservations = ref([])

// Función para obtener las reservaciones del usuario
const fetchReservations = async () => {
  const token = localStorage.getItem('token')  // Obtenemos el token del localStorage
  if (!token) {
    alert('No has iniciado sesión')
    return
  }

  try {
    const response = await fetch('http://127.0.0.1:8000/api/app/rsv/my/', {
      headers: {
        'Authorization': `Token ${token}`
      }
    })

    if (response.ok) {
      const data = await response.json()
      reservations.value = data  // Asignamos las reservaciones al array
    } else {
      console.error('Error al obtener reservaciones:', response.status)
      alert('Error al cargar tus reservaciones.')
    }
  } catch (error) {
    console.error('Error en la solicitud:', error)
  }
}

// Formateamos la fecha en un formato legible
const formatDate = (isoString) => {
  const date = new Date(isoString)
  return date.toLocaleString()  // Devuelve la fecha en formato local
}

onMounted(fetchReservations)  // Ejecutamos la función cuando el componente se monte
</script>

<style scoped>
.reservations-container {
  padding: 2rem;
  max-width: 1000px;
  margin: auto;
  font-family: system-ui, sans-serif;
}

.cards-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 24px;
  padding: 2rem;
  background-color: #f9f9f9;
}

.card {
  background: #ffffff;
  border-radius: 16px;
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  width: 320px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  display: flex;
  flex-direction: column;
}

.card:hover {
  transform: translateY(-8px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
}

.card-img {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.card-body {
  padding: 1rem;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  justify-content: space-between;
}

.card-title {
  font-size: 1.4rem;
  font-weight: bold;
  color: #2c3e50;
  margin-bottom: 0.5rem;
}

.card-description {
  font-size: 0.95rem;
  color: #555;
  margin-bottom: 0.4rem;
}

.card-location {
  font-size: 0.9rem;
  color: #888;
  margin-bottom: 0.4rem;
}

.card-price {
  font-size: 1rem;
  font-weight: 600;
  color: #e91e63;
  margin-bottom: 1rem;
}

@media (max-width: 768px) {
  .card {
    width: 100%;
    margin-right: 0;
    margin-left: 0;
  }
}
</style>
