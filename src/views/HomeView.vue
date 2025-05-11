<template>
  <div class="page-container">
    <header class="header">
      <h1>Airbnbs disponibles</h1>
      <input
        type="text"
        v-model="searchQuery"
        placeholder="Buscar por ubicación, título..."
        class="search-bar"
      />
    </header>

    <section class="cards-container">
      <div
        class="card"
        v-for="airbnb in filteredAirbnbs"
        :key="airbnb.id"
      >
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
    </section>

    <!-- Formulario de reserva -->
    <div v-if="isReservationFormVisible" class="reservation-form">
      <h3>Formulario de Reserva</h3>
      <label>Fecha de inicio:</label>
      <input type="date" v-model="reservationData.start_date" required />
      <label>Fecha de fin:</label>
      <input type="date" v-model="reservationData.end_date" required />
      <button @click="handleReservation">Confirmar</button>
      <button class="cancel-button" @click="closeReservationForm">Cancelar</button>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';

const airbnbs = ref([]);
const searchQuery = ref('');

const isReservationFormVisible = ref(false);
const reservationData = ref({
  airbnb: null,
  start_date: '',
  end_date: '',
});

const fetchAirbnbs = async () => {
  try {
    const response = await fetch("http://127.0.0.1:8000/api/app/airbnbs/");
    airbnbs.value = await response.json();
  } catch (error) {
    console.error("Error fetching airbnbs:", error);
  }
};

const filteredAirbnbs = computed(() => {
  const query = searchQuery.value.toLowerCase();
  return airbnbs.value.filter((a) =>
    a.title.toLowerCase().includes(query) ||
    a.location.toLowerCase().includes(query)
  );
});

const openReservationForm = (id) => {
  reservationData.value.airbnb = id;
  isReservationFormVisible.value = true;
};

const closeReservationForm = () => {
  isReservationFormVisible.value = false;
  reservationData.value = { airbnb: null, start_date: '', end_date: '' };
};

const handleReservation = async () => {
  const token = localStorage.getItem("token");

  if (!token) {
    alert("No has iniciado sesión.");
    return;
  }

  try {
    const response = await fetch("http://127.0.0.1:8000/api/app/reservations/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
      },
      body: JSON.stringify(reservationData.value),
    });

    if (response.ok) {
      alert("Reserva confirmada");
      closeReservationForm();
    } else {
      const errorData = await response.json();
      alert(`Error: ${errorData.detail}`);
    }
  } catch (error) {
    console.error("Error:", error);
    alert("No se pudo completar la reserva.");
  }
};

fetchAirbnbs();
</script>

<style scoped>
.page-container {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background: #f7f7f7;
  min-height: 100vh;
}

.header {
  padding: 2rem;
  background: white;
  text-align: center;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
}

.header h1 {
  font-size: 2rem;
  margin-bottom: 1rem;
  color: #222;
}

.search-bar {
  padding: 12px 16px;
  width: 100%;
  max-width: 500px;
  border: 1px solid #ddd;
  border-radius: 25px;
  font-size: 1rem;
}

.cards-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 24px;
  padding: 2rem;
}

.card {
  background: #fff;
  border-radius: 16px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  transition: transform 0.2s ease;
}

.card:hover {
  transform: translateY(-6px);
}

.card-img {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.card-body {
  padding: 1rem;
}

.card-title {
  font-size: 1.25rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
}

.card-description,
.card-location {
  font-size: 0.95rem;
  color: #555;
  margin-bottom: 0.25rem;
}

.card-price {
  font-weight: bold;
  color: #e91e63;
  margin-bottom: 0.75rem;
}

.reserve-button {
  background-color: #ff5a5f;
  color: white;
  padding: 10px;
  border: none;
  border-radius: 8px;
  font-size: 0.95rem;
  cursor: pointer;
  transition: background-color 0.2s ease;
}

.reserve-button:hover {
  background-color: #e04850;
}

.reservation-form {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
  width: 90%;
  max-width: 400px;
  z-index: 999;
}

.reservation-form h3 {
  text-align: center;
  margin-bottom: 1rem;
}

.reservation-form label {
  display: block;
  margin-top: 1rem;
  margin-bottom: 0.25rem;
}

.reservation-form input {
  width: 100%;
  padding: 10px;
  border-radius: 8px;
  border: 1px solid #ccc;
}

.reservation-form button {
  margin-top: 1.5rem;
  width: 100%;
  padding: 12px;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  cursor: pointer;
  background-color: #28a745;
  color: white;
}

.cancel-button {
  background-color: #6c757d;
  margin-top: 0.5rem;
}

.cancel-button:hover {
  background-color: #5a6268;
}
</style>
