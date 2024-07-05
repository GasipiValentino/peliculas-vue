<template>
  <div class="app">
    <div class="header">
      <h1 class="text-center titulo">Películas Más Recomendadas</h1>
      <FiltroPopularidad @filter-change="filterMovies" class="filtro"/>
    </div>
    <v-skeleton-loader type="card" class="loader" v-if="peliculaspopulares.length === 0" width="15rem"></v-skeleton-loader>
    <div v-else class="peliculas-populares">
      <TarjetasPopulares v-for="movie in filteredMovies" :key="movie.id" :movie="movie" @mostar-detalles="irVerDetalles" />
    </div>
  </div>
</template>

<script>
import TarjetasPopulares from '../components/TarjetasPopulares.vue';
import CorazonFavoritos from '../components/CorazonFavoritos.vue';
import FiltroPopularidad from '../components/FiltroPopularidad.vue';

export default {
  components: {
    TarjetasPopulares,
    CorazonFavoritos,
    FiltroPopularidad,
  },
  data() {
    return {
      peliculaspopulares: [],
      filteredMovies: [],
    };
  },
  mounted() {
    this.fetchPeliculasPopulares();
  },
  methods: {
    async fetchPeliculasPopulares() {
      try {
        const apiKey = 'eb1c1e7430bdd0e0d436d2effb40d977';
        const baseUrl = 'https://api.themoviedb.org/3';
        const response = await fetch(`${baseUrl}/movie/popular?api_key=${apiKey}&language=es-ES`);
        const data = await response.json();
        this.peliculaspopulares = data.results;
        this.filteredMovies = this.peliculaspopulares; // Initialize with all movies
      } catch (error) {
        console.error('Error al obtener películas populares:', error);
      }
    },
    filterMovies(filter) {
      switch (filter) {
        case 'entre0y7':
          this.filteredMovies = this.peliculaspopulares.filter(movie => movie.vote_average <= 7);
          break;
        case 'mayor7':
          this.filteredMovies = this.peliculaspopulares.filter(movie => movie.vote_average > 7);
          break;
        default:
          this.filteredMovies = this.peliculaspopulares;
          break;
      }
    },
    irVerDetalles(peliculaId) {
      this.$router.push({ name: 'DetallesPelicula', params: { id: peliculaId } });
    },
  },
};
</script>

<style scoped>
.peliculas-populares {
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
  max-width: 1200px;
  justify-content: center;
  margin: auto;
}

.loader {
  margin: auto;
}

.header{
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}

.titulo{
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-left: 5%
}
.filtro{
  margin: 50px auto;
}

</style>
