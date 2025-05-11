<template>
  <div class="card">
    <h3>{{ airbnb.title }}</h3>
    <p>{{ airbnb.description }}</p>
    <p><strong>Precio:</strong> ${{ airbnb.price_per_night }}</p>
    <p><strong>Ubicación:</strong> {{ airbnb.location }}</p>
    <p><strong>Estado:</strong> {{ airbnb.status }}</p>
    <button @click="$emit('edit', airbnb)">Editar</button>
    <button @click="$emit('delete', airbnb.id)">Eliminar</button>
  </div>
</template>

<script setup>
defineProps({ airbnb: Object });
defineEmits(['edit', 'delete']);
</script>

<style scoped>
.card {
  background-color: #ffffff;
  border: 1px solid #e0e0e0;
  border-radius: 12px;
  padding: 1.5rem;
  width: 100%;
  max-width: 300px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
  transition: transform 0.2s ease;
}

.card:hover {
  transform: translateY(-4px);
}

.card h3 {
  margin-top: 0;
  margin-bottom: 0.5rem;
  color: black;
}

.card p {
  margin: 0.4rem 0;
  color: #555;
}

button {
  margin-top: 1rem;
  margin-right: 0.5rem;
  padding: 0.5rem 1rem;
  font-size: 0.9rem;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

button:first-of-type {
  background-color: #1976d2;
  color: white;
}

button:first-of-type:hover {
  background-color: #125ea5;
}

button:last-of-type {
  background-color: #d32f2f;
  color: white;
}

button:last-of-type:hover {
  background-color: #a10000;
}
</style>
