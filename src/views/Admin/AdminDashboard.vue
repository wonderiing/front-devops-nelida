<template>
  <div class="admin-panel">
    <h1>Panel de Administración de Airbnbs</h1>

    <div class="form-container">
      <AirbnbForm
        :existing="selectedAirbnb"
        @saved="handleSaved"
      />
    </div>

    <h2>Lista de Airbnbs</h2>
    <div v-if="airbnbs.length === 0">No hay Airbnbs aún.</div>
    <div class="airbnb-list">
      <AirbnbCard
        v-for="airbnb in airbnbs"
        :key="airbnb.id"
        :airbnb="airbnb"
        @edit="selectAirbnb"
        @delete="deleteAirbnb"
      />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import AirbnbForm from './AirbnbForm.vue';
import AirbnbCard from './AirbnbCard.vue';

const airbnbs = ref([]);
const selectedAirbnb = ref(null);
const token = localStorage.getItem('token');

const fetchAirbnbs = async () => {
  try {
    const res = await fetch('http://127.0.0.1:8000/api/app/airbnbs/', {
      headers: {
        Authorization: `Token ${token}`,
      },
    });
    if (res.ok) {
      airbnbs.value = await res.json();
    } else {
      console.error(await res.json());
    }
  } catch (err) {
    console.error('Error al obtener los Airbnbs:', err);
  }
};

const deleteAirbnb = async (id) => {
  if (!confirm('¿Estás seguro de que deseas eliminar este Airbnb?')) return;

  try {
    const res = await fetch(`http://127.0.0.1:8000/api/app/airbnbs/${id}/`, {
      method: 'DELETE',
      headers: {
        Authorization: `Token ${token}`,
      },
    });

    if (res.ok) {
      airbnbs.value = airbnbs.value.filter((a) => a.id !== id);
    } else {
      console.error(await res.json());
    }
  } catch (err) {
    console.error('Error al eliminar el Airbnb:', err);
  }
};

const selectAirbnb = (airbnb) => {
  selectedAirbnb.value = airbnb;
};

const handleSaved = () => {
  selectedAirbnb.value = null;
  fetchAirbnbs();
};

onMounted(fetchAirbnbs);
</script>

<style scoped>
.admin-panel {
  max-width: 1200px;
  margin: 2rem auto;
  padding: 2rem;
}

h1 {
  font-size: 2rem;
  color: black;
  margin-bottom: 1.5rem;
}

h2 {
  font-size: 1.5rem;
  margin-top: 2rem;
  margin-bottom: 1rem;
  color: #333;
}

.form-container {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-bottom: 2rem;
}

.airbnb-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.5rem;
}

@media (max-width: 768px) {
  .airbnb-list {
    grid-template-columns: 1fr;
  }

  .form-container {
    flex-direction: column;
  }
}
</style>
