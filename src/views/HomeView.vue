<template>
  <div class="cards-container">
    <div class="card" v-for="airbnb in airbnbs" :key="airbnb.id">
      <img :src="airbnb.image" alt="Airbnb image" class="card-img" />
      <div class="card-body">
        <h2 class="card-title">{{ airbnb.title }}</h2>
        <p class="card-description">{{ airbnb.description }}</p>
        <p class="card-location">{{ airbnb.location }}</p>
        <p class="card-price">${{ airbnb.price_per_night }} / noche</p>
        <button class="reserve-button" @click="openReservationForm(airbnb.id)">
          Reservar
        </button>
      </div>
    </div>

    <!-- Formulario de reserva -->
    <div v-if="isReservationFormVisible" class="reservation-form">
      <h3>Formulario de Reserva</h3>
      <label for="start_date">Fecha de inicio:</label>
      <input type="date" v-model="reservationData.start_date" required />

      <label for="end_date">Fecha de fin:</label>
      <input type="date" v-model="reservationData.end_date" required />

      <button @click="handleReservation">Confirmar Reserva</button>
      <br>
      <br>
      <button @click="closeReservationForm">Cancelar</button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const airbnbs = ref([]); // Almacena la lista de Airbnbs
const isReservationFormVisible = ref(false); // Estado para mostrar/ocultar el formulario de reserva
const reservationData = ref({
  airbnb: null, // ID del Airbnb
  start_date: '',
  end_date: '',
});

// Obtiene la lista de Airbnbs al cargar el componente
const fetchAirbnbs = async () => {
  try {
    const response = await fetch("http://127.0.0.1:8000/api/app/airbnbs/");
    const data = await response.json();
    airbnbs.value = data;
  } catch (error) {
    console.error("Error fetching airbnbs:", error);
  }
};

// Abre el formulario de reserva y establece el ID del Airbnb
const openReservationForm = (airbnbId) => {
  reservationData.value.airbnb = airbnbId; // Asigna el ID del Airbnb
  isReservationFormVisible.value = true; // Muestra el formulario
};

// Cierra el formulario de reserva
const closeReservationForm = () => {
  isReservationFormVisible.value = false; // Oculta el formulario
  reservationData.value = { airbnb: null, start_date: '', end_date: '' }; // Limpia los datos
};

// Envía los datos de la reserva al servidor
const handleReservation = async () => {
  const token = localStorage.getItem("token");  // Obtener el token desde el localStorage

  if (!token) {
    alert("No has iniciado sesión.");
    return;
  }

  const headers = {
    "Content-Type": "application/json",
    Authorization: `Token ${token}`,
  };

  try {
    const response = await fetch("http://127.0.0.1:8000/api/app/reservations/", {
      method: "POST",
      headers: headers,
      body: JSON.stringify(reservationData.value), // Enviar los datos de la reserva
    });

    if (response.ok) {
      const data = await response.json();
      alert("Reserva confirmada");
      closeReservationForm(); // Cierra el formulario después de la reserva
    } else {
      const errorData = await response.json();
      alert(`Error al realizar la reserva: ${errorData.detail}`);
    }
  } catch (error) {
    console.error("Error al hacer la reserva:", error);
    alert("Error al conectar con el servidor.");
  }
};

// Llamada para obtener la lista de Airbnbs al cargar el componente
fetchAirbnbs();
</script>

<style scoped>
.cards-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 24px;
  padding: 2rem;
  background-color: #f9f9f9;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
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

.reserve-button {
  background-color: rgb(248, 110, 110);
  color: white;
  padding: 10px 16px;
  border: none;
  border-radius: 8px;
  font-size: 0.95rem;
  cursor: pointer;
  transition: background-color 0.2s ease;
  align-self: flex-start;
}

.reserve-button:hover {
  background-color: red;
}

.reservation-form {
  background: white;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 300px;
  z-index: 100;
}

.reservation-form h3 {
  text-align: center;
  margin-bottom: 1rem;
}

.reservation-form label {
  display: block;
  margin: 0.5rem 0;
}

.reservation-form input {
  width: 100%;
  padding: 8px;
  margin-bottom: 1rem;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.reservation-form button {
  width: 100%;
  background-color: rgb(220, 53, 69); /* rojo */
  color: white;
  padding: 12px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
}

.reservation-form button:hover {
  background-color: rgb(200, 45, 60);
}
</style>
