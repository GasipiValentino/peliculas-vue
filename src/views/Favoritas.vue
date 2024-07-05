<template>
  <v-container>
    <div v-if="peliculasFavoritas.length === 0">
    <h2  class="text-center">Todavía no agregaste peliculas a favoritos</h2>
    <RouterLink class="ancla" to="/"><v-btn class="boton">Explorar Películas</v-btn></RouterLink>
    </div>
    <v-row>
      <v-col v-for="movie in peliculasFavoritas" :key="movie.id" cols="12" sm="6" md="4">
        <v-card class="mx-auto" width="220">
          <v-img :src="'https://image.tmdb.org/t/p/w500/' + movie.poster_path" cover></v-img>
          <v-card-title>{{ movie.title }}</v-card-title>
          <v-card-subtitle class="font-weight-bold">{{ movie.vote_average }} %</v-card-subtitle>
          <v-card-actions>
            <v-btn color="green lighten-2" text @click="MostrarDetalles(movie.id)">Ver detalles</v-btn>
            <v-spacer></v-spacer>
            <CorazonFavoritos :movie="movie" @actualizar-favoritos="fetchFavoritos" />
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import CorazonFavoritos from '../components/CorazonFavoritos.vue';

export default {
  components: {
    CorazonFavoritos
  },
  data() {
    return {
      peliculasFavoritas: []
    };
  },
  created() {
    this.fetchFavoritos();
  },
  methods: {
    fetchFavoritos() {
      this.peliculasFavoritas = JSON.parse(localStorage.getItem('favoritos')) || [];
    },
    MostrarDetalles(peliculaId) {
      this.$emit('mostar-detalles', peliculaId); // Emitir evento mostar-detalles con el id de la película
    }
  }
};
</script>

<style scoped>
  .ancla{
    margin-top: 1rem;
    display: flex;
    justify-content: center;
  }
</style>
