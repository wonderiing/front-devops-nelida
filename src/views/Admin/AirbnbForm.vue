<template>
  <form @submit.prevent="handleSubmit">
    <input v-model="form.title" placeholder="Título" required />
    <textarea v-model="form.description" placeholder="Descripción" required></textarea>
    <input 
      v-model.number="form.price_per_night" 
      type="number" 
      placeholder="Precio por noche" 
      required 
    />
    <input v-model="form.location" placeholder="Ubicación" required />
    <select v-model="form.status">
      <option value="available">Disponible</option>
      <option value="unavailable">No disponible</option>
    </select>
    <input type="file" @change="handleFiles" />
    <button type="submit">{{ existing ? 'Actualizar' : 'Crear' }}</button>
  </form>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const props = defineProps({ existing: Object });
const emit = defineEmits(['saved']);
const form = ref({
  title: '',
  description: '',
  price_per_night: 0,
  location: '',
  status: 'available',
  image: null, // Cambiado de images a image para coincidir con el backend
});

const token = localStorage.getItem('token');

onMounted(() => {
  if (props.existing) {
    form.value = { 
      ...props.existing, 
      image: null // Inicializar correctamente
    };
  }
});

const handleFiles = (e) => {
  // Solo tomar el primer archivo si el campo es singular
  form.value.image = e.target.files[0];
};

const handleSubmit = async () => {
  const data = new FormData();
  
  // Añadir los campos del formulario al FormData
  for (const key in form.value) {
    if (key === 'image' && form.value[key]) {
      data.append('image', form.value[key]); // Usar 'image' en lugar de 'images'
    } else {
      data.append(key, form.value[key]);
    }
  }
  
  const url = props.existing
    ? `http://127.0.0.1:8000/api/app/airbnbs/${props.existing.id}/`
    : 'http://127.0.0.1:8000/api/app/airbnbs/';
  const method = props.existing ? 'PUT' : 'POST';
  
  try {
    const res = await fetch(url, {
      method,
      headers: { Authorization: `Token ${token}` },
      body: data,
    });
    
    if (res.ok) {
      alert('¡Airbnb enviado con éxito!');
      emit('saved');
      form.value = {
        title: '',
        description: '',
        price_per_night: 0,
        location: '',
        status: 'available',
        image: null,
      };
    } else {
      const errorData = await res.json();
      console.error(errorData);
      alert('Hubo un error al enviar los datos: ' + JSON.stringify(errorData));
    }
  } catch (err) {
    console.error('Error al enviar los datos:', err);
    alert('Hubo un error de red, por favor intenta nuevamente.');
  }
};
</script>

<style scoped>
form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1.5rem;
  background-color: #f9f9f9;
  border-radius: 12px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.05);
  margin-bottom: 2rem;
}

input,
textarea,
select {
  padding: 0.75rem;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 1rem;
  font-family: inherit;
  background-color: #fff;
  transition: border-color 0.3s ease;
}

input:focus,
textarea:focus,
select:focus {
  outline: none;
  border-color: #2e7d32;
}

textarea {
  resize: vertical;
  min-height: 100px;
}

button {
  padding: 0.75rem 1.5rem;
  background-color: rgb(236, 98, 98);
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: red;
}

input[type="file"] {
  border: none;
  padding-left: 0;
}
</style>
